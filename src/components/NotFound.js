import React from "react";
import { useHistory } from "react-router-dom";

import SearchForm from "./SearchForm";
import Navbar from "./Navbar";

const NotFound = () => {
  let history = useHistory();

  return (
    <React.Fragment>
      <SearchForm />
      <Navbar />
      <div className="page_error"></div>
      <div className="four_zero_four_bg">
        <h1>404</h1>
      </div>
      <div className="contant_box_error">
        <h1 className="text-center">Not Found</h1>
        <h3>It looks like you're lost</h3>
        <button className="link_error" onClick={() => history.push('/')}>Go to home</button>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
