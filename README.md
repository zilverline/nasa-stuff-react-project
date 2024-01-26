# Nasa Image Directory

## Overview

This application, developed as a learning project in React, offers users a unique and engaging way to explore the vast universe through the NASA API. Initially conceptualized in March 2019, the app has grown from a simple search tool into an interactive educational platform featuring multiple games based on NASA's rich database of celestial images and data.

## Features

### Search Functionality

#### NASA Image Search:

Users can enter a term, and the app leverages the NASA API to present a list of relevant results displayed on interactive cards.

#### Error Handling and Default Images:

Graceful handling of empty fields in the JSON response. If an image is not available, a default image is displayed. Users are also informed when their search terms yield no results.

### Interactive Games

#### Image Matching Game:

Users are presented with two images and must select the one that matches the given name.

#### Description Matching Game:

A game where users are given a description and multiple images. The challenge is to match the image with its description.

#### Pair Matching Game

Users are shown four objects, forming two matching sets. The task is to correctly pair the objects with each other.

### Technical Highlights

#### React Components:

The application is built using React components, emphasizing the learning and implementation of state and props.

#### Container Component:

Handling the complex relationships between different components through a central container component.

#### Dynamic Rendering:

Utilizes mapping to dynamically create cards based on the images retrieved from the NASA API search results.

#### Error Handling and User Feedback:

Implements sophisticated error handling to manage empty fields in API responses and enhance user experience by providing feedback on search results.

### TypeScript Integration

#### Type Safety and Development Efficiency

The application's development was enhanced by integrating TypeScript, providing type safety and reducing runtime errors. TypeScript's static type-checking feature significantly improved code reliability and maintainability.
TypeScript's rich IDE support and auto-completion capabilities streamlined the development process, making it faster and more efficient.

#### Improved Collaboration and Code Quality

The use of TypeScript in the project also facilitated better collaboration among developers. The self-documenting nature of types made the codebase more understandable and accessible to new contributors.
TypeScript's compatibility with the latest JavaScript features ensured that the application could leverage modern development practices while maintaining a high standard of code quality.

### Testing

#### Testing Strategy

Comprehensive testing was implemented using a combination of Jest, Testing Library, and Mock Service Worker (MSW).
Jest was used for its powerful and efficient testing framework compatible with React applications.
Testing Library provided user-centric tests, ensuring that the app functions correctly from the user's perspective.
MSW was employed to intercept and mock HTTP requests, enabling us to test the app's response to various API scenarios without relying on live API calls.

#### Test Coverage

##### Unit Tests:

Focused on individual components, ensuring that each one behaves as expected in isolation.

##### Integration Tests:

Tested interactions between components and their combined behavior to verify that the app's features work together seamlessly.

##### Mock API Responses:

Simulated various API responses to test the app's robustness and error handling capabilities, including scenarios with no results, default images, and network failures.

### Acknowledgements

This project was an endeavor to deepen my understanding of React and to explore the possibilities of integrating APIs into web applications. It reflects a journey from the basics of component interaction to the creation of a multifaceted, user-engaging app. Special thanks to NASA for providing an open API that serves as a window to the universe.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory first install all dependencies:

### `npm install`

Then you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Will create a new branch with an optimized production build and will push it to the remote repository in github. This branch then will be the basis for the app to be published in github pages in the url specified as "homepage" in package.json

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
