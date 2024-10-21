let prices = {
    "Vargas GC": 1700,
    "CTS BOSS": 2600,
    "Pure 800": 2500,
    "Pure 900": 3500
};

function updatePrice() {
    const turboDropdown = document.getElementById('turbo-options');
    const selectedTurbo = turboDropdown.value;
    const priceDisplay = document.getElementById('product-price');

    const newPrice = prices[selectedTurbo];
    priceDisplay.textContent = `$${newPrice}`;

    const selectedOption = turboDropdown.options[turboDropdown.selectedIndex];
    const availability = selectedOption.getAttribute('data-availability');

    const purchaseButton = document.getElementById('purchase-button');
    purchaseButton.disabled = availability === 'out-of-stock';
}

function purchaseAlert() {
    const turboDropdown = document.getElementById('turbo-options');
    const selectedOption = turboDropdown.options[turboDropdown.selectedIndex];
    const availability = selectedOption.getAttribute('data-availability');

    if (availability === 'in-stock') {
        alert(`Your purchase of the ${turboDropdown.value} has been completed.`);
    } else {
        alert(`Sorry, the requested item is currently out of stock.`);
    }
}
