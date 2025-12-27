// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    if (typeof taxBoolean !== 'boolean') {
        console.log("You need to pass a boolean to the getPrices call!");
        return;
    }

    for (let dish of dishData) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dish.price;
        }
        
        // Note: If the test still fails, try: finalPrice.toFixed(2)
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    // Check if guests is a number AND within range
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: $${discount}`);
    } else {
        // This log only happens if the guests input is invalid or missing
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
getDiscount(false, 10);