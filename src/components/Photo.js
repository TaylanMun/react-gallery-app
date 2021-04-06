import React from "react";

const Photo = ({ url, title }) => {
  return <img src={url} alt={title} />;
};

export default Photo;
