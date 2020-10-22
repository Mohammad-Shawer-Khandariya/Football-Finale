let score = [0,1];
console.log(score);
var turn;
var team1 = {
    name:"Real Madrid FC ",
    runs:[],
    score:0
};
console.log("Team1");
var team2 = {
    name:"SD Huesca ",
    runs:[],
    score:0
};
console.log("Team2");
window.onload=()=>{
    selectTurn();//decide who strike first
    updateButtonText();//update the button
    updateScore();
    updateName();
};
selectTurn=()=>{
    console.log("select Turn Function");
    turn = Math.round(Math.random())+1;
    console.log(turn);
};
updateButtonText = ()=>{
    var button= document.getElementById("strike-button");
    console.log(button);
    button.textContent = `${turn===1?team1.name: team2.name}strike`
}
updateScore = () =>{
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
}
updateName = ()=>{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-1-name").textContent = team2.name;
}