

/* code inspired by :
http://jsfiddle.net/pGR3B/2/?fbclid=IwAR3tewzo8EzX8mdl8wvZi9LMbUCdSdNmvmABihNzWdwBYMJyN2sgxKovzqQ*/

const button = document.getElementById('right');
button.onclick = function () {
    const container = document.getElementById('slide-container');
    sideScroll(container,'right',25,100,10);
};

const back = document.getElementById('left');
back.onclick = function () {
    const container = document.getElementById('slide-container');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
