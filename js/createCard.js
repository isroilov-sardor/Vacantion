function createCard(value) {
    return `
        <div class="wrapper">
            <div class="blocks-first-same">
                <img id="blocks-image" src="${value.midInput1}" width="88" height="88" alt="image">
                <div class="block-same">
                    <div class="info-blocks">
                        <div class="info-company">${value.midInput2}</div>
                        <div class="info-new">${value.firstCheckingInput}</div>
                        <div class="info-feat">${value.secondCheckingInput}</div>
                    </div>
                    <div class="info-work">${value.midCheck}</div>
                    <div class="info-data">
                        <div class="info-day">${value.select1}</div>
                        <img src="./images/oval.svg" alt="oval-image">
                        <div class="info-time">${value.select2}</div>
                        <img src="./images/oval.svg" alt="oval-image">
                        <div class="info-place">${value.select3}</div>
                    </div>
                </div>
            </div>
            <div class="second-same">
                <img src="./images/del-icon.svg" width="30" height="30" alt="image">
                <div class="second-info">
                    <div class="info1">${value.skil1}</div>
                    <div class="info2">${value.skil2}</div>
                    <div class="info3">${value.skil3}</div>
                    <div class="info4">${value.skil4}</div>
                </div>
            </div>
        </div>
    `;
}
