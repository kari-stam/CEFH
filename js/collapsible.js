/*js for dropdownen menus*/

/*Inspirert av: https://www.w3schools.com/howto/howto_js_collapsible.asp*/

var drop = document.getElementsByClassName("dropdown");

var i;

for (i = 0; i < drop.length; i++) {
    let dropCont=document.getElementsByClassName('dropCont');
    let cont = document.getElementsByClassName('dropCont')[i].getElementsByClassName('newsArticle');
    console.log(cont);
    drop[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            }
            else {
                content.style.maxHeight = 250*dropCont.length + 'px';
            }
    });
  }
