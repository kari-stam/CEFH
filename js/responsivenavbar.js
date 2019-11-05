
//functions inspired by w3schools: https://www.w3schools.com/howto/howto_js_dropdown.asp
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
