/*function dominoeffect(){
  for (let i=0; i<images.length; i++);
    image[i]=document.getElementByClassName("img")
  i=(images.length-1);
}

let img=document.getElementById("teamgroups").querySelectorAll(".personbox");
let start=Date.now();


function domino(){
  timepassed= Date.now()-start;
  if (timePassed >=1500){
    clearIntervall
  }
  for (let i=0; i<img.length; i=img.length){
    img[i]=
  }
}*/

//the function appeaer() is taken from stackOverflow :https://stackoverflow.com/questions/2207586/how-do-you-make-something-to-appear-slowly-on-a-page-using-javascript
function appear(elm, i, step, speed){
    var t_o;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50;

    t_o = setInterval(function(){
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step;
        if(opacity > 1 || opacity < 0){
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return;
        }
        //modern browsers
        elm.style.opacity = opacity;
    }, speed);
}


var img=document.getElementById("teamgroups").querySelectorAll(".personbox");

function domino(){
  for (i=0; i<img.lenght; i++);
  appear(img[i], 0, 5, 40);
}

setTimeout(function() {
    domino();{
    }
  }, 6000);
