

var drop = document.getElementsByClassName("dropdown");

var i;


for (i = 0; i < drop.length; i++) {
    let dropCont=document.getElementsByClassName('monthEvents');
    let cont = document.getElementsByClassName('monthEvents')[i].getElementsByClassName('event');
    console.log(cont);
    drop[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            }
            else {
                content.style.maxHeight = 1000 + 'px';
            }
    });
  }
