// write your code here

// Deliverable # 1
function flatburgerGreeting(){
    console.log("Welcome to Flatburger!")
}

// Deliverable # 2
function printGreeting(greeting){
    console.log(greeting)
}

// Deliverable # 3
const getSum = (num1, num2) => {
    return num1 + num2
}

// Deliverable # 4
function getSumString(sum, num1, num2){
    return `${num1} + ${num2} = ${sum(num1, num2)}`
}

// Testing - Calling the function from Deliverable # 1
flatburgerGreeting()

// Testing - Calling the function from Deliverable # 2
printGreeting("Hello!")

// Testing - Calling the function from Deliverable # 3
const sumValue = getSum(7, 14)
console.log(sumValue)

// Testing - Calling the function from Deliverable # 4
const sumString = getSumString(getSum, 8, 15)
console.log(sumString)