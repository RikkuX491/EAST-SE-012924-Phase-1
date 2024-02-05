// write your code here

// Making a GET request to the server to get foods data
const promiseObject1 = fetch('http://localhost:3000/foods')
console.log(promiseObject1)
const promiseObject2 = promiseObject1.then((response) => {
    console.log(response)
    // if(response.ok){
    //     response.json().then((foods) => {
    //         console.log(foods)
    //     })
    // }
    // else{
    //     alert('The response is NOT ok!')
    // }
    return response.json()
})
console.log(promiseObject2)
const promiseObject3 = promiseObject2.then((foods) => {
    console.log(foods)
    return 7
})
console.log(promiseObject3)
promiseObject3.then((data) => {
    console.log(data)
})

// Synchronous - Synchronous console logs
console.log('First')
console.log('Second')
console.log('Third')

// Asynchronous example
console.log('Before the fetch')

const restaurantMenuElement = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    console.log(foods)
    console.log('During the fetch 1')
    const h1Elements = foods.map((food) => {
        const h1Element = document.createElement('h1')
        h1Element.textContent = food.name
        return h1Element
    })
    h1Elements.forEach(element => {
        restaurantMenuElement.appendChild(element)
    })
    foods.forEach(food => {
        const h1Element = document.createElement('h1')
        h1Element.textContent = food.name
        restaurantMenuElement.appendChild(h1Element)
    })
    console.log('During the fetch 2')
})

console.log('After the fetch')