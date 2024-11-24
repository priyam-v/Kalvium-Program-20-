describe("Fruit List Manager", function() {
  // Reset the fruits array before each test
  beforeEach(function() {
      fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];
  });

  // Test for removeFruit function
  it("should remove the last fruit from the list", function() {
      removeFruit();
      expect(fruits).toEqual(["Apple", "Banana", "Mango", "Pineapple"]);
  });

  // Test for displayTopThree function
  it("should display only the first 3 fruits from the list", function() {
      const expectedList = ["Apple", "Banana", "Mango"];
      let resultList;
      spyOn(window, 'displayFruits').and.callFake(function(list) {
          resultList = list;
      });

      displayTopThree();
      expect(resultList).toEqual(expectedList); // Ensure only first 3 fruits are displayed
  });

  // Test for removeSecondFruit function
// Test for removeSecondFruit function
it("should remove the second fruit (Banana) from the list without modifying the original array", function() {
  let resultList;
  
  // Spy on the displayFruits method and capture the argument passed to it
  spyOn(window, 'displayFruits').and.callFake(function(list) {
      resultList = list;
  });

  // Call the function that should remove the second fruit
  removeSecondFruit();

  // Check if the correct list is passed to displayFruits
  expect(resultList).toEqual(["Apple", "Mango", "Pineapple", "Orange"]);
  
  // Ensure the original fruits array is unchanged
  expect(fruits).toEqual(["Apple", "Banana", "Mango", "Pineapple", "Orange"]);
});


  // Test for uppercaseFruits function
  it("should convert all fruit names to uppercase", function() {
      const expectedList = ["APPLE", "BANANA", "MANGO", "PINEAPPLE", "ORANGE"];
      let resultList;
      spyOn(window, 'displayFruits').and.callFake(function(list) {
          resultList = list;
      });

      uppercaseFruits();
      expect(resultList).toEqual(expectedList); // Ensure fruits are converted to uppercase
  });

  // Test for filterLongFruits function
  it("should filter and display fruits whose names are longer than 5 characters", function() {
      const expectedList = ["Banana", "Pineapple", "Orange"];
      let resultList;
      spyOn(window, 'displayFruits').and.callFake(function(list) {
          resultList = list;
      });

      filterLongFruits();
      expect(resultList).toEqual(expectedList); // Ensure correct fruits are filtered
  });
});
