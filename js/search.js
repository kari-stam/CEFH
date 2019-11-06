/*JacaScript for console logging a search and reseting the search field*/

function checkSrc(){
  let search=document.getElementById("srcText").value;
  console.log("Du søkte etter: "+search);
  document.getElementById("srcText").value="";
}
