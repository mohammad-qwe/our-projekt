var div = document.getElementById("select")
var list = document.querySelector(".list-group1")
var lists = document.querySelectorAll(".list-group1 button")
var qwe = document.getElementById("classtoggle")
function toggleAlles(){
if(qwe.textContent=="show distinations"
){
    list.classList.toggle("list-group-hiden")
    qwe.textContent="hide distinations"
}
else{
    list.classList.toggle("list-group-hiden")
    qwe.textContent="show distinations"
}
}
for (i = 0; i < lists.length; i++) {
    lists[i].addEventListener("mouseover", function (event) {

        div.textContent = event.target.textContent
    })
}
