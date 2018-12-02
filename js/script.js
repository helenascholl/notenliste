let noten = new Array();

function declareForm() {

    let innerHTML = '<option disabled selected>Klasse</option>';

    for (let klasse in schueler) {
        innerHTML += '<option value="' + klasse + '">' + klasse + '</option>';
    }
    document.getElementById('klasse').innerHTML = innerHTML;

    refreshForm();

}

function refreshForm() {

    let innerHTML = '<option disabled selected>Schüler</option>';
    let index = document.getElementById('klasse').value;

    for (let i in schueler[index]) {
      innerHTML += '<option value="' + schueler[index][i] + '">' + schueler[index][i] + '</option>';
    }
    document.getElementById('schueler').innerHTML = innerHTML;

    innerHTML = '<option disabled selected>Fach</option>';
    index = document.getElementById('klasse').value.charAt(0) + '. Klassen';
    for (let i in faecher[index]) {
      innerHTML += '<option value="' + faecher[index][i] + '">' + faecher[index][i] + '</option>';
    }
    document.getElementById('fach').innerHTML = innerHTML;

    }

function assignMark() {

    let klasseValue = document.getElementById('klasse').value;
    let schuelerValue = document.getElementById('schueler').value;
    let fachValue = document.getElementById('fach').value;
    let noteValue = document.getElementById('note').value;

    if (klasseValue != 'Klasse'
        && schuelerValue != 'Schüler'
        && fachValue != 'Fach'
        && noteValue != 'Note') {
        noten[klasseValue] = new Array();
        noten[klasseValue][schuelerValue] = new Array();
        noten[klasseValue][schuelerValue][fachValue] = noteValue;

        printMarks();
    } else {
        alert('Füllen Sie bitte alle Felder aus.');
    }

}

function printMarks() {

    let arrayLenght = 0;
    let notenStrings;
    let index = 0;
        
    for (let klasse in noten) {
        for (let schueler in noten[klasse]) {
            for (let fach in noten[klasse][schueler]) {
                arrayLenght++;
            }
        }
    }

    notenStrings = new Array(arrayLenght);

    for (let klasse in noten) {
        for (let schuelerIndex in noten[klasse]) {
            for (let fach in noten[klasse][schuelerIndex]) {
                notenStrings[index] = '<tr><td>' + klasse +
                '</td><td>' + schuelerIndex.split(' ')[0] +
                '</td><td>' + schuelerIndex.split(' ')[1] +
                '</td><td>' + fach +
                '</td><td>' + noten[klasse][schuelerIndex][fach] +
                '</td></tr>';
                index++;
            }
        }
    }

    for (let i in notenStrings) {
        document.getElementById('table').innerHTML += notenStrings[i];
    }

}