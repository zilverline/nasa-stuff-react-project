import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

import { NasaImage } from "../../models/shared";

const Search = () => {
  const [images, setImages] = useState<NasaImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(
    async (query = "") => {
      try {
        setIsLoading(true);
        const response = await axios(
          `https://images-api.nasa.gov/search?q=${query}`
        );
        if (!response) {
          throw new Error("No response");
        }
        setImages(response.data.collection.items);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error occurred, try again");
        setIsLoading(false);
      }
    },
    [setImages, setIsLoading, setError]
  );

  return (
    <div>
      <div className="go-back-container">
        <Link to="/">
          <button>Go Back!</button>
        </Link>
      </div>
      <SearchForm fetchImages={fetchImages} />
      {error ? (
        <div className="loading">{error}</div>
      ) : isLoading ? (
        <div className="loading">...Loading</div>
      ) : (
        <SearchResults images={images} />
      )}
    </div>
  );
};
export default Search;
