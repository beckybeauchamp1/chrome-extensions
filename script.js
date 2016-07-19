var run = true;

document.getElementById("start").addEventListener("click", function(){
  // run = true;
  changeColor();
});


function changeColor(){
  setColor();
}

function creator(){
  alert('test');
  console.log('test');
  var color = ["red", "green", "blue"];
  var current = 0;
  return function(){
    chrome.tabs.executeScript({
      code: "document.body.style.backgroundColor = 'blue'"
    });
    if(current < 2){
      current++;
    }
    else if(current === 2){
      current = 0;
    }
  }
}

var setColor = creator()
