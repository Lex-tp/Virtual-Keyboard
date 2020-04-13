const RU_KEYS = [
    [{ key: "ё", keyUp: "Ё", code: 192 }, { key: "1", keyUp: "!", code: 49 }, { key: "2", keyUp: "\"", code: 50 }, { key: "3", keyUp: "№", code: 51 }, { key: "4", keyUp: ";", code: 52 }, { key: "5", keyUp: "%", code: 53 },
    { key: "6", keyUp: ":", code: 54 }, { key: "7", keyUp: "?", code: 55 }, { key: "8", keyUp: "*", code: 56 }, { key: "9", keyUp: "(", code: 57 }, { key: "0", keyUp: ")", code: 48 }, { key: "-", keyUp: "_", code: 189 },
    { key: "=", keyUp: "+", code: 187 }, { key: "Backspace", code: 8 }],
    [{ key: "Tab", code: 9 }, { key: "й", keyUp: "Й", code: 81 }, { key: "ц", keyUp: "Ц", code: 87 }, { key: "у", keyUp: "У", code: 69 }, { key: "к", keyUp: "К", code: 82 }, { key: "е", keyUp: "Е", code: 84 },
    { key: "н", keyUp: "Н", code: 89 }, { key: "г", keyUp: "Г", code: 85 }, { key: "ш", keyUp: "Ш", code: 73 }, { key: "щ", keyUp: "Щ", code: 79 }, { key: "з", keyUp: "З", code: 80 }, { key: "х", keyUp: "Х", code: 219 },
    { key: "ъ", keyUp: "Ъ", code: 221 }, { key: "\\", keyUp: "/", code: 220 }, { key: "Del", code: 46 }],
    [{ key: "Caps Lock", code: 20 }, { key: "ф", keyUp: "Ф", code: 65 }, { key: "ы", keyUp: "Ы", code: 83 }, { key: "в", keyUp: "В", code: 68 }, { key: "а", keyUp: "А", code: 70 }, { key: "п", keyUp: "П", code: 71 },
    { key: "р", keyUp: "Р", code: 72 }, { key: "о", keyUp: "О", code: 74 }, { key: "л", keyUp: "Л", code: 75 }, { key: "д", keyUp: "Д", code: 76 }, { key: "ж", keyUp: "Ж", code: 186 }, { key: "э", keyUp: "Э", code: 222 },
    { key: "Enter", code: 13 }],
    [{ key: "Shift", code: "ShiftLeft" }, { key: "я", keyUp: "Я", code: 90 }, { key: "ч", keyUp: "Ч", code: 88 }, { key: "с", keyUp: "С", code: 67 }, { key: "м", keyUp: "М", code: 86 }, { key: "и", keyUp: "И", code: 66 },
    { key: "т", keyUp: "Т", code: 78 }, { key: "ь", keyUp: "Ь", code: 77 }, { key: "б", keyUp: "Б", code: 188 }, { key: "ю", keyUp: "Ю", code: 190 }, { key: ".", keyUp: ",", code: 191 }, { key: "🡅", code: 38 },
    { key: "Shift", code: "ShiftRight" }],
    [{ key: "Ctrl", code: "ControlLeft" }, { key: "Alt", code: "AltLeft" }, { key: "Space", code: "Space" }, { key: "Alt", code: "AltRight" }, { key: "Ctrl", code: "ControlRight" },
    { key: "🡄", code: 37 }, { key: "🡇", code: 40 }, { key: "🡆", code: 39 }, { key: "Win", code: 92 }]
];

const EN_KEYS = [
    [{ key: "`", keyUp: "~", code: 192 }, { key: "1", keyUp: "!", code: 49 }, { key: "2", keyUp: "@", code: 50 }, { key: "3", keyUp: "#", code: 51 }, { key: "4", keyUp: "$", code: 52 }, { key: "5", keyUp: "%", code: 53 },
    { key: "6", keyUp: "^", code: 54 }, { key: "7", keyUp: "&", code: 55 }, { key: "8", keyUp: "*", code: 56 }, { key: "9", keyUp: "(", code: 57 }, { key: "0", keyUp: ")", code: 48 }, { key: "-", keyUp: "_", code: 189 },
    { key: "=", keyUp: "+", code: 187 }, { key: "Backspace", code: 8 }],
    [{ key: "Tab", code: 9 }, { key: "q", keyUp: "Q", code: 81 }, { key: "w", keyUp: "W", code: 87 }, { key: "e", keyUp: "E", code: 69 }, { key: "r", keyUp: "R", code: 82 }, { key: "t", keyUp: "T", code: 84 },
    { key: "y", keyUp: "Y", code: 89 }, { key: "u", keyUp: "U", code: 85 }, { key: "i", keyUp: "I", code: 73 }, { key: "o", keyUp: "O", code: 79 }, { key: "p", keyUp: "P", code: 80 }, { key: "[", keyUp: "{", code: 219 },
    { key: "]", keyUp: "}", code: 221 }, { key: "\\", keyUp: "|", code: 220 }, { key: "Del", code: 46 }],
    [{ key: "Caps Lock", code: 20 }, { key: "a", keyUp: "A", code: 65 }, { key: "s", keyUp: "S", code: 83 }, { key: "d", keyUp: "D", code: 68 }, { key: "f", keyUp: "F", code: 70 }, { key: "g", keyUp: "G", code: 71 },
    { key: "h", keyUp: "H", code: 72 }, { key: "j", keyUp: "J", code: 74 }, { key: "k", keyUp: "K", code: 75 }, { key: "l", keyUp: "L", code: 76 }, { key: ";", keyUp: ":", code: 186 }, { key: "'", keyUp: "\"", code: 222 },
    { key: "Enter", code: 13 }],
    [{ key: "Shift", code: "ShiftLeft" }, { key: "z", keyUp: "Z", code: 90 }, { key: "x", keyUp: "X", code: 88 }, { key: "c", keyUp: "C", code: 67 }, { key: "v", keyUp: "V", code: 86 }, { key: "b", keyUp: "B", code: 66 },
    { key: "n", keyUp: "N", code: 78 }, { key: "m", keyUp: "M", code: 77 }, { key: ",", keyUp: "<", code: 188 }, { key: ".", keyUp: "<", code: 190 }, { key: "/", keyUp: "?", code: 191 }, { key: "🡅", code: 38 },
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
let lineBoard;
let container = document.createElement("div");
let keyBoard = document.createElement("div");
let hotKey = false;
let isCaps = false;

createDomTree();

function createDomTree() {
    infoOS.innerText = "Developed by Windows!";
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

document.body.onload = () => {
    if (localStorage.getItem("ENG") === "true") {
        isEng = false;
        changeLang();
    }
    else {
        isEng = true;
        changeLang();
    }
};

function createButtons(keyCode, key) {
    let button = document.createElement("div");
    let keyButton = document.createElement("p");
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
    lineBoard.appendChild(button);
}


for (let i = 0; i < RU_KEYS.length; i++) {
    lineBoard = document.createElement("div");
    lineBoard.classList.add("line");
    keyBoard.appendChild(lineBoard);
    for (let j = 0; j < RU_KEYS[i].length; j++) {
        createButtons(RU_KEYS[i][j].code, RU_KEYS[i][j].key);        
    }
}

function changeCaps() {
    if (!isCaps) {
        keyBoard.querySelectorAll(".button").forEach(function (el) {
            let elementText = el.querySelector("p").innerText;
            for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                if (RU_KEYS_CAPS[j] == el.getAttribute("data") && isEng === false) {
                    el.querySelector("p").innerText = elementText.toUpperCase();
                }
                if (EN_KEYS_CAPS[j] == el.getAttribute("data") && isEng === true) {
                    el.querySelector("p").innerText = elementText.toUpperCase();
                }
            }
        });
        document.querySelector(`.button[data="${20}"]`).classList.add("active-caps");
        isCaps = true;
    } else {
        keyBoard.querySelectorAll(".button").forEach(function (el) {
            let elementText = el.querySelector("p").innerText;
            for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                if (RU_KEYS_CAPS[j] == el.getAttribute("data") && isEng === false) {
                    el.querySelector("p").innerText = elementText.toLowerCase();
                }
                if (EN_KEYS_CAPS[j] == el.getAttribute("data") && isEng === true) {
                    el.querySelector("p").innerText = elementText.toLowerCase();
                }
            }
        });
        document.querySelector(`.button[data="${20}"]`).classList.remove("active-caps");
        isCaps = false;
    }
}

keyBoard.addEventListener("mousedown", function (event) {
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

    if ((event.target.getAttribute("data") == "ShiftLeft" || selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight" || selectItem.parentNode.getAttribute("data") == "ShiftRight")) {
        isUpper = false;
        changeSize();
        isUpper = true;
    }

    if ((event.target.getAttribute("data") != "ShiftRight" && selectItem.parentNode.getAttribute("data") != "ShiftRight") && (event.target.getAttribute("data") != "ShiftLeft" && selectItem.parentNode.getAttribute("data") != "ShiftLeft")
        && (event.target.getAttribute("data") != 8 && selectItem.parentNode.getAttribute("data") != 8) && (event.target.getAttribute("data") != 13 && selectItem.parentNode.getAttribute("data") != 13)
        && (event.target.getAttribute("data") != 9 && selectItem.parentNode.getAttribute("data") != 9) && (event.target.getAttribute("data") != "Space" && selectItem.parentNode.getAttribute("data") != "Space")
        && (event.target.getAttribute("data") != 46 && selectItem.parentNode.getAttribute("data") != 46) && (event.target.getAttribute("data") != 20 && selectItem.parentNode.getAttribute("data") != 20)
        && (event.target.getAttribute("data") != "ControlLeft" && selectItem.parentNode.getAttribute("data") != "ControlLeft") && (event.target.getAttribute("data") != "ControlRight" && selectItem.parentNode.getAttribute("data") != "ControlRight")
        && (event.target.getAttribute("data") != "AltLeft" && selectItem.parentNode.getAttribute("data") != "AltLeft") && (event.target.getAttribute("data") != "AltRight" && selectItem.parentNode.getAttribute("data") != "AltRight")
        && (event.target.getAttribute("data") != 92 && selectItem.parentNode.getAttribute("data") != 92)) {
        event.target.tagName == "DIV" ? setSelectionRange(selectItem.textContent) : setSelectionRange(selectItem.parentNode.textContent);
    }
    if (event.target.getAttribute("data") == 20 || selectItem.parentNode.getAttribute("data") == 20) {
        changeCaps();
    }
    if ((event.target.getAttribute("data") == "ShiftLeft" || selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight" || selectItem.parentNode.getAttribute("data") == "ShiftRight") && isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (el) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == el.getAttribute("data")) {
                        if (el.getAttribute("data") == 191) {
                            el.querySelector("p").innerText = ",";
                        } else {
                            if (el.getAttribute("data") == 220) {
                                el.querySelector("p").innerText = "/";
                            } else {
                                el.querySelector("p").innerText = el.querySelector("p").innerText.toLowerCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS[0].length; j++) {
                    if (RU_KEYS[0][j].code == el.getAttribute("data")) {
                        el.querySelector("p").innerText = RU_KEYS[0][j].keyUp === undefined ? RU_KEYS[0][j].key : RU_KEYS[0][j].keyUp;
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (el) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == el.getAttribute("data")) {
                        el.querySelector("p").innerText = el.querySelector("p").innerText.toLowerCase();
                    }
                }
                for (let j = 0; j < EN_KEYS[0].length; j++) {
                    if (EN_KEYS[0][j].code == el.getAttribute("data")) {
                        el.querySelector("p").innerText = EN_KEYS[0][j].keyUp === undefined ? EN_KEYS[0][j].key : EN_KEYS[0][j].keyUp;
                    }
                }
            });
        }
    }
});

keyBoard.addEventListener("mouseup", function (event) {
    let selectItem = event.toElement;
    if ((event.target.tagName == "DIV" && event.target.classList.contains("button")) || event.target.tagName == "P") {
        event.target.tagName == "DIV" ? selectItem.classList.remove("active") : selectItem.parentNode.classList.remove("active");
    } else {
        return;
    }

    if ((event.target.getAttribute("data") == "ShiftLeft" || selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight" || selectItem.parentNode.getAttribute("data") == "ShiftRight")) {
        changeSize(isEng, isUpper);
        isUpper = false;
    }

    if ((event.target.getAttribute("data") == "ShiftLeft" || selectItem.parentNode.getAttribute("data") == "ShiftLeft" || event.target.getAttribute("data") == "ShiftRight" || selectItem.parentNode.getAttribute("data") == "ShiftRight") && isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (el) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == el.getAttribute("data")) {
                        if (el.getAttribute("data") == 191) {
                            el.querySelector("p").innerText = ".";
                        } else {
                            if (el.getAttribute("data") == 220) {
                                el.querySelector("p").innerText = "\\";
                            } else {
                                el.querySelector("p").innerText = el.querySelector("p").innerText.toUpperCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS[0].length; j++) {
                    if (RU_KEYS[0][j].code == el.getAttribute("data")) {
                        el.querySelector("p").innerText = RU_KEYS[0][j].key;
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (el) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == el.getAttribute("data")) {
                        el.querySelector("p").innerText = el.querySelector("p").innerText.toUpperCase();
                    }
                }
                for (let j = 0; j < EN_KEYS[0].length; j++) {
                    if (EN_KEYS[0][j].code == el.getAttribute("data")) {
                        el.querySelector("p").innerText = EN_KEYS[0][j].key;
                    }
                }
            });
        }
    }
});

function changeLang() {
    if (isEng == false) {
        keyBoard.querySelectorAll(".button").forEach(function (el, i) {
            el.querySelector("p").innerText = EN_KEYS.flat()[i].key;
            isEng = true;
            localStorage.setItem("ENG", true);
        });
    } else {
        keyBoard.querySelectorAll(".button").forEach(function (el, i) {
            el.querySelector("p").innerText = RU_KEYS.flat()[i].key;
            isEng = false;
            localStorage.setItem("ENG", false);
        });
    }
}

function changeSize() {
    if (isEng == false && isUpper == false) {
        keyBoard.querySelectorAll(".button").forEach(function (el, i) {
            el.querySelector("p").innerText = RU_KEYS.flat()[i].keyUp === undefined ? RU_KEYS.flat()[i].key : RU_KEYS.flat()[i].keyUp;
        });
    }
    if (isEng == false && isUpper == true) {
        keyBoard.querySelectorAll(".button").forEach(function (el, i) {
            el.querySelector("p").innerText = RU_KEYS.flat()[i].key;
        });
    }
    if (isEng == true && isUpper == false) {
        keyBoard.querySelectorAll(".button").forEach(function (el, i) {
            el.querySelector("p").innerText = EN_KEYS.flat()[i].keyUp === undefined ? EN_KEYS.flat()[i].key : EN_KEYS.flat()[i].keyUp;
        });
    }
    if (isEng == true && isUpper == true) {
        keyBoard.querySelectorAll(".button").forEach(function (el, i) {
            el.querySelector("p").innerText = EN_KEYS.flat()[i].key;
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
            keyBoard.querySelectorAll(".button").forEach(function (el) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == el.getAttribute("data")) {
                        if (el.getAttribute("data") == 191) {
                            el.querySelector("p").innerText = ",";
                        } else {
                            if (el.getAttribute("data") == 220) {
                                el.querySelector("p").innerText = "/";
                            } else {
                                el.querySelector("p").innerText = el.querySelector("p").innerText.toLowerCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS[0].length; j++) {
                    if (RU_KEYS[0][j].code == el.getAttribute("data")) {
                        el.querySelector("p").innerText = RU_KEYS[0][j].keyUp === undefined ? RU_KEYS[0][j].key : RU_KEYS[0][j].keyUp;
                    }
                }
            });
        }
        if (isEng == true) {
            keyBoard.querySelectorAll(".button").forEach(function (el) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (EN_KEYS_CAPS[j] == el.getAttribute("data")) {
                        el.querySelector("p").innerText = el.querySelector("p").innerText.toLowerCase();
                    }
                }
                for (let j = 0; j < EN_KEYS[0].length; j++) {
                    if (EN_KEYS[0][j].code == el.getAttribute("data")) {
                        el.querySelector("p").innerText = EN_KEYS[0][j].keyUp === undefined ? EN_KEYS[0][j].key : EN_KEYS[0][j].keyUp;
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
        document.querySelector(`.button[data="${event.keyCode}"]`) !== null ? setSelectionRange(document.querySelector(`.button[data="${event.keyCode}"]`).querySelector("p").innerText) : false;
    }
    document.querySelector(`.button[data="${event.keyCode}"]`) === null ? (document.querySelector(`.button[data="${event.code}"]`) !== null ? document.querySelector(`.button[data="${event.code}"]`).classList.add("active") : false) : document.querySelector(`.button[data="${event.keyCode}"]`).classList.add("active");
});

function setSelectionRange(text) {
    textArea.focus();
    textArea.setRangeText(text, textArea.selectionStart, textArea.selectionEnd, "end");

}

document.body.addEventListener("keyup", function (event) {
    keyBoard.querySelectorAll(".button").forEach(function (el) {
        el.classList.remove("active");
    });
    document.querySelector(`.button[data="${event.code}"]`) === null ? true : document.querySelector(`.button[data="${event.code}"]`).classList.remove("active-shift");
    if (!keyPressed) {
        if (event.keyCode == 16 && !isCaps) {
            changeSize(isEng, isUpper);
            isUpper = false;
        }
        keyPressed = true;
    }
    if (event.keyCode == 16 && isCaps) {
        if (isEng == false) {
            keyBoard.querySelectorAll(".button").forEach(function (el) {
                for (let j = 0; j < RU_KEYS_CAPS.length; j++) {
                    if (RU_KEYS_CAPS[j] == el.getAttribute("data")) {
                        if (el.getAttribute("data") == 191) {
                            el.querySelector("p").innerText = ".";
                        } else {
                            if (el.getAttribute("data") == 220) {
                                el.querySelector("p").innerText = "\\";
                            } else {
                                el.querySelector("p").innerText = el.querySelector("p").innerText.toUpperCase();
                            }
                        }
                    }
                }
                for (let j = 1; j < RU_KEYS[0].length; j++) {
                    if (RU_KEYS[0][j].code == el.getAttribute("data")) {
                        el.querySelector("p").innerText = RU_KEYS[0][j].key;
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