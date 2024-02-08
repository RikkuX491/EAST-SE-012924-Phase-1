let currentlyDisplayedFood = null
let foodsArray = null

const restaurantMenu = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    foodsArray = foods
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${currentlyDisplayedFood.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                // imgElement.remove()

                foodsArray = foodsArray.filter(food => {
                    return food.id !== currentlyDisplayedFood.id
                })

                updateFoodsInRestaurantMenu()
            }
            else{
                alert("Error: Unable to delete food!")
            }
        })
        .catch(error => {
            alert("Error: Unable to delete food!")
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    currentlyDisplayedFood = food
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    numberInCartCountElement.textContent = food.number_in_cart
}

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionInputElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }

    fetch('http://localhost:3000/foods', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({...newFood, number_in_cart: 0})
    })
    .then(response => {
        if(response.ok){
            response.json().then(newFoodData => {
                // addFoodImageToRestaurantMenu(newFoodData)
                foodsArray.push(newFoodData)

                updateFoodsInRestaurantMenu()
            })
        }
        else{
            alert("Error: Unable to add new food!")
        }
    })

    newFoodForm.reset()
})

const addToCartForm = document.getElementById('add-to-cart-form')
addToCartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const numberToAddInputElement = document.getElementById('number-to-add')
    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    const sum = Number(numberInCartCountElement.textContent) + Number(numberToAddInputElement.value)

    fetch(`http://localhost:3000/foods/${currentlyDisplayedFood.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            number_in_cart: sum
        })
    })
    .then(response => {
        if(response.ok){
            response.json().then(updatedFood => {
                numberInCartCountElement.textContent = sum

                foodsArray = foodsArray.map(food => {
                    if(food.id === updatedFood.id){
                        return updatedFood
                    }
                    else{
                        return food
                    }
                })

                updateFoodsInRestaurantMenu()
            })
        }
        else{
            alert("Error: Unable to add to cart!")
        }
    })

    addToCartForm.reset()
})

function updateFoodsInRestaurantMenu(){
    restaurantMenu.innerHTML = ""

    foodsArray.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
}