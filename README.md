# Lecture # 3 - JavaScript Data Structures & Array Iteration
## SWBAT
- [ ] Describe what arrays and objects are and their central importance in JS
- [ ] Understand how to add elements to an array, remove elements from an array, and replace elements in an array
- [ ] Understand how to modify objects
- [ ] Review syntax differences between `for` loops and `while` loops
- [ ] Explain the difference between looping over arrays with a `for` loop and iterating over arrays with the `for...of` statement
- [ ] Iterate over the properties in an object with the `for...in` statement
- [ ] Explain the difference between the following array iterator methods:
    - The Array `.find()` method
    - The Array `.filter()` method
    - The Array `.map()` method
    - The Array `.forEach()` method


## Deliverables

We've been asked to build a website for a new restaurant, Flatburger, that displays a menu of food served at the restaurant.

Today we will learn about JavaScript Data Structures and Array Iteration to accomplish some tasks related to displaying data on the website.

1. Initialize a variable named `foodsArray` using `const` and assign it the value of an empty array `[]`
2. Initialize a variable named `burgerObject` using `const` and assign it the value of an `object` that has a `name` key with the value of the `string` "Flatburger"
3. Modify the `burgerObject` object using dot notation to add a `description` property to it with the value of the `string` "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
4. Modify the `burgerObject` object using bracket notation to add a `price` property to it with the value of the `number` `14.99`
5. Add the `burgerObject` to `foodsArray`
6. Initialize a variable named `burgerObject2` using `const` and assign it the value of an `object` that has the following key and value pairs - `name: "Maple Bacon Burger"`, `description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"`, `price: 7.99`. Add the `burgerObject2` to `foodsArray`
7. Create 3 more objects that have `name`, `description`, and `price` keys. Pick any values of your choosing in regards to the values for `name`, `description`, and `price` for each of the foods. Add these 3 objects to `foodsArray`
8. Write a `for` loop that will loop over the `foodsArray` array and print the `name` of each of the food objects in the array using `console.log()`
9. Write a `for...of` statement that will iterate over the `foodsArray` array and print the `description` of each of the food objects in the array using `console.log()`
10. Iterate over the `foodsArray` array using the `.forEach()` array iterator method and print the `price` of each of the food objects in the array using `console.log()`
11. Find the food that has the name "Flatburger" in the `foodsArray` array using the `.find()` array iterator method
12. Find the foods that have a price less than `10.99` in the `foodsArray` array using the `.filter()` array iterator method
13. Use the `.map()` array iterator method on `foodsArray` to `return` a new array that only contains the `price` for each of the foods