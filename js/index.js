import {validateCard} from "./validate.js";

const midInput1 = document.querySelector("#mid-input1");
const midInput2 = document.querySelector("#mid-input2");
const firstCheckingInput = document.querySelector("#first-checking-input");
const secondCheckingInput = document.querySelector("#second-checking-input");
const midCheck = document.querySelector("#mid-check");
const select1Sel = document.querySelector("#select1-sel");
const select2Sel = document.querySelector("#select2-sel");
const select3Sel = document.querySelector("#select3-sel");
const skil1 = document.querySelector("#skil1-check");
const skil2 = document.querySelector("#skil2-check");
const skil3 = document.querySelector("#skil3-check");
const skil4 = document.querySelector("#skil4-check");
const button = document.querySelector("#all-save-btn");
const wrapper = document.querySelector(".blocks-container");
const midcont = document.querySelector(".midle");

function createCard(value, index) {
    return `
        <div class="wrapper" data-index="${index}">
            <div class="blocks-first-same">
                <img id="blocks-image" src="${
                    value.midInput1
                }" width="88" height="88" alt="image">
                <div class="block-same">
                    <div class="info-blocks">
                        <div class="info-company">${value.midInput2}</div>
                        ${
                            value.firstCheckingInput
                                ? `<div class="info-new">NEW!</div>`
                                : ""
                        }
                        ${
                            value.secondCheckingInput
                                ? `<div class="info-featured">FEATURED</div>`
                                : ""
                        }
                    </div>
                    <div class="info-work">${value.midCheck}</div>
                    <div class="info-data">
                        <div class="info-day">${value.select1Sel}</div>
                        <img src="./images/oval.svg" alt="oval-image">
                        <div class="info-time">${value.select2Sel}</div>
                        <img src="./images/oval.svg" alt="oval-image">
                        <div class="info-place">${value.select3Sel}</div>
                    </div>
                </div>
            </div>
            <div class="second-same">
                <img class="del-button" src="./images/del-icon.svg" width="30" height="30" alt="image">
                <div class="second-info">
                    ${value.skil1 ? '<div class="info1">Full stack</div>' : ""}
                    ${value.skil2 ? '<div class="info2">Senior</div>' : ""}
                    ${value.skil3 ? '<div class="info3">Python</div>' : ""}
                    ${value.skil4 ? '<div class="info4">React</div>' : ""}
                </div>
            </div>
        </div>
    `;
}

function saveToLocalStorage(cards) {
    localStorage.setItem("cards", JSON.stringify(cards));
}

function loadFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.forEach((data, index) => {
        let card = createCard(data, index);
        wrapper.innerHTML += card;
    });
}

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

button &&
    button.addEventListener("click", function (event) {
        event.preventDefault();
        if (validateCard()) {
            const data = {
                midInput1: midInput1.value,
                midInput2: midInput2.value,
                firstCheckingInput: firstCheckingInput.checked,
                secondCheckingInput: secondCheckingInput.checked,
                midCheck: midCheck.value,
                select1Sel: select1Sel.value,
                select2Sel: select2Sel.value,
                select3Sel: select3Sel.value,
                skil1: skil1.checked,
                skil2: skil2.checked,
                skil3: skil3.checked,
                skil4: skil4.checked,
            };
            const cards = JSON.parse(localStorage.getItem("cards")) || [];
            cards.push(data);
            saveToLocalStorage(cards);

            let card = createCard(data, cards.length - 1);
            wrapper.innerHTML += card;

            midcont.reset();
        }
    });

wrapper.addEventListener("click", function (event) {
    if (event.target.classList.contains("del-button")) {
        const card = event.target.closest(".wrapper"); // Kartani topamiz
        const index = card.getAttribute("data-index");

        card.remove();

        let cards = JSON.parse(localStorage.getItem("cards")) || [];
        cards.splice(index, 1);
        saveToLocalStorage(cards);
        document.querySelectorAll(".wrapper").forEach((wrapper, i) => {
            wrapper.setAttribute("data-index", i);
        });
    }
});
