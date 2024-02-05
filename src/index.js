// write your code here

const restaurantMenuElement = document.getElementById('restaurant-menu')

// Deliverable # 1
fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {

    // Deliverable # 4
    displayFoodDetails(foods[0])

    // Deliverable # 2
    foods.forEach((food) => {
        addFoodImageToRestaurantMenu(food)
    })
})

// Deliverable # 3
function addFoodImageToRestaurantMenu(food){
    const img = document.createElement('img')
    img.src = food.image
    restaurantMenuElement.appendChild(img)

    // Deliverable # 6
    img.addEventListener('click', () => {
        displayFoodDetails(food)
    })
}

// Deliverable # 5
function displayFoodDetails(food){
    const detailImageElement = document.querySelector('.detail-image')
    detailImageElement.src = food.image
    const nameElement = document.querySelector('.name')
    nameElement.textContent = food.name
    const descriptionDisplayElement = document.getElementById('description-display')
    descriptionDisplayElement.textContent = food.description
}