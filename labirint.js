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

let arr = CreateLabirint(6,6);
console.log(arr);

function drawLabirint(labirint){
    for(let i = 0; i<labirint.length; i++){
        for(let j = 0; j<labirint[i].length; j++){
              if(labirint[i][j]===3){
                  createBlock("wall");
              }

              else if(labirint[i][j]===4){
                  createBlock("line");
              }

              else if(labirint[i][j]===1){
                  createBlock("entrance")
              }

              else{
                  createBlock("exit");
              }
        }
    }
}

function createBlock(nameOfClass){
 let div = document.createElement("div");
 div.classList.add(nameOfClass);
 document.body.appendChild(div);
}

drawLabirint(arr)




