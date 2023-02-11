var scaleList = [
    310, 330, 350, 475, 600, 1000,
];
fillPage(scaleList);

function getValue(value) {
     var inputElement = document.getElementById(value);
    inputElement.addEventListener('input', calculate(value, inputElement))
}

function calculate(sizeValue, inputElement) {
    var mlValue = inputElement.value / sizeValue

    insertValue(mlValue, inputElement, scaleList)
}

function insertValue(valorToCalculate, elementReferece, array) {
    for (var cont = 0; cont < array.length; cont++) {
        var elementToInsert = document.getElementById(array[cont]);
        if (elementReferece != elementToInsert) {
            var inputValue = (elementToInsert.id*valorToCalculate).toFixed(2);
            elementToInsert.value = inputValue;
        }
    }
}

function fillPage(array) {
    var inputText = "";
    for (var cont = 0; cont < array.length; cont++) {
        if(array[cont] < 1000) {
            inputText += `<div class="inputs"><p>${array[cont]}ml:</p><input type="number" oninput="getValue(${array[cont]})" id="${array[cont]}"></div>`
        } else {
            inputText += `<div class="inputs"><p>${(array[cont]/1000)}l:</p><input type="number" oninput="getValue(${array[cont]})" id="${array[cont]}"></div>`
        }
    }
    var elementTest = document.getElementById("valores");
    elementTest.innerHTML = inputText;
}