// write your code here

const food = "Flatburger"
const food2 = "Burger 2"
// console.log(food + "World")

const drink1 = "Water"
const drink2 = "Orange Juice"

// console.log("I like " + drink1 + "! I like " + drink2 + " as well!")
// console.log(`I like ${drink1}! I like ${drink2} as well!`)

// Equality Operators
const number1 = 1
const number2 = '1'
// console.log(number1)
// console.log(number2)
// console.log(typeof number1)
// console.log(typeof number2)

// console.log(number1 === number2)
// console.log(number1 !== number2)
// console.log(number1 == number2)
// console.log(number1 != number2)

// Relational Operators
// console.log(3 > 3)
// console.log(3 >= 3)
// console.log(3 < 4)
// console.log(3 <= 4)

// if & else statements
const person = "Alice"
const person2 = "Bruce"
if(person === "Alice" && person2 === "Bruce"){
    // console.log(`Welcome ${person} and ${person2}!`)
}
else if(person === "Chris"){
    // console.log("Hi Chris!")
}
else{
    // console.log('Unauthorized!')
}

// ternary expressions
const number = 7

const flatburgerString = food === "Flatburger" ? "Flatburgers are the best!" : "You need to try Flatburger"
const numberPhrase = number > 10 ? "That's a high number!" : "Too low!"

// console.log(flatburgerString)
// console.log(numberPhrase)

// Switch statements
switch(person){
    case "Alice":
        console.log("Hi Alice!")
        break
    case "Bruce":
        console.log("Bye Bruce!")
        break
    case "Chris":
        console.log("Good morning Chris!")
        break
    default:
        console.log("Good day sir!")
}