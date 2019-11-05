
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
    img.style.display="none";
    for (i=0; i<img.length; i++){
      delay=i * 0.2;
      img[i].style.animation="domino 0.8s " + delay + "s ease-in";
    }
  }

function scrollposition(){
  let y= window.scrollY;
  return y;
}


document.addEventListener("scroll", function(e) {
    let y= window.scrollY;
    let x= 917; //position of pubBox
    console.log(y);
    if (y>=x) {
      domino();
      console.log(y);
      console.log("hei");
    }
});
