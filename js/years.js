let years = document.getElementsByClassName('yearsInner');
let g;

for (i=0; g < years.length; i++){
    let year=document.getElementsByClassName('year');
    years[g].addEventListener('click', function(){
        this.classList.toggle('active');
        if (year[g].style.display === 'none'){
            content.style.display = 'flex';
        }
        else{
            content.style.display = 'none';
        }
    });
}