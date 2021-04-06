import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
import PhotosList from "./PhotosList";
import axios from "axios";

// Use React Hooks
const PhotoContainer = ({ apiKey }) => {
  // for taking url params
  let params = useParams();

  // state => React Hooks
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState({});
  const [query, setQuery] = useState("");

  // if change params.query, this works and change query state
  useEffect(() => {
    if (params.query) {
      setQuery(params.query)
    }else{
      setQuery("react");
    }
  }, [params.query]);

  // If change query, this works and request to api.
  useEffect(() => {
    if (query && apiKey) {
      const getPhotos = (query) => {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&format=json&nojsoncallback=1&per_page=24`;
        axios.get(url).then((response) => {
          response && setPhotos(response.data.photos.photo);
          setLoading(false);
        });
      };
      getPhotos(query);
    }
  }, [query, apiKey]);



  return (
    <React.Fragment>
      <SearchForm />
      <Navbar />
      <PhotosList query={query} photos={photos} loading={loading} />
    </React.Fragment>
  );
};

export default PhotoContainer;
