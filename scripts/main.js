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
    [{ key: "Shift", code: "ShiftLeft" }, { key: "я", code: 90 }, { key: "ч", code: 88 }, { key: "с", code: 67 }, { key: "м", code: 86 }, { key: "и", code: 66 },
    { key: "т", code: 78 }, { key: "ь", code: 77 }, { key: "б", code: 188 }, { key: "ю", code: 190 }, { key: ".", code: 191 }, { key: "🡅", code: 38 },
    { key: "Shift", code: "ShiftRight" }],
    [{ key: "Ctrl", code: "ControlLeft" }, { key: "Alt", code: "AltLeft" }, { key: "Space", code: "Space" }, { key: "Alt", code: "AltRight" }, { key: "Ctrl", code: "ControlRight" },
    { key: "🡄", code: 37 }, { key: "🡇", code: 40 }, { key: "🡆", code: 39 }, { key: "Win", code: 92 }]
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
    [{ key: "Shift", code: "ShiftLeft" }, { key: "Я", code: 90 }, { key: "Ч", code: 88 }, { key: "С", code: 67 }, { key: "М", code: 86 }, { key: "И", code: 66 },
    { key: "Т", code: 78 }, { key: "Ь", code: 77 }, { key: "Б", code: 188 }, { key: "Ю", code: 190 }, { key: ",", code: 191 }, { key: "🡅", code: 38 },
    { key: "Shift", code: "ShiftRight" }],
    [{ key: "Ctrl", code: "ControlLeft" }, { key: "Alt", code: "AltLeft" }, { key: "Space", code: "Space" }, { key: "Alt", code: "AltRight" }, { key: "Ctrl", code: "ControlRight" },
    { key: "🡄", code: 37 }, { key: "🡇", code: 40 }, { key: "🡆", code: 39 }, { key: "Win", code: 92 }]
];

const EN_KEYS = [
    [{ key: "`", code: 192 }, { key: "1", code: 49 }, { key: "2", code: 50 }, { key: "3", code: 51 }, { key: "4", code: 52 }, { key: "5", code: 53 },
    { key: "6", code: 54 }, { key: "7", code: 55 }, { key: "8", code: 56 }, { key: "9", code: 57 }, { key: "0", code: 48 }, { key: "-", code: 189 },
    { key: "=", code: 187 }, { key: "Backspace", code: 8 }],
    [{ key: "Tab", code: 9 }, { key: "q", code: 81 }, { key: "w", code: 87 }, { key: "e", code: 69 }, { key: "r", code: 82 }, { key: "t", code: 84 },
    { key: "y", code: 89 }, { key: "u", code: 85 }, { key: "i", code: 73 }, { key: "o", code: 79 }, { key: "p", code: 80 }, { key: "[", code: 219 },
    { key: "]", code: 221 }, { key: "\\", code: 220 }, { key: "Del", code: 46 }],
    [{ key: "Caps Lock", code: 20 }, { key: "a", code: 65 }, { key: "s", code: 83 }, { key: "d", code: 68 }, { key: "f", code: 70 }, { key: "g", code: 71 },
    { key: "h", code: 72 }, { key: "j", code: 74 }, { key: "k", code: 75 }, { key: "l", code: 76 }, { key: ";", code: 186 }, { key: "'", code: 222 },
    { key: "Enter", code: 13 }],
    [{ key: "Shift", code: "ShiftLeft" }, { key: "z", code: 90 }, { key: "x", code: 88 }, { key: "c", code: 67 }, { key: "v", code: 86 }, { key: "b", code: 66 },
    { key: "n", code: 78 }, { key: "m", code: 77 }, { key: ",", code: 188 }, { key: ".", code: 190 }, { key: "/", code: 191 }, { key: "🡅", code: 38 },
    { key: "Shift", code: "ShiftRight" }],
    [{ key: "Ctrl", code: "ControlLeft" }, { key: "Alt", code: "AltLeft" }, { key: "Space", code: "Space" }, { key: "Alt", code: "AltRight" }, { key: "Ctrl", code: "ControlRight" },
    { key: "🡄", code: 37 }, { key: "🡇", code: 40 }, { key: "🡆", code: 39 }, { key: "Win", code: 92 }]
];

const EN_KEYS_UP = [
    [{ key: "~", code: 192 }, { key: "!", code: 49 }, { key: "@", code: 50 }, { key: "#", code: 51 }, { key: "$", code: 52 }, { key: "%", code: 53 },
    { key: "^", code: 54 }, { key: "&", code: 55 }, { key: "*", code: 56 }, { key: "(", code: 57 }, { key: ")", code: 48 }, { key: "_", code: 189 },
    { key: "+", code: 187 }, { key: "Backspace", code: 8 }],
    [{ key: "Tab", code: 9 }, { key: "Q", code: 81 }, { key: "W", code: 87 }, { key: "E", code: 69 }, { key: "R", code: 82 }, { key: "T", code: 84 },
    { key: "Y", code: 89 }, { key: "U", code: 85 }, { key: "I", code: 73 }, { key: "O", code: 79 }, { key: "P", code: 80 }, { key: "{", code: 219 },
    { key: "}", code: 221 }, { key: "|", code: 220 }, { key: "Del", code: 46 }],
    [{ key: "Caps Lock", code: 20 }, { key: "A", code: 65 }, { key: "S", code: 83 }, { key: "D", code: 68 }, { key: "F", code: 70 }, { key: "G", code: 71 },
    { key: "H", code: 72 }, { key: "J", code: 74 }, { key: "K", code: 75 }, { key: "L", code: 76 }, { key: ":", code: 186 }, { key: "\"", code: 222 },
    { key: "Enter", code: 13 }],
    [{ key: "Shift", code: "ShiftLeft" }, { key: "Z", code: 90 }, { key: "X", code: 88 }, { key: "C", code: 67 }, { key: "V", code: 86 }, { key: "B", code: 66 },
    { key: "N", code: 78 }, { key: "M", code: 77 }, { key: "<", code: 188 }, { key: ">", code: 190 }, { key: "?", code: 191 }, { key: "🡅", code: 38 },
    { key: "Shift", code: "ShiftRight" }],
    [{ key: "Ctrl", code: "ControlLeft" }, { key: "Alt", code: "AltLeft" }, { key: "Space", code: "Space" }, { key: "Alt", code: "AltRight" }, { key: "Ctrl", code: "ControlRight" },
    { key: "🡄", code: 37 }, { key: "🡇", code: 40 }, { key: "🡆", code: 39 }, { key: "Win", code: 92 }]
];

const RU_KEYS_CAPS = [192, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77, 219, 221, 186, 222, 188, 190, 191, 220];

const EN_KEYS_CAPS = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];

let keyPressed = true;
let isEng = false;
let isUpper = false;
let infoBox = document.createElement("div");
let infoText = document.createElement("span");
let infoOS = document.createElement("span");
let infoTextPlus = document.createElement("span");
let infoShiftBtn = document.createElement("div");
let infoShiftText = document.createElement("p");
let infoCtrlBtn = document.createElement("div");
let infoCtrlText = document.createElement("p");
let inputText = document.createElement("div");
let textArea = document.createElement("textarea");
let buttonKey, key, lineBoard;
let container = document.createElement("div");
let keyBoard = document.createElement("div");
let hotKey = false;
let isCaps = false;

createDomTree();

function createDomTree() {
    infoOS.innerText="Developed by Windows!";
    infoText.innerText = "To change the language, press ";
    infoTextPlus.innerText = "+";
    infoShiftText.innerText = "Ctrl";
    infoShiftBtn.classList.add("button-big");
    infoCtrlText.innerText = "Shift";
    infoCtrlBtn.classList.add("button-big");
    container.classList.add("container");
    keyBoard.classList.add("keyboard");
    textArea.classList.add("inputbox");
    infoBox.classList.add("infobox");
    infoCtrlBtn.appendChild(infoCtrlText);
    infoShiftBtn.appendChild(infoShiftText);
    infoBox.appendChild(infoText);
    infoBox.appendChild(infoShiftBtn);
    infoBox.appendChild(infoTextPlus);
    infoBox.appendChild(infoCtrlBtn);
    infoBox.appendChild(infoOS);
    inputText.appendChild(textArea);
    container.appendChild(inputText);
    container.appendChild(keyBoard);
    container.appendChild(infoBox);
    document.body.append(container);
}

document.body.onload=()=> {
    if(localStorage.getItem("ENG")=="true"){
        isEng=false;
        changeLang();
    }
    else {
        isEng=true;
        changeLang();
    }
};

let createButtons = function (button, keyButton, keyCode, key) {
    button = document.createElement("div");
    keyButton = document.createElement("p");
    button.setAttribute("data", keyCode);
    button.appendChild(keyButton);
    button.querySelector("p").innerText = key;
    switch (keyCode) {
        case 8:
        case 20:
        case 13:
        case "ShiftLeft":
        case "ShiftRight": {
            button.classList.add("button");
            button.classList.add("button-big");
            break;
        }
        case "Space": {
            button.classList.add("button");
            button.classList.add("button-big-space");
            break;
        }
        default: {
            button.classList.add("button");
        }
    }
    return button;
};


for (let i = 0; i < RU_KEYS.length; i++) {
    lineBoard = document.createElement("div");
    lineBoard.classList.add("line");
    keyBoard.appendChild(lineBoard);
    for (let j = 0; j < RU_KEYS[i].length; j++) {
        buttonKey = createButtons(buttonKey, key, RU_KEYS[i][j].code, RU_KEYS[i][j].key);
        lineBoard.appendChild(buttonKey);
    }
}

function changeCaps() {
    if (!isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toUpperCase();
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toUpperCase();
                    }
                }
            });
        }
        document.querySelector(`.button[data="${20}"]`).classList.add("active-caps");
        isCaps = true;
    } else {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toLowerCase();
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toLowerCase();
                    }
                }
            });
        }
        document.querySelector(`.button[data="${20}"]`).classList.remove("active-caps");
        isCaps = false;
    }
}

document.addEventListener("mousedown", function (event) {
    let selectItem = event.toElement;
    if ((event.target.tagName == "DIV" && event.target.classList.contains("button")) || event.target.tagName == "P") {
        event.target.tagName == "DIV" ? selectItem.classList.add("active") : selectItem.parentNode.classList.add("active");
    } else {
        return;
    }

    if (event.target.getAttribute("data") == "Space" || selectItem.parentNode.getAttribute("data") == "Space") {
        setSelectionRange(" ");
    }
    if (event.target.getAttribute("data") == 9 || selectItem.parentNode.getAttribute("data") == 9) {
        setSelectionRange("\t");
    }
    if (event.target.getAttribute("data") == 13 || selectItem.parentNode.getAttribute("data") == 13) {
        setSelectionRange("\n");
    }
    if (event.target.getAttribute("data") == 8 || selectItem.parentNode.getAttribute("data") == 8) {
        let start = textArea.selectionStart,
            end = textArea.selectionEnd;
        if (!textArea.setRangeText) { return; }
        if (start >= end) {
            if (start <= 0 || !textArea.setSelectionRange) { return; }
            textArea.setSelectionRange(start - 1, start);
        }
        textArea.setRangeText("");
        textArea.focus();
    }
    if (event.target.getAttribute("data") == 46 || selectItem.parentNode.getAttribute("data") == 46) {
        let start = textArea.selectionStart,
            end = textArea.selectionEnd;
        if (!textArea.setRangeText) { return; }
        if (start >= end) {
            if (start <= 0 || !textArea.setSelectionRange) { return; }
            textArea.setSelectionRange(start, start + 1);
        }
        textArea.setRangeText("");
        textArea.focus();
    }

    if ((event.target.getAttribute("data") == "ShiftLeft"|| selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight"|| selectItem.parentNode.getAttribute("data") == "ShiftRight")) {
        isUpper = false;
        changeSize();
        isUpper = true;
    }

    if ((event.target.getAttribute("data") != "ShiftRight" && selectItem.parentNode.getAttribute("data") != "ShiftRight") && (event.target.getAttribute("data") != "ShiftLeft" && selectItem.parentNode.getAttribute("data") != "ShiftLeft")
    &&(event.target.getAttribute("data") != 8 && selectItem.parentNode.getAttribute("data") != 8) && (event.target.getAttribute("data") != 13 && selectItem.parentNode.getAttribute("data") != 13) 
    && (event.target.getAttribute("data") != 9 && selectItem.parentNode.getAttribute("data") != 9) && (event.target.getAttribute("data") != "Space" && selectItem.parentNode.getAttribute("data") != "Space") 
    && (event.target.getAttribute("data") != 46 && selectItem.parentNode.getAttribute("data") != 46) && (event.target.getAttribute("data") != 20 && selectItem.parentNode.getAttribute("data") != 20)
    && (event.target.getAttribute("data") != "ControlLeft" && selectItem.parentNode.getAttribute("data") != "ControlLeft") && (event.target.getAttribute("data") != "ControlRight" && selectItem.parentNode.getAttribute("data") != "ControlRight")
    && (event.target.getAttribute("data") != "AltLeft" && selectItem.parentNode.getAttribute("data") != "AltLeft") && (event.target.getAttribute("data") != "AltRight" && selectItem.parentNode.getAttribute("data") != "AltRight")
    && (event.target.getAttribute("data") != 92  && selectItem.parentNode.getAttribute("data") != 92)) {
        event.target.tagName == "DIV" ? setSelectionRange(selectItem.textContent) : setSelectionRange(selectItem.parentNode.textContent);
    }
    if (event.target.getAttribute("data") == 20 || selectItem.parentNode.getAttribute("data") == 20) {
        changeCaps();
    }
    if ((event.target.getAttribute("data") == "ShiftLeft"|| selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight"|| selectItem.parentNode.getAttribute("data") == "ShiftRight") && isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == e.getAttribute("data")) {
                        if (e.getAttribute("data") == 191) {
                            e.querySelector("p").innerText = ",";
                        } else {
                            if (e.getAttribute("data") == 220) {
                                e.querySelector("p").innerText = "/";
                            } else {
                                e.querySelector("p").innerText = e.querySelector("p").innerText.toLowerCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS_UP[0].length; j++) {
                    if (RU_KEYS_UP[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = RU_KEYS_UP[0][j].key;
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toLowerCase();
                    }
                }
                for (let j = 0; j < EN_KEYS_UP[0].length; j++) {
                    if (EN_KEYS_UP[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = EN_KEYS_UP[0][j].key;
                    }
                }
            });
        }
    }
});

document.addEventListener("mouseup", function (event) {
    let selectItem = event.toElement;
    if ((event.target.tagName == "DIV" && event.target.classList.contains("button")) || event.target.tagName == "P") {
        event.target.tagName == "DIV" ? selectItem.classList.remove("active") : selectItem.parentNode.classList.remove("active");
    } else {
        return;
    }

    if ((event.target.getAttribute("data") == "ShiftLeft"|| selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight"|| selectItem.parentNode.getAttribute("data") == "ShiftRight")) {
        changeSize(isEng, isUpper);
        isUpper = false;
    }

    if ((event.target.getAttribute("data") == "ShiftLeft"|| selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight"|| selectItem.parentNode.getAttribute("data") == "ShiftRight") && isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == e.getAttribute("data")) {
                        if (e.getAttribute("data") == 191) {
                            e.querySelector("p").innerText = ".";
                        } else {
                            if (e.getAttribute("data") == 220) {
                                e.querySelector("p").innerText = "\\";
                            } else {
                                e.querySelector("p").innerText = e.querySelector("p").innerText.toUpperCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS[0].length; j++) {
                    if (RU_KEYS[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = RU_KEYS[0][j].key;
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toUpperCase();
                    }
                }
                for (let j = 0; j < EN_KEYS[0].length; j++) {
                    if (EN_KEYS[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = EN_KEYS[0][j].key;
                    }
                }
            });
        }
    }
});

function changeLang() {
    if (isEng == false) {
        keyBoard.querySelectorAll(".button").forEach(function (e, i) {
            e.querySelector("p").innerText = EN_KEYS.flat()[i].key;
            isEng = true;
            localStorage.setItem("ENG", true);
        });
    } else {
        keyBoard.querySelectorAll(".button").forEach(function (e, i) {
            e.querySelector("p").innerText = RU_KEYS.flat()[i].key;
            isEng = false;
            localStorage.setItem("ENG", false);
        });
    }
}

function changeSize() {
    if (isEng == false && isUpper == false) {
        keyBoard.querySelectorAll(".button").forEach(function (e, i) {
            e.querySelector("p").innerText = RU_KEYS_UP.flat()[i].key;
        });
    }
    if (isEng == false && isUpper == true) {
        keyBoard.querySelectorAll(".button").forEach(function (e, i) {
            e.querySelector("p").innerText = RU_KEYS.flat()[i].key;
        });
    }
    if (isEng == true && isUpper == false) {
        keyBoard.querySelectorAll(".button").forEach(function (e, i) {
            e.querySelector("p").innerText = EN_KEYS_UP.flat()[i].key;
        });
    }
    if (isEng == true && isUpper == true) {
        keyBoard.querySelectorAll(".button").forEach(function (e, i) {
            e.querySelector("p").innerText = EN_KEYS.flat()[i].key;
        });
    }
}
document.body.addEventListener("keydown", function (event) {
    if (keyPressed) {
        if (event.keyCode == 16 && !isCaps) {
            document.querySelector(`.button[data="${event.code}"]`).classList.add("active-shift");
            isUpper = false;
            changeSize();
            isUpper = true;
        }
        keyPressed = false;
    }
    if (event.ctrlKey) hotKey = true;
    if (event.shiftKey && hotKey) {
        changeLang();
        isUpper = true;
        changeSize();
        hotKey = false;
    }
    event.preventDefault();
    if (event.keyCode == 20) {
        changeCaps();
    }
    if (event.keyCode == 16 && isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == e.getAttribute("data")) {
                        if (e.getAttribute("data") == 191) {
                            e.querySelector("p").innerText = ",";
                        } else {
                            if (e.getAttribute("data") == 220) {
                                e.querySelector("p").innerText = "/";
                            } else {
                                e.querySelector("p").innerText = e.querySelector("p").innerText.toLowerCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS_UP[0].length; j++) {
                    if (RU_KEYS_UP[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = RU_KEYS_UP[0][j].key;
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toLowerCase();
                    }
                }
                for (let j = 0; j < EN_KEYS_UP[0].length; j++) {
                    if (EN_KEYS_UP[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = EN_KEYS_UP[0][j].key;
                    }
                }
            });
        }
    }
    textArea.focus();
    if (event.code == "Space") {
        setSelectionRange(" ");
    }
    if (event.code == "Tab") {
        setSelectionRange("\t");
    }
    if (event.code == "Enter") {
        setSelectionRange("\n");
    }
    if (event.code == "Backspace") {
        let start = textArea.selectionStart,
            end = textArea.selectionEnd;
        if (!textArea.setRangeText) { return; }
        if (start >= end) {
            if (start <= 0 || !textArea.setSelectionRange) { return; }
            textArea.setSelectionRange(start - 1, start);
        }
        textArea.setRangeText("");
        textArea.focus();
    }
    if (event.code == "Delete") {
        let start = textArea.selectionStart,
            end = textArea.selectionEnd;
        if (!textArea.setRangeText) { return; }
        if (start >= end) {
            if (start <= 0 || !textArea.setSelectionRange) { return; }
            textArea.setSelectionRange(start, start + 1);
        }
        textArea.setRangeText("");
        textArea.focus();
    }
    if (event.code != "Backspace" && event.code != "Enter" && event.code != "Tab" && event.code != "Space" && event.code != "Delete" && event.code != "CapsLock") {
        document.querySelector(`.button[data="${event.keyCode}"]`) !== null ? setSelectionRange(document.querySelector(`.button[data="${event.keyCode}"]`).querySelector("p").innerText) : null;
    }
    document.querySelector(`.button[data="${event.keyCode}"]`) === null ? document.querySelector(`.button[data="${event.code}"]`).classList.add("active") : document.querySelector(`.button[data="${event.keyCode}"]`).classList.add("active");
});

function setSelectionRange(text) {
    textArea.focus();
    textArea.setRangeText(text, textArea.selectionStart, textArea.selectionEnd, "end");

}

document.body.addEventListener("keyup", function (event) {
    keyBoard.querySelectorAll(".button").forEach(function (e) {
        e.classList.remove("active");
    });
    document.querySelector(`.button[data="${event.code}"]`) === null ? null : document.querySelector(`.button[data="${event.code}"]`).classList.remove("active-shift");
    if (!keyPressed) {
        if (event.keyCode == 16 && !isCaps) {
            changeSize(isEng, isUpper);
            isUpper = false;
        }
        keyPressed = true;
    }
    if (event.keyCode == 16 && isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == e.getAttribute("data")) {
                        if (e.getAttribute("data") == 191) {
                            e.querySelector("p").innerText = ".";
                        } else {
                            if (e.getAttribute("data") == 220) {
                                e.querySelector("p").innerText = "\\";
                            } else {
                                e.querySelector("p").innerText = e.querySelector("p").innerText.toUpperCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS[0].length; j++) {
                    if (RU_KEYS[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = RU_KEYS[0][j].key;
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (e) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == e.getAttribute("data")) {
                        e.querySelector("p").innerText = e.querySelector("p").innerText.toUpperCase();
                    }
                }
                for (let j = 0; j < EN_KEYS[0].length; j++) {
                    if (EN_KEYS[0][j].code == e.getAttribute("data")) {
                        e.querySelector("p").innerText = EN_KEYS[0][j].key;
                    }
                }
            });
        }
    }
});