let form = document.querySelector(".run");
let labWIDTH  = form.querySelector("#width").value;
let labHEIGHTG = form.querySelector("#height").value;
let btn = document.querySelector(".btn");





function CreateLabirint(width,height){
   let labirint = [];

    for(let i = 0; i < width; i++){
        labirint[i] = [];
        for(let j = 0; j < height; j++){
            labirint[i][j] = Math.floor(getNumber());
        }
    }

    labirint[0][0] = 1;
    labirint[width-1][height-1] = 2;


    return labirint;
}


function getNumber(){
    let number = Math.random();
    return number > 0.5 ? 3 : 4;
}



function drawLabirint(labirint){
    for(let i = 0; i<labirint.length; i++){
      let el = createBlock("row", document.body);
        for(let j = 0; j<labirint[i].length; j++){
              if(labirint[i][j]===3){
                  createBlock("wall", el);
              }

              else if(labirint[i][j]===4){
                  createBlock("line", el);
              }

              else if(labirint[i][j]===1){
                  createBlock("entrance", el)
              }

              else{
                  createBlock("exit", el);
              }
        }
    }
}

function createBlock(nameOfClass, block){
 let div = document.createElement("div");
 div.classList.add(nameOfClass);
 block.appendChild(div);
 return div;
}


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let labWIDTH  = form.querySelector("#width").value;
    let labHEIGHTG = form.querySelector("#height").value;
    let arr = CreateLabirint(labWIDTH,labHEIGHTG);
    drawLabirint(arr);
},once="true");


