/*JacaScript for hiding and shoving content based on a list of checkboxes*/

let checkedBoxes=[];
let uncheckedBoxes=[];

/*Retrieveing a list of divs with checkboxes from the html*/
const checkboxes=document.getElementsByClassName("checkbox");

/*Running function that defines all boxes as unchecked from the start*/
defineUnchecked();

/*Running the main function if a checkbox is clicked*/
for (var i=0; i<checkboxes.length; i++){
  let ide=checkboxes[i].id;
  document.getElementById(ide).addEventListener("click", main);
}

/*Main function containing fuctions for checking if boxes are checked and showing content based on that*/
function main(){
  sortBoxes();
  sortPublications();
}

/*Function that defines all boxes as unchecked*/
function defineUnchecked(){
  for (var i=0; i<checkboxes.length; i++){
    let ident=checkboxes[i].id;
    uncheckedBoxes.push(ident);
  }
}

/*Function that updates two separate lists with the IDs of unchecked and checked boxes*/
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

/*Function that shows and hides contant corresponing to the checked and unchecked boxes*/
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
