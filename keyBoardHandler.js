import {drawLabirint} from "./draw.js"

export function setKeyBoardHandler(mass,user){
    document.body.addEventListener("keydown",(e)=>{keyDown(e,mass,user)});    
}

function keyDown(e,mass,user){
    switch(e.key){
        case "ArrowUp":
            user.up();
            break;
        case "ArrowDown":
           user.down();
            break;
        case "ArrowLeft":
            user.left();
            break;
        case "ArrowRight":
            user.right();
            break;
        
    }

    drawLabirint(mass,user)
}