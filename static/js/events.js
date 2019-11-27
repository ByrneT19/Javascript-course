//Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born ... Good friend?');
    let anneesDansJours = (2019 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + anneesDansJours + ' days old')
    h1.setAttribute('id', 'anneesDansJours');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('anneesDansJours').remove();
}

//Challenge 2: Cat Generator

const apiKey = '1a427fc4-7c99-42d5-81fe-3b730c4712c0';
const url = 'https://api.thecatapi.com/v1/images/search?breeds'//?mime_types=gif'; trying to get random kitty
const goKey = {
    headers: new Headers({
        "X-Api-Key": apiKey})
    };

function GetKitty() {
    $('.btn-success').on('click', function () {
        fetch(url, goKey)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                displayKitty(responseJson)
            });
    })
}

function displayKitty(responseJson) {
    let result = "";
    for(let i = 0; i < responseJson.length; i++) {
        result += `<img src="${responseJson[i]}" class="cat-img" >`;
    }
    $('.flex-box-container').append(result);
}

function findKitties() {
    GetKitty();
}

GetKitty();


