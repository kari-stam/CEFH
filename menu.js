let pages=[{
    href:"index.html",
    id: "homeButton"
}, {
  href:"about.html",
  text: "About"
}, {
  href:"people.html",
  text: "People"
},{
  href:"publications.html",
  text: "Publications"
},{
  href:"events.html",
  text: "Events"
},{
href: "news.html",
text: "News"
}

  ]
let menu=document.getElementById("menu");

for(i=0; i<pages.length; i++){
  root.innerHTML += `<a href=${pages[i].href}>${pages[i].text}</a>`;


}

root.innerHTML +=`${id="searchbox"}`
