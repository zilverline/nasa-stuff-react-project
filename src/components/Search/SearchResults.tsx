import React, { Fragment } from "react";

import moon from "../../assets/moon.jpg";
import { NasaImage } from "../../models/shared";

interface ResultImageProps {
  image: NasaImage;
}

const ResultImage = ({ image }: ResultImageProps) => {
  const imageLink: string = image?.links?.[0]?.href || moon;
  const imageAlt: string = image?.data?.[0]?.title || "moon";
  const title: string = image?.data?.[0]?.title || "No content";
  const description: string | null =
    image?.data?.[0]?.description !== title
      ? image?.data?.[0]?.description
      : null;
  const creator: string = image?.data?.[0]?.secondary_creator || "Unknown";

  return (
    <div className="cardborder">
      <div className="leftbox">
        <div className="image">
          <img src={imageLink} alt={imageAlt} />
        </div>
      </div>
      <div className="rightbox">
        <h2 className="title">{title}</h2>
      </div>
      <div className="clearfix">
        <div className="bottombox">
          <p className="desc">{description}</p>
        </div>
      </div>
      <div className="creator">
        <p>{creator}</p>
      </div>
    </div>
  );
};

interface SearchResultsProps {
  images: NasaImage[];
}

const SearchResults = ({ images }: SearchResultsProps) => {
  const content = !images.length ? (
    <div className="noresult">no results yet</div>
  ) : (
    <Fragment>
      {images.map((image) => (
        <ResultImage key={image.data[0].nasa_id} image={image} />
      ))}
    </Fragment>
  );
  return <div className="searchstuff">{content}</div>;
};

export default SearchResults;
