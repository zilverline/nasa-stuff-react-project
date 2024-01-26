import axios from "axios";

import { SEARCH_TERMS } from "../constants/shared";
import { Image } from "../models/shared";

export const getGameImages = async (amount: number = 1): Promise<Image[]> => {
  const randomSearchItem =
    SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)];

  const url = "https://images-api.nasa.gov/search?q=";

  const response = await axios({
    url: url + randomSearchItem,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response) {
    throw new Error("No response");
  }

  const images: Image[] = [];

  for (let i = 0; i < amount; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    const image = {
      url: response.data.collection.items[randomNumber].links[0].href,
      title: response.data.collection.items[randomNumber].data?.[0]?.title,
      description:
        response.data.collection.items[randomNumber].data?.[0]?.description,
    };
    images.push(image);
  }
  return images;
};

export const shuffleArray = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
};
