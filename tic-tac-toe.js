// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"
var runSquare = 0
function butterfly(){
  if(runSquare == 0)
  if(turn == "player1")
  var circle = document.createElementNS(namespace ,"circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cy" , 65)
  circle.setAttribute("cx" , 50)
  circle.setAttribute("r" , 30)
  circle.setAttribute("fill","darkblue")
canvas.appendChild(circle)
turn="player2"
runSquare = 1
}else{
