import { getGameImages } from "./shared";

it("displays data from API", async () => {
  const images = await getGameImages();
  expect(images.length).toBe(1);
  expect(images[0].url).toBeTruthy();
  expect(images[0].title).toBeTruthy();
  expect(images[0].description).toBeTruthy();
});
