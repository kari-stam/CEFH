let checkedBoxes=[];
let uncheckedBoxes=[];

const checkboxes=document.getElementsByClassName("checkbox");

defineUnchecked();

for (var i=0; i<checkboxes.length; i++){
  let ide=checkboxes[i].id;
  document.getElementById(ide).addEventListener("click", main);
}

function main(){
  sortBoxes();
  sortPublications();
}


function defineUnchecked(){
  for (var i=0; i<checkboxes.length; i++){
    let ident=checkboxes[i].id;
    uncheckedBoxes.push(ident);
  }
}


function sortBoxes(){
  uncheckedBoxes=[];
    for (var i=0; i<checkboxes.length; i++){
      let ident=checkboxes[i].id;
      uncheckedBoxes.push(ident);
    }
  checkedBoxes=[];

  for (i=0; i<checkboxes.length; i++){
    let ident=checkboxes[i].id;
    if (checkboxes[i].checked==true){
      let index = uncheckedBoxes.indexOf(ident);
      if(index!== -1) uncheckedBoxes.splice(index, 1);
      checkedBoxes.push(ident);
    }
  }
}



function sortPublications(){
  console.log(uncheckedBoxes, "uncheckedBoxes");
  console.log(checkedBoxes, "checkedBoxes");

  if (uncheckedBoxes.length==4){
    for (var i=0; i<uncheckedBoxes.length; i++){
        let divs =document.getElementsByClassName(uncheckedBoxes[i]);
        for( div of divs){
          div.style.display = "";
        }
      }
    }
  else{
    for (i=0; i<uncheckedBoxes.length; i++){
        let divs =document.getElementsByClassName(uncheckedBoxes[i]);
        for( div of divs){
          div.style.display = "none";
        }
      }
    for (i=0; i<checkedBoxes.length; i++){
        let divsChecked =document.getElementsByClassName(checkedBoxes[i]);
        for( div of divsChecked){
          div.style.display = "";
        }
      }
    }
}
