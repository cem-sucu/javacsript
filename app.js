function shuffleChildren(parent){
    let children = parent.children;
    let i = children.length, k , temp;
    while(--i > 0){
        k = Math.floor(Math.random()* (i+1));
        temp = children[k];
        children[k] = children[i];
        parent.appendChild(temp);
        }
    }


const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");


for(let i = 1; i <= 10; i++){
    const newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);

    newbox.addEventListener("click", function() {
        // console.log("Boite n°" + i + ", click !");
        console.log(`Boite n° $i, click !`);
    })
}

shuffleChildren(board);