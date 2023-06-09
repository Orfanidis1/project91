var player1_score = 0;
var player2_score = 0;
document.getElementById('player2_score').innerHTML = player2_score;
document.getElementById('player1_score').innerHTML = player1_score;
function loadUserNames(){
    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    document.getElementById("player1_name").innerHTML = player1_name;
    document.getElementById("player2_name").innerHTML = player2_name;
    
    document.getElementById("player_question").innerHTML = "question turn - "+player1_name;
    document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;
}

function send(){
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;

    document.getElementById("question_number1").innerHTML = number1;
    document.getElementById("question_number2").innerHTML = number2;
    document.getElementById("operation").innerHTML = "X";

    document.getElementById("number1").style.visibility = "hidden";
    document.getElementById("number2").style.visibility = "hidden";
    document.getElementById("check").style.visibility = "visible";
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("send").style.visibility = "hidden";
}
function check(){
if(document.getElementById('answer').value == document.getElementById('number1').value * document.getElementById('number2').value){
    if(document.getElementById("player_question").innerHTML == "question turn - "+player1_name){
    player2_score = player2_score + 1;
    document.getElementById('player2_score').innerHTML = player2_score;
    document.getElementById('player1_score').innerHTML = player1_score;
}
else if(document.getElementById("player_question").innerHTML == "question turn - "+player2_name){
    player1_score = player1_score + 1;
    document.getElementById('player2_score').innerHTML = player2_score;
    document.getElementById('player1_score').innerHTML = player1_score;
}
}
else{
    if(document.getElementById("player_question").innerHTML == "question turn - "+player1_name){
    player1_score = player1_score + 1;
    document.getElementById('player1_score').innerHTML = player1_score;
    document.getElementById('player2_score').innerHTML = player2_score;
    }
    else{
        player2_score = player2_score + 1;
    document.getElementById('player1_score').innerHTML = player1_score;
    document.getElementById('player2_score').innerHTML = player2_score;
    }
}
if(document.getElementById("player_question").innerHTML == "question turn - "+player1_name){
    document.getElementById("player_question").innerHTML = "question turn - "+player2_name;
    document.getElementById("player_answer").innerHTML = "answer turn - "+player1_name;
}
else{
    document.getElementById("player_question").innerHTML = "question turn - "+player1_name;
    document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;
}
document.getElementById("number1").style.visibility = "visible";
    document.getElementById("number2").style.visibility = "visible";
    document.getElementById("check").style.visibility = "hidden";
    document.getElementById("answer").style.visibility = "hidden";
    document.getElementById("question_number1").innerHTML = "";
    document.getElementById("question_number2").innerHTML = "";
    document.getElementById("operation").innerHTML = "";
    document.getElementById("send").style.visibility = "visible";
}