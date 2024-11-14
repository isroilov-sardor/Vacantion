import { createCard } from "./create.js";
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

function validateCard() {
    if (midInput1.value.length < 8) {
        alert("URL 8 belgidan kam bolmasin");
        midInput1.focus();
        return false;
    }
    if (midInput2.value.length <= 2) {
        alert("kompaniya nomi 2ta belgidan kam bolmasin");
        midInput2.focus();
        return false;
    }
    if (!firstCheckingInput.checked && !secondCheckingInput.checked) {
        alert("Yangi yoki featuredni tanlang");
        return false;
    }
    if (midCheck.value.length < 5) {
        alert("lavozim notogri berilgan");
        return false;
    }
    if (select1Sel.value == "Tanlang") {
        alert("Vaqt maydonini tanlang!");
        return false;
    }
    if (select2Sel.value === "Tanlang") {
        alert("Ish turi maydonini tanlash kerak");
        return false;
    }
    if (select3Sel.value === "Tanlang") {
        alert("Joylashuv maydonini tanlash kerak");
        return false;
    }
    if (!skil1.checked && !skil2.checked && !skil3.checked && !skil4.checked) {
        alert("Xech bolmaganda bitta konikma tanlanishi kerak!");
        return false;
    }
    return true;
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

button.addEventListener("click", function (event) {
    event.preventDefault();
    if (
        validateCard(
            midInput1,
            midInput2,
            firstCheckingInput,
            secondCheckingInput,
            midCheck,
            select1Sel,
            select2Sel,
            select3Sel,
            skil1,
            skil2,
            skil3,
            skil4
        )
    ) {
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

        midInput1.value = "";
        midInput2.value = "";
        midCheck.value = "";
        select1Sel.selectedIndex = 0;
        select2Sel.selectedIndex = 0;
        select3Sel.selectedIndex = 0;
        firstCheckingInput.checked = false;
        secondCheckingInput = false;
        skil1.checked = false;
        skil2.checked = false;
        skil3.checked = false;
        skil4.checked = false;

        midcont.reset();
    }
});

wrapper.addEventListener("click", function (event) {
    if (event.target.classList.contains("del-button")) {
        const card = event.target.closest(".wrapper");
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
