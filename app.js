//An array comprising of fruit names is given to you.
// The addFruit and displayFruits function is already done for you.
let fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];
fruits=pop(5);
console.log()

// function displayFruits() will display the list of fruits in an HTML <ul> element. 
// This function will update the list dynamically whenever changes are made.
//This is already done for you.
function displayFruits(customList = fruits) {
    const fruitList = document.getElementById('fruit-list');
    fruitList.innerHTML = ''; 
    customList.forEach((fruit, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${fruit}`;
        fruitList.appendChild(li);
    });
}

// The function addFruit() Takes a fruit name from an input field.
//Adds the new fruit to the fruits array using the push() method & calls displayFruits() to update the list.
//This is already done for you.
function addFruit() {
    const newFruitInput = document.getElementById('new-fruit');
    const newFruit = newFruitInput.value.trim();
    
    if (newFruit) {
        fruits.push(newFruit); 
        newFruitInput.value = ''; 
        displayFruits(); 
    }
}

// Complete the function to Remove the Last Fruit:
// Write a function removeFruit() that:
// - Uses the pop() method to remove the last fruit from the list.
// - Call displayFruits() to show the updated list.
function removeFruit() {

}

// Complete the function to Display the First 3 Fruits:
// Write a function displayTopThree() that:
// - Creates a new array with the first 3 fruits from the fruits array.
// - Uses a basic loop (not slice) to iterate through the first 3 elements.
// - Call displayFruits() to show only the first 3 fruits.
function displayTopThree() {
  
}

// Complete the function to Remove the Second Fruit:
// Write a function removeSecondFruit() that:
// - Uses a basic loop to create a new array, skipping the second fruit (at index 1)
// - Do not use splice().
// - Call displayFruits() to show the updated list.
function removeSecondFruit() {

}
// Complete the function to Convert All Fruits to Uppercase:
// Write a function uppercaseFruits() that:
// - Uses a basic loop to iterate through the fruits array.
// - Converts each fruit name to uppercase using toUpperCase().
// - Calls displayFruits() to show the updated list of fruits in uppercase.
function uppercaseFruits() {

}
// Complete the function to Filter Fruits with Longer Names:
// Write a function filterLongFruits() that:
// - Uses a basic loop to filter fruits with names longer than 5 characters.
// - Adds fruits with names longer than 5 characters to a new array.
// - Calls displayFruits() to show the filtered list of fruits.
function filterLongFruits() {
 
}
