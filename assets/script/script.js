function tonne(x) {
    return parseFloat(x) / 1000
}
function grams(x) {
    return parseFloat(x) * 1000
}
function milligrams(x) {
    return parseFloat(x) * 1000000
}

function display() {
    let theValue = document.getElementById("kgValue").value;

    document.getElementById("displayTonne").innerHTML = tonne (theValue);

    document.getElementById("displayGrams").innerHTML = grams (theValue);

    document.getElementById("displayMilligrams").innerHTML = milligrams (theValue);
}