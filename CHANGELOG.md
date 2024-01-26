## [Version 1.0.0] - 2024-01-26

### Added

- Initial release of the NASA API Search and Game App on github pages.
- Search functionality that allows users to search for images using the NASA API.
- Three interactive games: Image Matching, Description Matching, and Pair Matching Games.
- A comprehensive testing suite using Jest, Testing Library, and Mock Service Worker (MSW).
- Integration of TypeScript to improve type safety and development efficiency.
- Enhanced code quality and better collaboration with TypeScript's static type-checking and rich IDE support.
- Upgrade React and other crate-react-app related packages to latest

### Fixed

- Error handling for scenarios where API responses contain empty fields or no results.
- Loading behavior for games & search.
- Remove multiple calls to form submit in SearchForm.
- Fix method names from hasContent, hasImage etc. to more descriptive getImages etc.
- Add key prop to mapped components to prevent rendering inefficiency.
- Add alt props to img components for SEO and accessibility.
- Add text elements like p, h1, h2 etc. for text elements for SEO and accessibility.
- Ditch functions returning react components in favour of real react components. Read more:https://kentcdodds.com/blog/dont-call-a-react-function-component
- Remove unused state declarations.
- Remove direct HTML DOM manipulation via jquery, use react components instead.
- Remove id prop from buttons and pass the ids into onClick methods directly
- Instead of creating an array with 100 elements and getting the length to randomize a number between 0-100, simply use the number 100

## [Initial Concept] - 2019-03-01

### Started

The project's initial idea as a simple search tool using the NASA API.
Exploration of React components, state, and props in the development process.
