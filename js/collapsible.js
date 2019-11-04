/*js for dropwoen menus*/
var drop = document.getElementsByClassName("dropdown");

var i;

/*for (i=0; i < drop.length; i++){
    drop[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'none'){
            content.style.display = 'flex';
        }
        else{
            content.style.display = 'none';
        }
    });
}*/

for (i = 0; i < drop.length; i++) {
    var cont = document.getElementsByClassName('dropCont')[i].getElementsByClassName('newsArticle');
    console.log(cont);
    drop[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } 
        else {
            content.style.maxHeight = 250*cont.length + 'px';
        }
    });
  }