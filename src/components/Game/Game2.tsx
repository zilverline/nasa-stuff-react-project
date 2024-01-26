import React, { useCallback, useEffect, useState } from "react";

import PlayAgain from "../PlayAgain";
import type { GuessResult, Image } from "../../models/shared";
import { getGameImages } from "../../utils/shared";

const Game2 = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [descToPick, setDescToPick] = useState<string>("");
  const [gamePlayed, setGamePlayed] = useState<boolean>(false);
  const [guessResult, setGuessResult] = useState<GuessResult>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const selectDescToPick = useCallback(
    (images: Image[]) => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setDescToPick(randomImage.description);
    },
    [setDescToPick]
  );

  const fetchImages = useCallback(async () => {
    try {
      const imagesResponse = await Promise.all([
        getGameImages(),
        getGameImages(),
        getGameImages(),
        getGameImages(),
      ]);
      const images: Image[] = imagesResponse.reduce<Image[]>(
        (imagesArray, response) => {
          if (!response || !response.length) {
            return images;
          }
          return [...imagesArray, response[0]];
        },
        []
      );
      setImages(images);
      selectDescToPick(images);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error occurred, try again");
      setLoading(false);
    }
  }, [setImages]);

  const selectImageWithDesc = useCallback(
    (desc: string) => {
      setGuessResult(desc === descToPick);
      setGamePlayed(true);
    },
    [descToPick]
  );

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <div className="loading">...Loading</div>;
  if (error) return <div className="loading">{error}</div>;

  return (
    <div className="game">
      <div className="titlegame">
        <p> {"Guess which is the image with description:"}</p>
        <p> {descToPick}</p>
      </div>
      <div className="images-container">
        {images.map(({ url, description }) => (
          <div
            className="image-container"
            onClick={() => selectImageWithDesc(description)}
          >
            <img
              className="image"
              key={url}
              src={url}
              alt={"Random space image"}
            />
          </div>
        ))}
      </div>
      {
        <div className="gamebutton">
          {guessResult === undefined ? null : guessResult ? (
            <p>You're Right!</p>
          ) : (
            <p>{`Wrong, Try Again`}</p>
          )}
        </div>
      }
      {gamePlayed && <PlayAgain />}
    </div>
  );
};

export default Game2;
