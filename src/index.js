// write your code here

// Deliverable # 1
const foodsArray = []

// Deliverable # 2
const burgerObject = {
    name: "Flatburger"
}

// Deliverable # 3
burgerObject.description = "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"

// Deliverable # 4
burgerObject['price'] = 14.99

// Deliverable # 5
foodsArray.push(burgerObject)

// Deliverable # 6
const burgerObject2 = {
    name: "Maple Bacon Burger",
    description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!",
    price: 7.99
}
foodsArray.push(burgerObject2)

// Deliverable # 7
const burgerObject3 = {
    name: "Mushroom Burger",
    description: "A mushroom burger with our exclusive Flatburger melted cheese!",
    price: 8.99
}
const burgerObject4 = {
    name: "Avocado Bun Burger",
    description: "A healthier take on our signature Flatburger but with avocado buns!",
    price: 9.99
}
const burgerObject5 = {
    name: "Ramen Burger",
    description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!",
    price: 10.99
}
foodsArray.push(burgerObject3)
foodsArray.push(burgerObject4)
foodsArray.push(burgerObject5)

// Deliverable # 8
for(let index = 0; index < foodsArray.length; index++){
    console.log(foodsArray[index].name)
}

// Deliverable # 9
for(const food of foodsArray){
    console.log(food.description)
}

// Deliverable # 10
foodsArray.forEach(food => {
    console.log(food.price)
})

// Deliverable # 11
foodsArray.find(food => {
    return food.name === "Flatburger"
})

// Deliverable # 12
foodsArray.filter(food => {
    return food.price < 10.99
})

// Deliverable # 13
foodsArray.map(food => {
    return food.price
})