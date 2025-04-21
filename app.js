function btn(){
    var user_data = document.getElementById("data");
    var box_serach = document.getElementById("search");
    box_serach.classList.toggle("oppo");
    user_data.classList.toggle("oppo");

}

let call_btn = document.getElementById("add");


call_btn.addEventListener("click",function(e){
e.preventDefault();


var use_data = document.getElementById("data");
let div_box = document.createElement("div");
var low_box = document.createElement("p");
var del_button = document.createElement("button");
let edit_bnt = document.createElement("button");
edit_bnt.innerHTML = "edit";

del_button.innerHTML = "delete";
const contanier = document.getElementById("contanier");
low_box.innerHTML = use_data.value;
del_button.setAttribute("id","del");
edit_bnt.setAttribute("id","edit");

div_box.appendChild(low_box);
div_box.appendChild(del_button);
div_box.appendChild(edit_bnt);

use_data.value = "";

div_box.style.background = "radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)";
div_box.style.width = "200px";
div_box.style.height = "200px";
div_box.style.position = "relative";
div_box.style.top = "200px";
div_box.style.display = "inline-flex";
div_box.style.zIndex = "-2";
div_box.style.margin = "5px 10px";
div_box.style.overflow = "hidden"
// div_box.style.width = "200px";
del_button.style.width= "60px";
del_button.style.backgroundColor= "tan";
del_button.style.padding= "2px 10px";
del_button.style.position= "relative";
del_button.style.top= "80px";
del_button.style.left= "-10px";
edit_bnt.style.background = "tan";
edit_bnt.style.width = "60px";
edit_bnt.style.padding = "2px 10px";
edit_bnt.style.position = "relative";
edit_bnt.style.top = "80px";
edit_bnt.style.left = "-10px";



if(use_data.value == " "){
div_box.remove();
}







contanier.insertAdjacentElement("afterbegin",div_box);
del_button.addEventListener("click",function(){
    div_box.remove();
})


edit_bnt.addEventListener("click",function(){
    var now = prompt("enter the data");
    div_box.innerHTML = now;
    div_box.appendChild(del_button);
})

});