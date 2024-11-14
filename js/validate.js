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
