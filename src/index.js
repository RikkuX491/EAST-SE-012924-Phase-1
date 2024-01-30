// write your code here

// Instructions for making a burger

// This food variable has Global scope
const food = "Hamburger"
if(5 === 5){
    // This food variable has Block Scope
    const food = "Pizza"
    // console.log(food)
}
// console.log(food)

function makeABurger(){
    console.log('Gather ingredients!')
    console.log('Cook the burger')
    console.log('Add ingredients to burger')
    console.log('Add buns to burger')
    console.log('Burger all done! Ready to serve!')

    // if(4 === 6){
    //     return 4 + 6
    // }
    // else{
    //     console.log('hello')
    //     return "Goodbye"
    // }
}

// makeABurger()
// makeABurger()
// makeABurger()
// makeABurger()
// makeABurger()

function combineStrings(str1, str2){
    const stringToReturn = str1 + str2
    if(str1 === "Hello"){
        return "Greetings!"
    }
    else if(str1 === "Bye"){
        return "Goodbye!"
    }
    else{
        return stringToReturn
    }
}

const stringResult = combineStrings("Good day ", "Flatburger!")
// console.log(stringResult)

// Cannot access this variable from outside of the combineStrings function, since it has function scope
// console.log(stringToReturn)

// Anonymous function example
const makeADrink = function (){
    console.log("Drinks are ready!")
}

// Arrow function examples
// const makeADrink = () => {
//     console.log("Drinks are ready!")
// }

// makeADrink()

// Arrow function with implicit return
const squareNumber = num => num * num

// console.log(squareNumber(7))

// const multiplyNumbers = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiplyNumbers(7, 3))

// Examples of functions with callback functions passed in as arguments to a function
// makeACake is a Higher-Order Function since it can take a function as an argument and also return a function
function makeACake(mixIngredients){
    mixIngredients()

    // This is a closure - a function declared inside of another function
    function cookCake(){
        console.log("Cooking the cake...")
    }

    console.log("The cake has been baked! All done!")

    // Returning a function from another function
    return cookCake
}

// Cannot access this function since it is a closure declared within the makeACake() function
// cookCake()

function mixIngredientsForCake(){
    console.log('Mixing ingredients...')
    console.log('All done!')
}

// const cookCakeFunction = makeACake(mixIngredientsForCake)
// console.log(cookCakeFunction)
// cookCakeFunction()