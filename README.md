# verify-challenge TASK #1

This project was deployed [here](https://rustamkhananov.github.io/verify-challenge/).\
Main goal was to create component "FruitAutocomplete"\
The rest of the project was created to demonstrate this component

## Used tools
- React.js
- TypeScript
- CSS
- testing-library/react (for test coverage)

## To start project locally

### Clone project
git clone https://github.com/RustamKhananov/verify-challenge.git

### Install dependencies
npm i

### Start project
npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To start tests locally
npm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## FruitAutocomplete does the following:
1. Simulates an API request to fetch the array of fruits by doing the following:\
 a. On render, displays the text “Loading...” for 3 seconds\
 b. After 3 seconds, stores the array of fruits into local state
2. Once the array of fruits is stored in state, renders an input field
3. Renders (inside the input field) a down arrow on the far right
4. When the input is focused, if no characters are typed into the input field, does not render
an autocomplete dropdown
5. After a character is typed into the input field, renders an autocomplete dropdown beneath
the input field which displays the list of filtered results.
6. After typing into the input field and clicking outside of the input, the value of the input
remains the same but the autocomplete dropdown closes.
7. On click of an item in the autocomplete dropdown, the value of the input get set
to the value of the selected item, and the autocomplete dropdown closes