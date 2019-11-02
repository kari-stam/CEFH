
let uncheckedBoxes=["scientific","chapters","books","reports"];
let checkedBoxes=[];

function sortBoxes(){
  const checkboxes=document.getElementsByClassName("typeBox");
  uncheckedBoxes=["scientific","chapters","books","reports"];
  checkedBoxes=[];

  for (i=0; i<checkboxes.length; i++){
    let ident=checkboxes[i].id;
    console.log(i)
    if (checkboxes[i].checked==true){
      let index = uncheckedBoxes.indexOf(ident);
      if(index!== -1) uncheckedBoxes.splice(index, 1);
      checkedBoxes.push(ident);
    }
  }

  /*console.log(checkedBoxes);*/
}



function sortPublications(){
  console.log(uncheckedBoxes, "uncheckedBoxes");
  console.log(checkedBoxes, "checkedBoxes");
  /*document.getElementById("contentBox").querySelectorAll*/

  if (uncheckedBoxes.length==4){
    for (i=0; i<uncheckedBoxes.length; i++){
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
