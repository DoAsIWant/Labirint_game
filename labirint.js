
import CreateLabirint from "./create"
import drawLabirint  from "./draw"

let form = document.querySelector(".run");
let btn = document.querySelector(".btn");

let panel = document.querySelector(".panel");
let btnUp = panel.querySelector(".up");
let btnDown = panel.querySelector(".down");
let btnLeft = panel.querySelector(".left");
let btnRight = panel.querySelector(".right");
let run = document.querySelector(".pers");


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let labWIDTH  = form.querySelector("#width").value;
    let labHEIGHTG = form.querySelector("#height").value;
    let arr = CreateLabirint(labWIDTH,labHEIGHTG);
    drawLabirint(arr);
},once="true");


