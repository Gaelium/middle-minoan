import React from "react";
import { useParams } from "react-router-dom";
import sitesData from "../data/sitesData";

const Site = () => {
  const { siteId } = 1;
  const site = sitesData[siteId];

  return (
    <div>
      <h1>{site.name}</h1>
      <p>{site.generalExplanation}</p>
      <div>
        {site.images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.explanation} />
            <p>{image.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Site;
