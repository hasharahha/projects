alert("loaded: No errors")
var ai =[];
var fallback ="/";

function Run(){
ai[0] = document.createElement('h2');
ai[0].setAttribute("style", "color: blue;");
ai[1] = document.createElement('input');
ai[1].setAttribute("style", "width: 500px; height: 100px; font-size: 80px; color: white; background-color: black;");
ai[1].setAttribute("id", "commandprompt");
ai[2] = document.createElement('button');
ai[2].setAttribute("innerHTML", "Call command");
ai[2].setAttribute("onclick", "Call()");
ai[2].setAttribute("type", "button")
document.body.appendChild(ai[0]);
document.body.appendChild(ai[1]);
document.body.appendChild(ai[2]);
}
