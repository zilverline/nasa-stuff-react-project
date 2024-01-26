import React, { useEffect, useState, useRef } from "react";
import Draggable, { type DraggableData } from "react-draggable";

import PlayAgain from "../PlayAgain";
import type { Image, ImagePair, ImagePosition } from "../../models/shared";
import { getGameImages, shuffleArray } from "../../utils/shared";

const Game3 = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [pairs, setPairs] = useState<ImagePair[] | null>(null);
  const [gamePlayed, setGamePlayed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const positionsRef = useRef<ImagePosition[]>(
    new Array(4).fill({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      url: "",
    })
  );
  const checkCollidingImages = (movingPosition: ImagePosition) => {
    const unMovedPositions = positionsRef.current.filter(
      (pos) => pos.url !== movingPosition.url
    );
    unMovedPositions.forEach((remPost) => {
      if (
        !remPost.right &&
        !remPost.left &&
        !remPost.top &&
        !remPost.bottom &&
        !remPost.height &&
        !remPost.width
      ) {
        return;
      }
      const horizontalContact =
        (remPost.right - movingPosition.left > 0 &&
          remPost.right - movingPosition.left < movingPosition.width) ||
        (movingPosition.right - remPost.left > 0 &&
          movingPosition.right - remPost.left < remPost.width);

      const verticalContact =
        (remPost.bottom - movingPosition.top > 0 &&
          remPost.bottom - movingPosition.top < movingPosition.height) ||
        (movingPosition.bottom - remPost.top > 0 &&
          movingPosition.bottom - remPost.top < remPost.height);

      if (verticalContact && horizontalContact) {
        setImages((state) =>
          state.map((image) =>
            (image.url === movingPosition.url || image.url === remPost.url) &&
            !image.colludingWith?.some(
              (collidingImageUrl) =>
                collidingImageUrl === movingPosition.url ||
                collidingImageUrl === remPost.url
            )
              ? {
                  ...image,
                  colludingWith: [
                    ...(image.colludingWith || []),
                    image.url === movingPosition.url
                      ? remPost.url
                      : movingPosition.url,
                  ],
                }
              : image
          )
        );
      } else {
        setImages((state) =>
          state.map((image) =>
            image.url === movingPosition.url || image.url === remPost.url
              ? {
                  ...image,
                  colludingWith: image.colludingWith?.filter(
                    (collidingImageUrl) =>
                      collidingImageUrl !==
                      (image.url === movingPosition.url
                        ? remPost.url
                        : movingPosition.url)
                  ),
                }
              : image
          )
        );
      }
    });
  };

  const fetchImages = async () => {
    try {
      const imagesResponse = await Promise.all([
        getGameImages(2),
        getGameImages(2),
      ]);
      const currentPairs: ImagePair[] = [];
      const images: Image[] = imagesResponse.reduce<Image[]>(
        (imagesArray, response) => {
          if (!response || !response.length) {
            return images;
          }
          currentPairs.push([response[0], response[1]]);
          return [...imagesArray, ...response];
        },
        []
      );
      const shuffledImages: Image[] = shuffleArray(images);
      positionsRef.current = positionsRef.current.map((pos, index) => ({
        ...pos,
        url: shuffledImages[index].url,
      }));
      setImages(shuffledImages);
      setPairs(currentPairs);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error occurred, try again");
      setIsLoading(false);
    }
  };

  const onStop = (url: string, { node }: DraggableData) => {
    const { left, top, right, bottom, height, width } =
      node.getBoundingClientRect();
    positionsRef.current = positionsRef.current.map((el) => {
      if (el.url === url) {
        const newPosition: ImagePosition = {
          ...el,
          left,
          top,
          right,
          bottom,
          height,
          width,
        };
        checkCollidingImages(newPosition!);
        return newPosition;
      }
      return el;
    });
    setGamePlayed(true);
  };

  const getCollidingClassName = (
    url: string,
    colludingWith?: string[]
  ): string => {
    if (!pairs || !colludingWith) {
      return "";
    }
    if (colludingWith.length > 1) {
      return "image-container-danger";
    }
    for (const pair of pairs) {
      const pairedIndex = pair.findIndex((img) => img.url === url);
      if (
        pairedIndex > -1 &&
        pair[pairedIndex === 0 ? 1 : 0].url === colludingWith[0]
      ) {
        return "image-container-success";
      }
    }
    return "image-container-danger";
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (isLoading) return <div className="loading">...Loading</div>;
  if (error) return <div className="loading">{error}</div>;

  return (
    <div className="game match-game">
      <div className="titlegame">
        <p>{`Match the images with its related pair`}</p>
        <p>{`Drag the images to the assigned area and make sure paired images are sitting on top of each other`}</p>
      </div>
      <div className="images-container">
        {images.map(({ url, colludingWith }) => (
          <Draggable key={url} onStop={(_, data) => onStop(url, data)}>
            <div
              className={`image-container ${getCollidingClassName(
                url,
                colludingWith
              )}`}
            >
              <img
                className="image"
                src={url}
                alt={"Random space image"}
                draggable={false}
              />
            </div>
          </Draggable>
        ))}
      </div>
      <div className="drag-here-container">
        <h2>DRAG HERE!</h2>
      </div>
      {gamePlayed && <PlayAgain />}
    </div>
  );
};

export default Game3;
