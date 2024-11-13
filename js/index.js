import { createCard } from "./createCard.js";

const button = document.querySelector("#all-save-btn");
const wrapper = document.querySelector(".blocks-container");

button &&
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const data = {
            midInput1: midInput1.value,
            midInput2: midInput2.value,
            firstCheckingInput: firstCheckingInput.checked ? "Yangi" : "Eski", // To'g'ri format
            secondCheckingInput: secondCheckingInput.checked
                ? "Featured"
                : "Not Featured", // To'g'ri format
            midCheck: midCheck.value,
            select1: select1.value,
            select2: select2.value,
            select3: select3.value,
            skil1: skil1.checked ? "FullStack" : "", // To'g'ri format
            skil2: skil2.checked ? "Python" : "",
            skil3: skil3.checked ? "Midweight" : "",
            skil4: skil4.checked ? "React" : "",
        };

        const res = createCard(data);
        wrapper.innerHTML += res;
    });
