alert("loaded: No errors")
var ai =[];
var fallback ="/";
var msg =["Hacking Server", "Loading Data", ":-- Loading"]
function Run(){
var rnd = Math.floor(Math.random()*5);
ai[0] = document.createElement('h5');
ai[0].setAttribute("innerHTML", msg[rnd]);
document.body.appendChild(ai[0]);


}
