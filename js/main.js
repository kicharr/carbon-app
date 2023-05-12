let selectedOption = document.getElementById('chooseSite');
let selectSite = document.getElementById("chooseSite");
let options = [
    "Обсерватория, участок №1",
    "Саралы",
    "Большие кабаны"
];
selectSite.innerHTML = "";
for (let i = 0; i < options.length; i++) {
    let opt = options[i];
    selectSite.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

function checkOption() {
    console.log(selectedOption.value);
    let observatoryText = document.getElementById('observatorySite');
    let boarText = document.getElementById('boar');
    let test = document.getElementById('test');

    if (observatoryText.style.cssText === 'display: none;' && selectedOption.value === 'Обсерватория, участок №1') {
        observatoryText.style.cssText = 'display: block;';
        test.style.cssText = 'display: none;';
        boarText.style.cssText = 'display: none;';
    } else {
        boarText.style.cssText = 'display: none;';
        test.style.cssText = 'display: none;';
    }

    if (selectedOption.value === 'Саралы') {
        test.style.cssText = 'display: block;';
        observatoryText.style.cssText = 'display: none;';
        boarText.style.cssText = 'display: none;';
    } else {
        boarText.style.cssText = 'display: none;';
        test.style.cssText = 'display: none;';

    }

    if (selectedOption.value === 'Большие кабаны') {
        test.style.cssText = 'display: none;';
        observatoryText.style.cssText = 'display: none;';
        boarText.style.cssText = 'display: block;';
    } else {
        boarText.style.cssText = 'display: none;';

    }


    console.log(observatoryText.style.cssText)
}