// Form submission with validation
document.getElementById('grocery-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit

    // Get the item, quantity, and category values
    const item = document.getElementById('grocery-item').value.trim();
    const quantity = document.getElementById('grocery-quantity').value;
    const category = document.getElementById('category-select').value;

    if (item && quantity > 0 && category) {
        addItemToList(item, quantity, category);
        
        // Clear the input fields
        document.getElementById('grocery-item').value = '';
        document.getElementById('grocery-quantity').value = '';
        document.getElementById('category-select').value = '';
    } else {
        alert("Please fill out all fields.");
    }
});

// Function to add items to the grocery list
function addItemToList(item, quantity, category) {
    const list = document.getElementById('grocery-list');
    
    // Create a new list item
    const li = document.createElement('li');
    li.innerText = `${item} - Quantity: ${quantity} - Category: ${category}`;
    
    // Create a "Mark as Bought" button
    const boughtBtn = document.createElement('button');
    boughtBtn.className = 'bought-btn';
    boughtBtn.innerText = 'Mark as Bought';
    boughtBtn.onclick = function() {
        li.classList.toggle('bought');
    };

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = function() {
        list.removeChild(li);
    };

    // Append buttons to the list item
    li.appendChild(boughtBtn);
    li.appendChild(deleteBtn);

    // Append the list item to the grocery list
    list.appendChild(li);
}

// Dynamic header content based on time of day
window.onload = function() {
    const header = document.getElementById('dynamic-header');
    const hours = new Date().getHours();

    if (hours < 12) {
        header.innerText = "Good Morning! Plan your Grocery List";
    } else if (hours < 18) {
        header.innerText = "Good Afternoon! Time to Shop";
    } else {
        header.innerText = "Good Evening! Prepare your Grocery List for Tomorrow";
    }

    // Add default items on load
    addPreloadedItems();
};

// Function to preload some grocery items
function addPreloadedItems() {
    // Predefined items
    const defaultItems = [
        { item: 'Tomatoes', quantity: 5, category: 'Vegetables' },
        { item: 'Milk', quantity: 2, category: 'Dairy' },
        { item: 'Bread', quantity: 1, category: 'Snacks' }
    ];

    // Loop through each item and add it to the list
    defaultItems.forEach(grocery => {
        addItemToList(grocery.item, grocery.quantity, grocery.category);
    });
}
