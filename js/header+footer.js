document.addEventListener("DOMContentLoaded", function(e){
  const menu=document.getElementById("menu");
        menu.innerHTML=`<div id="navwrap">`
            +`<div class="navbar bodytext1">`
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
            +"</div>"
        +"</div>"
});
