export function saveToLocalStorage(cardData) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push(cardData);
    localStorage.setItem("cards", JSON.stringify(cards));
}

export function loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cards")) || [];
}
