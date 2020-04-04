const RU_KEYS = [
    [{ key: "ё", code: 192 }, { key: "1", code: 49 }, { key: "2", code: 50 }, { key: "3", code: 51 }, { key: "4", code: 52 }, { key: "5", code: 53 },
    { key: "6", code: 54 }, { key: "7", code: 55 }, { key: "8", code: 56 }, { key: "9", code: 57 }, { key: "0", code: 48 }, { key: "-", code: 189 },
    { key: "=", code: 187 }, { key: "Backspace", code: 8 }],
    [{ key: "Tab", code: 9 }, { key: "й", code: 81 }, { key: "ц", code: 87 }, { key: "у", code: 69 }, { key: "к", code: 82 }, { key: "е", code: 84 },
    { key: "н", code: 89 }, { key: "г", code: 85 }, { key: "ш", code: 73 }, { key: "щ", code: 79 }, { key: "з", code: 80 }, { key: "х", code: 219 },
    { key: "ъ", code: 221 }, { key: "\\", code: 220 }, { key: "Del", code: 46 }],
    [{ key: "Caps Lock", code: 20 }, { key: "ф", code: 65 }, { key: "ы", code: 83 }, { key: "в", code: 68 }, { key: "а", code: 70 }, { key: "п", code: 71 },
    { key: "р", code: 72 }, { key: "о", code: 74 }, { key: "л", code: 75 }, { key: "д", code: 76 }, { key: "ж", code: 186 }, { key: "э", code: 222 },
    { key: "Enter", code: 13 }],
    [{ key: "Shift", code: 16 }, { key: "я", code: 90 }, { key: "ч", code: 88 }, { key: "с", code: 67 }, { key: "м", code: 86 }, { key: "и", code: 66 },
    { key: "т", code: 78 }, { key: "ь", code: 77 }, { key: "б", code: 188 }, { key: "ю", code: 199 }, { key: ".", code: 191 }, { key: "🡅", code: 38 },
    { key: "Shift", code: 16 }],
    [{ key: "Ctrl", code: 17 }, { key: "Alt", code: 18 }, { key: "Space", code: 32 }, { key: "Alt", code: 18 }, { key: "Ctrl", code: 17 },
    { key: "🡄", code: 37 }, { key: "🡇", code: 40 }, { key: "🡆", code: 39 }, { key: "Win", code: 91 }]
];

const RU_KEYS_UP = [
    [{ key: "Ё", code: 192 }, { key: "!", code: 49 }, { key: "\"", code: 50 }, { key: "№", code: 51 }, { key: ";", code: 52 }, { key: "%", code: 53 },
    { key: ":", code: 54 }, { key: "?", code: 55 }, { key: "*", code: 56 }, { key: "(", code: 57 }, { key: ")", code: 48 }, { key: "_", code: 189 },
    { key: "+", code: 187 }, { key: "Backspace", code: 8 }],
    [{ key: "Tab", code: 9 }, { key: "Й", code: 81 }, { key: "Ц", code: 87 }, { key: "У", code: 69 }, { key: "К", code: 82 }, { key: "Е", code: 84 },
    { key: "Н", code: 89 }, { key: "Г", code: 85 }, { key: "Ш", code: 73 }, { key: "Щ", code: 79 }, { key: "З", code: 80 }, { key: "Х", code: 219 },
    { key: "Ъ", code: 221 }, { key: "/", code: 220 }, { key: "Del", code: 46 }],
    [{ key: "Caps Lock", code: 20 }, { key: "Ф", code: 65 }, { key: "Ы", code: 83 }, { key: "В", code: 68 }, { key: "А", code: 70 }, { key: "П", code: 71 },
    { key: "Р", code: 72 }, { key: "О", code: 74 }, { key: "Л", code: 75 }, { key: "Д", code: 76 }, { key: "Ж", code: 186 }, { key: "Э", code: 222 },
    { key: "Enter", code: 13 }],
    [{ key: "Shift", code: 16 }, { key: "Я", code: 90 }, { key: "Ч", code: 88 }, { key: "С", code: 67 }, { key: "М", code: 86 }, { key: "И", code: 66 },
    { key: "Т", code: 78 }, { key: "Ь", code: 77 }, { key: "Б", code: 188 }, { key: "Ю", code: 199 }, { key: ",", code: 191 }, { key: "🡅", code: 38 },
    { key: "Shift", code: 16 }],
    [{ key: "Ctrl", code: 17 }, { key: "Alt", code: 18 }, { key: "Space", code: 32 }, { key: "Alt", code: 18 }, { key: "Ctrl", code: 17 },
    { key: "🡄", code: 37 }, { key: "🡇", code: 40 }, { key: "🡆", code: 39 }, { key: "Win", code: 91 }]
];
let keyPressed=true;
let isEng = false;
let isUpper = false;
let buttonKey, key, lineBoard;
let container = document.createElement('div');
let keyBoard = document.createElement('div');
container.classList.add("container");
keyBoard.classList.add("keyboard");
container.appendChild(keyBoard);
document.body.append(container);

let createButtons = function (button, keyButton, keyCode, key) {
    button = document.createElement('div');
    keyButton = document.createElement('p');
    button.appendChild(keyButton);
    button.querySelector('p').innerText = key;
    switch (keyCode) {
        case 8:
        case 20:
        case 13:
        case 16: {
            button.classList.add("button");
            button.classList.add("button-big");
            break;
        }
        case 32: {
            button.classList.add("button");
            button.classList.add("button-big-space");
            break;
        }
        default: {
            button.classList.add("button");
        }
    }
    return button;
}

for (let i = 0; i < RU_KEYS.length; i++) {
    lineBoard = document.createElement('div');
    lineBoard.classList.add("line");
    keyBoard.appendChild(lineBoard);
    for (let j = 0; j < RU_KEYS[i].length; j++) {
        buttonKey = createButtons(buttonKey, key, RU_KEYS[i][j].code, RU_KEYS[i][j].key);
        lineBoard.appendChild(buttonKey);
    }
}

function changeLang() {
    for (let i = 0; i < RU_KEYS_UP.length; i++) {
        for (let j = 0; j < RU_KEYS_UP[i].length; j++) {
            e.querySelector('p').innerText = RU_KEYS_UP[i][j].key;
        }
    }
}

function changeSize(isEng, isUpper) {
    if (isEng == false && isUpper == false) {
        keyBoard.querySelectorAll('.button').forEach(function (e,i) {
            e.querySelector('p').innerText=RU_KEYS_UP.flat()[i].key;
        });
    }
    if (isEng == false && isUpper == true) {
        keyBoard.querySelectorAll('.button').forEach(function (e,i) {
            e.querySelector('p').innerText=RU_KEYS.flat()[i].key;
        });
    }
}

document.body.addEventListener('keydown', function (e) {
    if(keyPressed){
        if (e.keyCode == 16) {
            changeSize(isEng, isUpper);
            isUpper = true;
        }
        keyPressed=false;
    }
});

document.body.addEventListener('keyup', function (e) {
    if(!keyPressed){
    if (e.keyCode == 16) {
        changeSize(isEng, isUpper);
        isUpper = false;
    }
    keyPressed=true;
    }
});