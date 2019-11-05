
/*let img=document.getElementById("teamgroups").querySelectorAll(".personbox");

function domino(){
  for (i=0; i<img.length; i++){
    delay=i * 0.1;
    img[i].style.animation="domino 0.8s " + delay + "s ease-in";
  }
}

domino();*/


let img=document.getElementById("onOneRow_rec").querySelectorAll(".pubBox");

function domino(){
  if (y=917) {
    for (i=0; i<img.length; i++){
      delay=i * 0.2;
      img[i].style.animation="domino 0.8s " + delay + "s ease-in";
    }
  }
}

document.addEventListener("DOMContentLoaded", function(e) {
  //let y= window.pageYOffset;
  let y= window.scrollY;
  let x= 917; //position of pubBox
  console.log(y);
  if (y==x) {
    domino();
  }
});
