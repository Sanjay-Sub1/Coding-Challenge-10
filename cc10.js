let prices = {
    "Vargas GC": 1700,
    "CTS BOSS": 2600,
    "Pure 800": 2500,
    "Pure 900": 3500
};

function updatePrice(){
    const turboDropdown = document.getElementById(`turbo-options`);
    const selectedTurbo = turboDropdown.ariaValueMax;
    const priceDisplay = document.getElementById(`product-price`);

    const newPrice = prices[selectedTurbo];
    priceDisplay.textContent = `$${newPrice}`;
}

const turboDropdown = document.getElementById(`turbo-options`);
turboDropdown.addEventListener(`change`, updatePrice);
