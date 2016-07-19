var color = ["red", "green", "blue"];
var current = 0;
var hiddenP = document.createElement('p')
hiddenP.style.visibility = "hidden";
hiddenP.id = "true";
document.body.appendChild(hiddenP)


changeColor();

function changeColor(){
  setInterval(setColor, 20000);
}


function setColor(){
  if(document.getElementById('true')){
    document.body.style.backgroundColor = color[current];
    if(current < 2){
      current++;
    }
    else if(current === 2){
      current = 0;
    }
  }
}
