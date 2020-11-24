
import CreateLabirint from "../create.js"
import {drawLabirint}  from "../draw.js"
import {User} from "../user.js"
import {setKeyBoardHandler} from "../keyBoardHandler.js"

let form = document.querySelector(".run");
let btn = document.querySelector(".btn");



btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let labWIDTH  = form.querySelector("#width").value;
    let labHEIGHTG = form.querySelector("#height").value;
    let arr = CreateLabirint(labWIDTH,labHEIGHTG);
    let user = new User(1,1,arr);
    drawLabirint(arr,user);
    setKeyBoardHandler(arr,user);

});


