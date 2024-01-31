// write your code here

// Arrays
const fruits = ["apple", "banana", "cherry", "orange", "watermeleon"]

// console.log(fruits)
// console.log(fruits[3])

fruits[3] = 'mango'
// console.log(fruits[3])
// console.log(fruits)

// console.log(fruits.length)
// console.log(fruits[fruits.length - 1])
fruits[fruits.length - 1] = "papaya"
// console.log(fruits[fruits.length - 1])
// console.log(fruits)

// for loop vs while loop

// while loop example
let counter = 0
while(counter < 10){
    // console.log(counter)
    counter++
}
// console.log('All finished!')

// for loop example
for(let c = 10; c > 0; c-=2){
    // console.log(c)
}
// console.log('All finished!')

// const testIndex = 2
// console.log(fruits)
// console.log(fruits[testIndex])
for(let index = 0; index < fruits.length; index++){
    // console.log(index)
    // console.log(fruits[index])
}

// Using for...of to iterate over an array
for(const fruit of fruits){
    // console.log(fruit)
}

// Adding an object to an array
const fruitObject = {
    name: "Dragon Fruit",
    flavor: "Sweet"
}
// console.log(fruitObject)
fruits.push(fruitObject)
// console.log(fruits)

// Objects
const person = {
    name: "Alice",
    age: 23
}
// console.log(person)
// console.log(person.name)
// console.log(person.age)

// Create a new key and value pair, if the key does not already exist, as in this example
person.phoneNumber = "1-234-567-9012"
// console.log(person.phoneNumber)
// console.log(person)

// Update the value for a specific key in an object
person.age = 29
// console.log(person)

// Iterating over an object's keys
for(const key in person){
    // console.log(`${key}: ${person[key]}`)
}

// const property = 'phoneNumber'
// console.log(person.name)
// console.log(person[property])

// for...of vs .forEach()

// for...of example
for(const fruit of fruits){
    // console.log(fruit)
}

// Example using the .forEach() array iterator method
fruits.forEach((fruit, index) => {
    // console.log(fruit)
    // console.log(index)
})

const foods = [
    {
        name: "Pizza",
        price: 4.99
    },
    {
        name: "Taco",
        price: 3.00
    },
    {
        name: "Ramen",
        price: 9.99
    }
]
// console.log(foods)

const foodToMatch = "Taco"

// Using .find() array iterator method to find a specific element given a condition in the return statement of the callback function
const foodToFind = foods.find((food) => {
    return food['name'] === foodToMatch
})
// console.log(foodToFind)

// Using .filter() array iterator method to get specific element that meet a given condition in the return statement of the callback function
const filteredFoods = foods.filter(food => {
    return food.price < 7
})
// console.log(filteredFoods)

// Using .map() to create a new array of elements given an array to iterate over
// const foodNames = foods.map(food => {
//     return food.name
// })

// Same example, but with implicit return
const foodNames = foods.map(food => food.name)
// console.log(foodNames)

// .map() example used to double the prices of the foods
const foodsWithPricesDoubled = foods.map(food => {
    return {...food, price: food.price * 2}
})
console.log(foodsWithPricesDoubled)
// console.log(foods)