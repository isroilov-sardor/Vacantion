const button = document.querySelector("#all-save-btn");
const wrapper = document.querySelector(".blocks-container");

function createCard(
    imageSrc,
    company,
    isNew,
    isFeatured,
    work,
    time,
    place,
    skills
) {
    const skillElements = skills
        .map((skill) => `<div class="info">${skill}</div>`)
        .join("");

    return `
        <div class="wrapper">
            <div class="blocks-first-same">
                <img id="blocks-image" src="${imageSrc}" width="88" height="88" alt="image">
                <div class="block-same">
                    <div class="info-blocks">
                        <div class="info-company">${company}</div>
                        ${isNew ? `<div class="info-new">NEW!</div>` : ""}
                        ${
                            isFeatured
                                ? `<div class="info-feat">FEATURED</div>`
                                : ""
                        }
                    </div>
                    <div class="info-work">${work}</div>
                    <div class="info-data">
                        <div class="info-day">1d ago</div>
                        <img src="./images/oval.svg" alt="oval-image">
                        <div class="info-time">${time}</div>
                        <img src="./images/oval.svg" alt="oval-image">
                        <div class="info-place">${place}</div>
                    </div>
                </div>
            </div>
            <div class="second-same">
                <img src="./images/del-icon.svg" width="30" height="30" alt="image">
                <div class="second-info">
                    ${skillElements}  
                </div>
            </div>
        </div>
    `;
}

button &&
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const image = document.querySelector("#mid-input1");
        const infoCompany = document.querySelector(".mid-input2");
        const infoNew = document.querySelector("#first-checking-input").checked;
        const infoFeature = document.querySelector(
            "#second-checking-input"
        ).checked;
        const workName = document.querySelector("#mid-check").value;
        const time = document.querySelector("#select1-sel").value;
        const workType = document.querySelector("#select2-sel").value;
        const typePlace = document.querySelector("#select3-sel").value;

        const skills = [];
        document
            .querySelectorAll('.skils input[type="checkbox"]')
            .forEach((checkbox) => {
                if (checkbox.checked) {
                    const skillText = checkbox.nextElementSibling.textContent;
                    skills.push(skillText);
                }
            });

        if (!infoCompany) {
            alert("Kompaniya nomini kiriting.");
            return;
        }
        if (!workName) {
            alert("Ish nomini kiriting.");
            return;
        }
        if (!time || time === "default") {
            alert("Ish vaqti to'g'ri tanlang.");
            return;
        }
        if (!workType || workType === "default") {
            alert("Ish turi tanlang.");
            return;
        }
        if (!typePlace || typePlace === "default") {
            alert("Manzilni tanlang.");
            return;
        }
        if (skills.length === 0) {
            alert("Kamida bitta ko'nikmani tanlang.");
            return;
        }
        // Karta yaratish
        const data = createCard(
            imageUrl,
            infoCompany,
            infoNew,
            infoFeature,
            workName,
            time,
            typePlace,
            skills
        );
        wrapper.innerHTML += data;

        // Inputlarni tozalash
        document.querySelector("#mid-input1").value = "";
        document.querySelector(".mid-input2").value = "";
        document.querySelector("#first-checking-input").checked = false;
        document.querySelector("#second-checking-input").checked = false;
        document.querySelector("#mid-check").value = "";
        document.querySelector("#select1-sel").value = "default";
        document.querySelector("#select2-sel").value = "default";
        document.querySelector("#select3-sel").value = "default";

        document
            .querySelectorAll('.skils input[type="checkbox"]')
            .forEach((checkbox) => {
                checkbox.checked = false;
            });
    });
