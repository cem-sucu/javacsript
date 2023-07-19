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

function showReactions(type, clickedBox){
    clickedBox.classList.add(type);
    if(type !== "success"){
        setTimeout(function(){
            clickedBox.classList.remove(type);
        }, 800)
    }
}


const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");

let nb = 1;

for(let i = 1; i <= 10; i++){
    const newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);

    newbox.addEventListener("click", function() {
        // console.log("Boite n°" + i + ", click !");
        console.log(`Boite n° ${i}, click !`);
        
        // 1
        if(i == nb){
            newbox.classList.add("box-valid");
            if(nb == board.children.length){
                board.querySelector(".box-valid").foreach(function(){
                    showReactions("succes", box);
                })
            }
            nb++;
        }
        // 2
        else if(i > nb){
            showReactions("error", newbox);
            nb = 1;
            board.querySelectorAll(".box-valid").forEach(function(validBox){
                validBox.classList.remove("box-valid");
            })
        }
        // 3
        else{
            showReactions("notice", newbox);
        } 
    })
}

shuffleChildren(board);