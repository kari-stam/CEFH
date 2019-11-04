document.addEventListener("DOMContentLoaded", function(e){
  const menu=document.getElementById("menu");
        menu.innerHTML=`<div id="navwrap">`
            +`<div class="topnav bodytext1" id="navbar">`
                +`<a href="index.html" id="homeButton"></a>`
                +`<a href="about.html">About</a>`
                +`<a href="people.html">People</a>`
                +`<a href="publications.html">Publications</a>`
                +`<a href="events.html">Events</a>`
                +`<a href="news.html">News</a>`
                +`<div id="searchBox">`
                  +`<input type="text" placeholder="Search.." id="searchText">`
                  +`<input type="submit" value="" id="searchButton">`
                +"</div>"
              + `<a href="javascript:void(0);" class="icon" onclick="dropdown()">
                <i class="fa fa-bars"></i>
              </a>` /*dropdown inspired from w3schools: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
            +"</div>"
        +"</div>"
});


function dropdown() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
  console.log(x);
}
