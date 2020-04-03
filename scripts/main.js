class Button {
    constructor(key, ruKey) {
        this.key = key;
        this.ruKey = ruKey;
    }
}
let container = document.createElement('div');
let keyBoard = document.createElement('div');
let lineBoard = document.createElement('div');
container.className="container";
keyBoard.className = "keyboard";
lineBoard.className = "line";
keyBoard.appendChild(lineBoard);
container.appendChild(keyBoard);
document.body.append(container);

let button = new Button('e', 'у');

for (let i = 0; i < 14; i++) {
    let buttonKey = document.createElement('div');
    let key = document.createElement('p');
    buttonKey.appendChild(key);
    buttonKey.className = "button";
    buttonKey.querySelector('p').innerText = button.key.toUpperCase();
    lineBoard.appendChild(buttonKey);
}


