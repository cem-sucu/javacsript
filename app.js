const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");
board.appendChild(box);
box.innerText = 1;

for(let i = 1; i <= 10; i++){
    let newBox = box.cloneNode()
    newBox.innerText = i;
    board.appendChild(newBox);
}