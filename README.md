## Assessment Overview
- In this assessment, you will be working on a simple JavaScript application that manages a list of fruits. Your task is to complete the JavaScript file (app.js) by implementing the required functionality. 
- The HTML and CSS files are already provided, and several functions in the JavaScript file are pre-written.
-  You will complete the remaining functions that manipulate the fruit array as described in the tasks below.

## Project Structure

- index.html: The structure of the webpage, containing the input field and buttons.
- main.css: The styles for the webpage.
- app.js: The JavaScript file where you will complete the necessary functions.

## Existing Code:
- A fruit array is initialized as follows:
- `let fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];`
- Two functions are already implemented:
- `displayFruits():` Displays the current list of fruits dynamically.
- `addFruit():` Adds a new fruit to the list from the input field.

## Tasks
- You are expected to complete the following functions inside app.js using basic array methods and loops.

1. `removeFruit()`
- Description: Removes the last fruit from the list.
- Use the pop() method to remove the last fruit from the fruits array.
- Call displayFruits() to update the list after the fruit is removed.

2. `displayTopThree()`
- Description: Displays only the first 3 fruits from the list using basic loops.
- Use a basic for loop to iterate over the first 3 fruits in the array.
- Call displayFruits() to update the list with the first 3 fruits.

3. `removeSecondFruit()`
- Description: Removes the second fruit (at index 1) from the list using a loop (without modifying the original array).
- Use a for loop to iterate over the fruits array and skip the second fruit.
- Call displayFruits() to update the list with the modified array.

4. `uppercaseFruits()`
- Description: Converts all fruit names to uppercase using a loop.
- Use a basic for loop to iterate over the fruits array and convert each fruit to uppercase using toUpperCase().
- Call displayFruits() to update the list with the modified names.

5. `filterLongFruits()`
- Description: Displays fruits whose names are longer than 5 characters using a basic loop.
- Use a for loop to create a new array with fruit names that have more than 5 characters.
- Call displayFruits() to update the list with the filtered fruits.


## Testing Criteria
- The following test cases will be evaluated. Each test case carries 8 marks for a total of 40 marks.

## Test Cases
- `removeFruit() Test:`
Description: Should remove the last fruit from the list.
Expected Outcome: After calling the function, the list should exclude the last fruit (e.g., "Orange" is removed from the initial list).

- `displayTopThree() Test:`
Description: Should display only the first 3 fruits.
Expected Outcome: The list should display "Apple", "Banana", and "Mango".

- `removeSecondFruit() Test:`
Description: Should remove the second fruit (Banana) without modifying the original array.
Expected Outcome: The new list should display "Apple", "Mango", "Pineapple", and "Orange", while the original array remains unchanged.

- `uppercaseFruits() Test:`
Description: Should convert all fruit names to uppercase.
Expected Outcome: The list should display all fruit names in uppercase (e.g., "APPLE", "BANANA", "MANGO", "PINEAPPLE", "ORANGE").

- `filterFruits() Test:`
Description: Should display only fruits with names longer than 5 characters.
Expected Outcome: The list should display "Banana", "Pineapple", and "Orange".


Ensure all functions are properly implemented and pass the test cases before submitting the code.
Happy Coding Kalvium ❤️
