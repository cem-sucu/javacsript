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

function showReaction(type, clickedBox){
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

// permettre a l'utilsaeur de choisir le nbre de box
let choixNombre = parseInt(prompt("Choisissez un nombre")); 

for(let i = 1; i <= choixNombre; i++){
    const newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);

    newbox.addEventListener("click", function() {
        // console.log("Boite n°" + i + ", click !");
        console.log(`Boite n° ${i}, click !`);
        
        // 1
        if(i == nb){
            newbox.classList.add("box-valid");
            // re melange a chaque bon clique
            shuffleChildren(board);
            if(nb == board.children.length){
                board.querySelector(".box-valid").foreach(function(){
                    showReaction("succes", box);
                })
            }
            nb++;
        }
        // 2
        else if(i > nb){
            showReaction("error", newbox);
            nb = 1;
            //melange les box lorque l'on se trompe
            shuffleChildren(board);
            board.querySelectorAll(".box-valid").forEach(function(validBox){
                validBox.classList.remove("box-valid");
            })
        }
        // 3
        else{
            showReaction("notice", newbox);
        } 
    })
}

//melange les box au chargement de la page
shuffleChildren(board);


//timer
const timerElement = document.getElementById("timer");

let temps = 59;


function diminuerTemps() {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    timerElement.innerText = temps;
    temps--;
    
    timerElement.innerText = minutes + ":" + secondes;
}
setInterval(diminuerTemps, 1000);

