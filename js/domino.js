
let img=document.getElementById("teamgroups").querySelectorAll(".personbox");

function domino(){
  for (i=0; i<img.length; i++){
    delay=i * 0.1;
    img[i].style.animation="domino 0.8s " + delay + "s ease-in";
  }
}

domino();
