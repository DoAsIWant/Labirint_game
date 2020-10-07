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
     
    getPath(labirint,{x:0,y:0},{x:width-1, y:height-1,});
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
                  createBlock("entrance", el);
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


function getPath(labirint, entrance, exit){
    let coord = {
        x: entrance.x+1,
        y: entrance.y
    }

    while(coord.x!=exit.x-1 && coord.y!=exit.y-1){
        coord = nextStep(coord, labirint.length, labirint[0].length);
        if (coord.x !== entrance.x && coord.y !== entrance.y) {
            labirint[coord.x][coord.y] = 4
        }
    }
   
}




function nextStep(coord,size1, size2){

    let direction = getNumber();
    let newX = coord.x;
    let newY = coord.y;

    switch(direction){
        case 1: 
        newY++;
        break;

        case 2:
        newY--;
        break;
        
        case 3:
        newX++;
        break;

        case 4:
        newX--
        break;
    }
  

    if(newX>=0 && newX<size1 && newY>=0 && newY<size2){
        return {x: newX, y: newY};
    }

    return coord;
}