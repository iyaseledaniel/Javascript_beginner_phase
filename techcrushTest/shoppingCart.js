"use strict";
/** Shopping Cart that uses a random generated ordering system,
 * checks if item exist in cart, if not tells user it doesn't exist and adds to cart 
 * else processes order and returns total cost
 */

let cart = [
    {item: "laptop", price: 250000, quantity: 50},
    {item: "mouse", price: 7000, quantity: 100},
    {item: "headset", price: 12000, quantity: 200},
    {item: "keyboard", price: 15000, quantity: 500},
]

// create an array of cart item names to check if ordered item name exist in cart

let cartItemList = []
cart.forEach(element =>{
    for (let key in element){
        if (key === "item"){
            cartItemList.push(element[key].toLowerCase())
        }
    }
});

// function checkorder
let checkOrder = (itemName, quantity) => {
    let itemFound = cartItemList.find(item => item === itemName)
    //console.log(itemFound, itemName)
    if (itemFound !== itemName){
        console.log("Item not found in cart, item is being added to cart")
        //throw new Error("Item not found in cart");
        let minPrice = 2000
        let maxPrice = 15000
        let price = Math.floor(Math.random()* (maxPrice - minPrice + 1)) + minPrice
        addItemToCart({item: itemName, price: price, quantity: quantity})   
    } else {// process order
        console.log("Item found and order processing....")
        processOrder(itemName,quantity)
    }

}

// function to process order
let processOrder = (itemName, quantity) => {
    let cartOrder = (cart.find(lst => lst.item === itemName))
    if (quantity > cartOrder.quantity){
        console.log("Quantity ordered is greater than quantity in catalogue")
    }else{
        let totalOrder = quantity * cartOrder.price
        console.log(".......Order Details.......")
        console.log("Item: "+ (cartOrder.item.slice(0, 1).toUpperCase() + cartOrder.item.slice(1) ))
        console.log("Price: "+ cartOrder.price)
        console.log("Quantity Ordered: "+ quantity)
        console.log("Total Price: " + totalOrder)
        cartOrder.quantity -= quantity
        console.log("We have " + cartOrder.quantity + " " + cartOrder.item + " left") 
    }
}

// function to add item to cart
let addItemToCart = (itemsToAdd) => {
    let itemExist = cart.find(product => product.item === itemsToAdd.item)
    if (itemExist){ // dummy if - checkorder() does the work
        console.log("Item exist in cart")
        // throw new Error("Item exist in cart")
    }else{
        if (isNaN(itemsToAdd.price)){
            console.log("Please enter a valid number for price");
            //throw new Error("Please enter a valid number for price");
        }
        if (isNaN(itemsToAdd.quantity)){
            console.log("Please enter a valid number for quantity");
            //throw new Error("Please enter a valid number for quantity");
        }
        else{
            cart.push(itemsToAdd)
            cartItemList.push(itemsToAdd.item)
            return console.log(itemsToAdd.item + " added to cart \nUpdated cart: ", cart)
        }

    }
}
//End of functions declarations


 //  create randomOrder with random quantity
let randomOrder = [
    {item: "shoe", quantity: Math.floor(Math.random() * 90) + 1},
    {item:"Laptop", quantity: Math.floor(Math.random() * 100) + 1},
    {item: "Mouse", quantity: Math.floor(Math.random() * 300) + 1},
    {item: "Headset", quantity: Math.floor(Math.random() * 200) + 1},
    {item: "Keyboard", quantity: Math.floor(Math.random() * 300) + 1},
]

let objectLength = randomOrder.length

while (objectLength > 0){
    let randomGuess = Math.floor(Math.random() * objectLength)
    console.log("Random guess index: " + randomGuess)

    let orderDetails = randomOrder[randomGuess]
    console.log("Order passed: ", orderDetails,  "\b")

    checkOrder(orderDetails.item.toLowerCase(), orderDetails.quantity)
    objectLength -= 1
    console.log("\b")
}