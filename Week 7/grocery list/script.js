/* Objectives
Create a grocery list application that allows the following functionalities:
Display grocery items in a list with the following properties:
Name
Food Category
Price
Quantity (units)
Total cost
Totals Quantity
[X]Button to add new grocery items using prompt() to ask for user input
    [X]I would like a <form> rather than prompt
[]use localStorage to save list
[]I need to create a localStorage of the original
    groceryItems
Buttons to separate the categories
A button to show all items
Order by cost (most to least) */

// Save the updated groceryItems to local storage
// stringify and parse are important to learn
// localStorage.setItem('groceryItems', JSON.stringify(groceryItems));
// the above syntax does not set a variable, I would like to start
// with the variable, so maybe
// let

let groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
    { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
]

let groceryList = document.getElementById('groceryList');
let totalCostElement = document.getElementById('totalCost');
let totalQuantityElement = document.getElementById('totalQuantity');
let formSec = document.getElementById('formSec');

console.log(groceryItems);
function displayGroceryItems(){

    groceryList.innerHTML = [];
    totalCost = 0;
    totalQuantity = 0;

    groceryItems.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}):
        $${item.price} - ${item.quantity} units`

        groceryList.appendChild(itemDiv);

        totalCost += item.price * item.quantity;

        totalQuantity += item.quantity;
    });

    totalCostElement.innerHTML = `Your total is $${totalCost.toFixed(2)}`;
    totalQuantityElement.innerHTML = `Your basket currently has ${totalQuantity} items`;

}


function isolateCategory(category) {
    groceryList.innerHTML = "";

    totalCost = 0;
    totalQuantity = 0;

    let filteredItems = groceryItems.filter(item =>{
        return item.category === category;
    })

    filteredItems.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<b>${item.name}</b>
        (${item.category}): $${item.price} - ${item.quantity} units`

        groceryList.appendChild(itemDiv);

        totalCost += item.price * item.quantity;

        totalQuantity += item.quantity;
    })

    totalCostElement.innerHTML = `Your total is $${totalCost.toFixed(2)}`;
    totalQuantityElement.innerHTML = `Your basket currently has ${totalQuantity} items`;
}

function showAllCategories(){
    displayGroceryItems();
}

// not passing parameters?
function orderItemsByCost() {
    groceryItems.sort((a, b) => {
        // Assending order - expensive to cheaper
        return b.price - a.price;

        // Decensing order - cheaper to expensive
        // return a.price - b.price;
    })
    displayGroceryItems();

}

function addItemPrompt() {

    // When btn is click display a form
    let newItemForm = document.createElement('form');

    // create inputs
    // I will look on how to improve this section, feels repetitive
    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'itemName');
    name.setAttribute('placeholder', 'Enter item name');

    let category = document.createElement('input');
    category.setAttribute('type', 'text');
    category.setAttribute('name', 'itemCategory');
    category.setAttribute('placeholder', 'Enter item category');

    let price = document.createElement('input');
    price.setAttribute('type', 'text');
    price.setAttribute('name', 'itemPrice');
    price.setAttribute('placeholder', 'Enter item price');

    let quantity = document.createElement('input');
    quantity.setAttribute('type', 'text');
    quantity.setAttribute('name', 'itemQuantity');
    quantity.setAttribute('placeholder', 'Enter item quantity');


    newItemForm.appendChild(name);
    newItemForm.appendChild(category);
    newItemForm.appendChild(price);
    newItemForm.appendChild(quantity);

    formSec.appendChild(newItemForm);

    // btn to handle input
    let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Add Item';
    submitButton.addEventListener('click', function() {
        // Call a function to handle adding the item to the groceryItems array
        addNewItem(
            name.value.charAt(0).toUpperCase(),
            category.valuecharAt(0).toUpperCase(),
            parseFloat(price.value),
            parseInt(quantity.value));
        // Clear the form after submitting
        // newItemForm.reset();
    });

    newItemForm.appendChild(submitButton);

}

function addNewItem(name, category, price, quantity) {
    // Create a new item object
    const newItem = {
        name: name,
        category: category,
        price: price,
        quantity: quantity
    };

    // Add the new item to the groceryItems array
    groceryItems.push(newItem);

    // Display the updated grocery items
    displayGroceryItems();
}


