

/*selects the elements that are going to be targeted*/
let elm=document.getElementById("onOneRow_rec").querySelectorAll(".pubBox");

/*sets the element to not displayed*/
document.addEventListener("DOMContentLoaded", function(e){
  for (i=0; i<elm.length; i++){
    elm[i].style.display="none"
  }
});

/*sets the element to displayed with animation*/
function domino(){
    for (i=0; i<elm.length; i++){
      delay=i * 0.2;
      elm[i].style.animation="domino 0.8s " + delay + "s ease-in";
      elm[i].style.display="inline-block"
    }
  }

/*finds the users position on the page*/
function scrollposition(){
  let y= window.scrollY;
  return y;
}

/*checking scrollposition on scroll, if scrollposition=elementposition the domino function is run */
document.addEventListener("scroll", function(e) {
    let y= window.scrollY;
    let x= 920; //position of pubBox
    console.log(y);
    if (y>=x) {
      domino();
      console.log(y);
      console.log("hei");
    }
});
