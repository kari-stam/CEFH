/*js for dropwoen menus*/
var drop = document.getElementsByClassName("dropdown");

var i;

for (i=0; i < drop.length; i++){
    drop[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'flex'){
            content.style.display = 'none';
        }
        else{
            content.style.display = 'flex';
        }
    });
}