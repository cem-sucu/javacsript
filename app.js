const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");


for(let i = 1; i <= 10; i++){
    let newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);
}

let i = board.children.length, k , temp;
while(--i > 0){
    k = Math.floor(Math.random()* (i+1));
    temp = board.children[k];
    board.children[k] = board.children[i];
    board.appendChild(temp);
}