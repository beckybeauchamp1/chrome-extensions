document.getElementById("start").addEventListener("click", function(){
  chrome.tabs.executeScript({file: 'content.js'});
});

document.getElementById('off').addEventListener("click", function(){
  chrome.tabs.executeScript({code: "document.body.style.backgroundColor = 'white', document.getElementById('true').id = 'false'"});
});
