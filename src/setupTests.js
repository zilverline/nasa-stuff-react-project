import "@testing-library/jest-dom";
import "../jest.polyfills";
import { setupServer } from "msw/node";
import { handlers } from "./mocks";

const server = setupServer(...handlers);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
