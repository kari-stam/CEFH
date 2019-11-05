// header and footer inspired from: https://github.com/aslakhol/saftogsuse/blob/master/scripts/add_header_footer.js

document.addEventListener("DOMContentLoaded", function(e){
  const menu=document.getElementById("menu");
        menu.innerHTML='<div id="navwrap">'
            +'<div class="navbar bodytext1">'
              +'<a href="index.html" id="homeButton"></a>'
              +'<a href="about.html">About</a>'
              +'<a href="people.html">People</a>'
              +'<a href="publications.html">Publications</a>'
              +'<a href="events.html">Events</a>'
              +'<a href="news.html">News</a>'
              +'<div id="searchBox">'
                +'<input type="text" placeholder="Search.." id="searchText">'
                +'<input type="submit" value="" id="searchButton">'
              +"</div>"
              + '<button class="navbar-toggle" onclick="dropdown()">'
                  +'<img src="img/hamburger.svg" alt="hamburger menu">'
              +'</button>'
              +'<div class="dropdownmenu">'
                +'<ul>'
                  +'<li><a href="about.html">About</a></li>'
                  +'<li><a href="people.html">People</a></li>'
                  +'<li><a href="publications.html">Publications</a></li>'
                  +'<li><a href="events.html">Events</a></li>'
                  +'<li><a href="news.html">News</a></li>'
                +'</ul>'
                +'</div>'
            +"</div>"
        +"</div>"
  const footer=document.getElementById("footer");
        footer.innerHTML='<div id="footwrap">'
        +'<img id="footerImg" src="./img/Logo_text.png"></img>'
        +'<div id="contactText">'
          +'<h3 class="footerH">Postal adress</h3>'
          +'<p class="footerP">Norwegian Institute of Public Health</p>'
          +'<p class="footerP">Centre for Fertility and Health</p>'
          +'<p class="footerP">P.O. box 222 Skøyen</p>'
          +'<p class="footerP">N-0213 Oslo, Norway</p>'
          +'<br>'
          +'<h3 class="footerH">Visiting adress</h3>'
          +'<p class="footerP">Norwegian Institute of Public Health</p>'
          +'<p class="footerP">Centre for Fertility and Health</p>'
          +'<p class="footerP">Marcus Thranes gate 2, Oslo</p>'
        +'</div> '
});



// functions inspired by w3schools: https://www.w3schools.com/howto/howto_js_dropdown.asp
//functions for the dropdown menu

/*when you click the button the dropdownmenu is added the class shown (styling in css)*/
function dropdown(){
  document.querySelector(".dropdownmenu").classList.toggle("show");
}

/*when you click on the page->
        if you click on the hamburgerbutton it checks if the dropdown contains class shown or not, and toggles thereafter*/
window.onclick = function(event) {
  if (!event.target.matches('.navbar-toggle')) {
    const dropdown = document.querySelector(".dropdownmenu");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
