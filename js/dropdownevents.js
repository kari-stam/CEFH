

var drop = document.getElementsByClassName("dropdown"); /*button for months*/

var i;


for (i = 0; i < drop.length; i++) { /*goes through all month buttons*/
    let dropCont=document.getElementsByClassName('monthEvents'); /*All the events inside one month*/
    let cont = document.getElementsByClassName('monthEvents')[i].getElementsByClassName('event');
    console.log(cont);
    drop[i].addEventListener("click", function() { /*when clicking on button, this function will run*/
        this.classList.toggle("active"); /*sets status to active, so it can be used in the css*/
        let content = this.nextElementSibling; /*all events*/
            if (content.style.maxHeight){ /*if all the events are there*/
                content.style.maxHeight = null; /*hides events inside month*/
            }
            else {
                content.style.maxHeight = 1500 + 'px';  /*shows all events inside a month, inside a 1000px height*/
            }
    });
  }

/*code from https://www.w3schools.com/howto/howto_js_collapsible.asp?fbclid=IwAR0PpRrk6AKFkLJitL2LQhvuPhzkZyBWvSHzg-6WB7PR6y6cnYTC0OKwIyM*/
