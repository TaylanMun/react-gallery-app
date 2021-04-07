import React from "react";
import Photo from "./Photo";
import NoResults from "./NoResults";
import Loading from "./Loading";

const PhotosList = ({ query, photos,loading }) => {
  let photoHtml;
  // if there is a photo
  
  if(loading){
    photoHtml = <Loading />;
  }else if (photos.length) {
    photoHtml = photos.map((photo) => {
      const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
      return <li key={photo.id}>
        <Photo url={url} title={photo.title} />
      </li>;
    });
  } else {
    // if there is no search return loading false
    photoHtml = <NoResults />;

  }
  return (
    <div className="photo-container">
      <h2>{query}</h2>
      <ul>{photoHtml}</ul>
    </div>
  );
};

export default PhotosList;
