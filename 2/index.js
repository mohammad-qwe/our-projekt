

var mainGrid = document.querySelector("main");
mainGrid.style.display = "grid";
mainGrid.style.justifyContent="center";

mainGrid.style.gridTemplateColumns = "25% 25% 25%";
mainGrid.style.gridGap = "20px";






document.body.style.fontFamily = ("Arial");
var h1 = document.querySelector("h1");
h1.style.textAlign = "center";
var category = document.getElementsByClassName("category");
function categoryEigenschaft(category) {
    for (i = 0; i < category.length; i++) {

        var randCalor;
        category[i].style.color = "red";
        category[i].style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

    }
}
categoryEigenschaft(category);
  var foodCategory = document.getElementsByClassName("food-category");
  function colorGenerator() {
      var a = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var c = Math.floor(Math.random() * 256);
      return "rgb(" + a + "," + b + "," + c + "," + 0.4 + ")"

  }

  foodCategory[0].style.background = colorGenerator();
  foodCategory[1].style.background = colorGenerator();
  foodCategory[2].style.background = colorGenerator();




  var warningStyle = document.getElementById("warning")
  warningStyle.style.fontSize = "30px";
  warningStyle.style.textAlign = "center"
  warningStyle.style.fontFamily = "cursive";



  var allergyInfo = document.querySelectorAll("section ul li")
  function even() {
      for (i = 0; i < allergyInfo.length; i++) {
allergyInfo[i].style.listStyleType="none"
          if (i % 2 != 0) {
              allergyInfo[i].style.background = "blue"
          }
      }
  }
  even()






  var footer = document.querySelector("footer")
  footer.style.display = "flex";
  footer.style.justifyContent = "center";
  function footerBorder() {
      var footerH = footer.getElementsByClassName("food-desc")
      for (i = 0; i <footerH.length; i++) {
          footerH[i].style.width = "60px";
          footerH[i].style.height = "60px";
          footerH[i].style.padding = "40px";
          footerH[i].style.margin = "30px";
          footerH[i].style.border = "5px solid orange";
          footerH[i].style.borderRadius = "50% 50%";
          footerH[i].style.display = "flex";
          footerH[i].style.justifyContent = "center";
      }
  }
  footerBorder()


 




 