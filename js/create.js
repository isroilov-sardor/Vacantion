export function createCard(value, index) {
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
                                ? `<div class="info-feat">FEATURED</div>`
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