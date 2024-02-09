const restaurantMenu = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
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

    // Adding the click event listener necessary to complete Deliverable # 2
    imgElement.addEventListener('click', () => {

        // Remove the element from #restaurant-menu
        imgElement.remove()

        fetch(`http://localhost:3000/foods/${currentlyDisplayedFood.id}`, {
            method: "DELETE"
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