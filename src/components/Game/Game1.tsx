import React, { useCallback, useEffect, useState } from "react";

import PlayAgain from "../PlayAgain";
import type { GuessResult, Image } from "../../models/shared";
import { getGameImages } from "../../utils/shared";

const Game1 = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [descToPick, setDescToPick] = useState<string>("");
  const [gamePlayed, setGamePlayed] = useState<boolean>(false);
  const [guessResult, setGuessResult] = useState<GuessResult>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const selectTitleToPick = useCallback(
    (images: Image[]) => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setDescToPick(randomImage.title);
    },
    [setDescToPick]
  );

  const fetchImages = useCallback(async () => {
    try {
      const imagesResponse = await Promise.all([
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
      selectTitleToPick(images);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error occurred, try again");
      setLoading(false);
    }
  }, [setImages]);

  const selectImageWithTitle = useCallback(
    (title: string) => {
      setGuessResult(title === descToPick);
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
        <p>{`Guess which is the image with title ${descToPick}`}</p>
      </div>
      <div className="images-container">
        {images.map(({ url, title }) => (
          <div
            className="image-container"
            onClick={() => selectImageWithTitle(title)}
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

export default Game1;
