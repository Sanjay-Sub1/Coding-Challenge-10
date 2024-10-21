//Links the prices to the set options for HTML
let prices = {
    "Vargas GC": 1700,
    "CTS BOSS": 2600,
    "Pure 800": 2500,
    "Pure 900": 3500
};
//creates a function that updates the price on the website when selecting a certain turbo option
function updatePrice() {
    const turboDropdown = document.getElementById('turbo-options');
    const selectedTurbo = turboDropdown.value;
    const priceDisplay = document.getElementById('product-price');
//displays the price
    const newPrice = prices[selectedTurbo];
    priceDisplay.textContent = `$${newPrice}`;
//checks availability if item is out of stock
    const selectedOption = turboDropdown.options[turboDropdown.selectedIndex];
    const availability = selectedOption.getAttribute('data-availability');
//disables the purchase button if item is out of stock
    const purchaseButton = document.getElementById('purchase-button');
    purchaseButton.disabled = availability === 'out-of-stock';
}
//Creates a function that gives an alert when an item is purchased
function purchaseAlert() {
    const turboDropdown = document.getElementById('turbo-options');
    const selectedOption = turboDropdown.options[turboDropdown.selectedIndex];
    const availability = selectedOption.getAttribute('data-availability');
//Gives 2 alerts depending on if the product is out of stock or not
    if (availability === 'in-stock') {
        alert(`Your purchase of the ${turboDropdown.value} has been completed.`);
    } else {
        alert(`Sorry, the requested item is currently out of stock.`);
    }
}
