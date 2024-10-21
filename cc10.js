let prices = {
    "Vargas GC": 1700,
    "CTS BOSS": 2600,
    "Pure 800": 2500,
    "Pure 900": 3500
};

function updatePrice(){
    const turboDropdown = document.getElementById(`turbo-options`);
    const selectedTurbo = turboDropdown.value;
    const priceDisplay = document.getElementById(`product-price`);

    const newPrice = prices[selectedTurbo];
    priceDisplay.textContent = `$${newPrice}`;

    const selectedOption =turboDropdown.options[turboDropdown.selectedindex];
    const availability = selectedOption.getAttribute(`data-available`);

    const purchaseButton.disabled = document.getElementById('purchase-button');
    if (availability === 'out-of-stock'){
        purchaseButton.disabled = true;
    }
    else{
        purchaseButton.disabled = false;
    }
}

const turboDropdown = document.getElementById(`turbo-options`);
turboDropdown.addEventListener(`change`, updatePrice);
