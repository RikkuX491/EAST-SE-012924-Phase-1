const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// write your code here

// .querySelector()
// const restaurantMenu = document.querySelector('#restaurant-menu')
// console.log(restaurantMenu)

// .getElementById()
// const restaurantMenu = document.getElementById('restaurant-menu')
// console.log(restaurantMenu)

// .querySelectorAll()
// const h3Elements = document.querySelectorAll('h3')
// console.log(h3Elements)
// console.log(h3Elements[0])

// .getElementsByClassName()
// const nameElementsCollection = document.getElementsByClassName('name')
// console.log(nameElementsCollection)

// .textContent
// const nameElement = nameElementsCollection[0]
// nameElement.textContent = "Burger"

// const descriptionDisplayElement = document.getElementById('description-display')
// descriptionDisplayElement.textContent = "I love burgers! Burgers are awesome!"

// .src for updating an image
// const detailImage = document.getElementsByClassName('detail-image')[0]
// detailImage.src = "./assets/food/flatburger.jpeg"

// .createElement()
// const h2Element = document.createElement('h2')
// h2Element.textContent = "Welcome to Flatburger!"
// h2Element.className = "name"

// .appendChild()
// const foodDetailDivElement = document.getElementById('food-detail')
// foodDetailDivElement.appendChild(h2Element)

// .append()
// foodDetailDivElement.append("Hello World!", "Greetings")

// .remove()
// foodDetailDivElement.remove()

// .textContent vs .innerText vs. .innerHTML
// const h1Element = document.createElement('h1')
// h1Element.textContent = "<span>Greetings!\nClass is in session!</span>"
// h1Element.innerText = "<span>Greetings!\nClass is in session!</span>"
// h1Element.innerHTML = "<span>Greetings!\nClass is in session!</span>"
// document.body.appendChild(h1Element)