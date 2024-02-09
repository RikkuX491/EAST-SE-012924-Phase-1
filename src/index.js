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

    imgElement.addEventListener('click', () => {

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
}

// Lecture code begins here

const cryptocurrencyULElement = document.getElementById('cryptocurrency-list')

fetch('https://api.coincap.io/v2/assets')
.then(response => response.json())
.then(cryptocurrencyData => {

    // Approach # 1 - Display cryptocurrencies whose rank is less than or equal to 10
    // const filteredCryptocurrenciesArray = cryptocurrencyData.data.filter(cryptocurrency => {
    //     return Number(cryptocurrency['rank']) <= 10
    // })

    // filteredCryptocurrenciesArray.forEach(cryptocurrency => {
    //     const liElement = document.createElement('li')
    //     liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank ${cryptocurrency.rank}`
    //     cryptocurrencyULElement.appendChild(liElement)
    // })

    // Approach # 2 - Display cryptocurrencies whose rank is less than or equal to 10
    // cryptocurrencyData.data.filter(cryptocurrency => {
    //     return Number(cryptocurrency['rank']) <= 10
    // }).forEach(cryptocurrency => {
    //     const liElement = document.createElement('li')
    //     liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank ${cryptocurrency.rank}`
    //     cryptocurrencyULElement.appendChild(liElement)
    // })

    // Approach # 3 - Display cryptocurrencies whose rank is less than or equal to 10
    cryptocurrencyData.data.forEach(cryptocurrency => {
        if(Number(cryptocurrency['rank']) <= 10){
            const liElement = document.createElement('li')
            liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank ${cryptocurrency.rank}`
            cryptocurrencyULElement.appendChild(liElement)
        }
    })
})