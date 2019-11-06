

let drop = document.getElementsByClassName("dropdown");
let dropCont=document.getElementsByClassName("monthEvents");


let i;

for (i=0, i < drop.length; i++) {
  let cont = document.getElementsByClassName("monthEvents")[i].getElementsByClassName("Event");


  drop[i].addEventListener("click,", function() {
    this.classList.toggle("active");
    let content=this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight=null;
    }
    else {
      content.style.maxHeight=250*dropCont.length + "px";
    }
  }



}

var j;
for (j=0, j < dropCont.length; j++) {
  let pixels+=dropCont[i].height;

}
