function changeColor(newColor) {
    const elem = document.getElementById("here");
    elem.style.color = newColor;
  }
function myFunction() {
    document.getElementById("here").innerHTML = "Paragraph changed.";
  }

myFunction();
changeColor(3);
let x = 5;
let y = 0;
while (x < 11){
    y = x + "<br>";
    x+=1;
}
document.getElementById("here").innerHTML = y;