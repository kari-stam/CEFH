

let drop = document.getElementsByClassName("dropdown");


let i;

for (i=0; i < drop.length; i++){
  let dropCont=document.getElementsByClassName("monthEvents");
  let cont = document.getElementsByClassName("monthEvents")[i].getElementsByClassName("event");

  /*let j;
  for (j=0, j < dropCont.length; j++) {
    let pixels+=dropCont[j].scrollHeight;
  }*/

  console.log(cont);

  drop[i].addEventListener("click,", function(){
    this.classList.toggle("active");
    let content=this.nextElementSibling;
      if (content.style.maxHeight){
          content.style.maxHeight=null;
    }
    else {
      content.style.maxHeight=250*dropCont.length + "px";
    }
  });
}
