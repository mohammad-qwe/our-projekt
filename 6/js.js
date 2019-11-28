var input = document.getElementsByTagName("input")
var button = document.getElementsByTagName("button")
var p = document.getElementsByTagName("p")
var tag = new Date()
var tags = ["sonntag", "montag", "dienstag", "mittwoch", "donerstag", "freitag"]
function go() {
    p[0].textContent = "hallo " +input[0].value + "heute ist " + tags[tag.getDay()] + " noch " + (tags.length - (tag.getDay() - 1)) + "tage bis wochenende"



}