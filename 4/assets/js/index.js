const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];


var ul = document.getElementsByTagName("ul")
ul[0].style.listStyleType = "none"
books.forEach(myfunction)



function myfunction(book) {
  var li = document.createElement("li")
  li.classList.add("book")
  ul[0].appendChild(li)
  var imgSm = document.createElement("img")
  imgSm.classList.add("card-img-top")
  var titilSm = document.createElement("h1")
  titilSm.style.fontSize = "15px"
  var authorSm = document.createElement("p")
  var bestätigungSm = document.createElement("button")
  var card = document.createElement("div")
  card.classList.add("card-body")
  imgSm.classList.add("book-cover")
  imgSm.src = book.img
  titilSm.textContent = book.title
  titilSm.classList.add("card-title")
  authorSm.textContent = book.author
  authorSm.classList.add("card-text")
  if (book.alreadyRead) {
    bestätigungSm.textContent = "Read";
    bestätigungSm.style.background = "green"
  }
  else {
    bestätigungSm.textContent = "To read"
    bestätigungSm.style.background = "red"
  }
  li.appendChild(imgSm)
  card.appendChild(titilSm)
  card.appendChild(authorSm)
  card.appendChild(bestätigungSm)
  li.appendChild(card)



}
