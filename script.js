function toUpper(){
    const givenText = document.getElementById("inputText").value;
    let result = givenText.toUpperCase();

    let html = '';
    const output = document.getElementById('outputText');
    html +=`
        <p>${result}</p>
    `
    output.innerHTML = html;
}

function toLower(){
    const givenText = document.getElementById("inputText").value;
    let result = givenText.toLowerCase();

    let html = '';
    const output = document.getElementById('outputText');
    html +=`
        <p>${result}</p>
    `
    output.innerHTML = html;
}

function toCapital(){
    const givenText = document.getElementById("inputText").value;
    let result = givenText.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

    let html = '';
    const output = document.getElementById('outputText');
    html +=`
        <p>${result}</p>
    `
    output.innerHTML = html;
}

function removeSpaces(){
    const givenText = document.getElementById("inputText").value;
    let result = givenText.trim();

    let html = '';
    const output = document.getElementById('outputText');
    html +=`
        <p>${result}</p>
    `
    output.innerHTML = html;
}

function replaceWord(){
    const givenText = document.getElementById("inputText").value;
    let oldWord = prompt("Enter the word you want to replace: ");
    let newWord = prompt("Enter the new word: ");
    let result = givenText.replace(oldWord, newWord);

    let html = '';
    const output = document.getElementById('outputText');
    html +=`
        <p>${result}</p>
    `
    output.innerHTML = html;
}

function countChar(){
    const givenText = document.getElementById("inputText").value;
    let result = givenText.length

    let html = '';
    const output = document.getElementById('outputText');
    html +=`
        <p>There are ${result} characters.</p>
    `
    output.innerHTML = html;
}