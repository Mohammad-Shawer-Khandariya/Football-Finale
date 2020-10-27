var score = [0,1];
console.log(score);
var turn=0;
var team1 = {
    name:"Real Madrid ",
    runs:[],
    score:0
};
console.log(team1);
var team2 = {
    name:"SD Huesca ",
    runs:[],
    score:0
};
console.log("Team2");
var team3 = {
    name:" Manchester United ",
    runs:[],
    score:0
};
console.log("Team3");
var team4 = {
    name:" FC Barcelona ",
    runs:[],
    score:0
};
console.log("Team4");
window.onload=()=>{
    selectTurn();//decide who strike first
    updateButtonText();//update the button
    updateScore();
    updateName();
    tryAgain();
};
selectTurn=()=>{
    console.log("select Turn Function");
    firstMatchTurn = Math.round(Math.random())+1;
    secondMatchTurn = Math.round(Math.random())+3;
    console.log(turn);
};
updateButtonText = ()=>{
    var button1= document.getElementById("strike1-button");
    console.log(button1);
    var button2= document.getElementById("strike2-button");
    console.log(button2);
    button1.textContent = `${firstMatchTurn===1?team1.name: team2.name} shot`
    button2.textContent = `${secondMatchTurn===3?team3.name: team4.name} shot`
    console.log(team1.runs.length);
    if(team1.runs.length== 5 && team2.runs.length == 5 )
    {
        button.remove();
        result.textContent=team1.score===team2.score?`Match Draw`:`${team1.score > team1.score ? team1.name : team2.name } wins`
    }
    else
    {
        turn =turn ===1 ? 2 : 1;
    }
    button.textContent =`${turn%2 === 1 ? team1.name:team2.name} Shot`
};
updateScore = () =>{
    console.log(score);
    document.getElementById("team1-score").textContent = team1.score;
    document.getElementById("team2-score").textContent = team2.score;
    document.getElementById("team3-score").textContent = team3.score;
    document.getElementById("team4-score").textContent = team4.score;
    updateScore();
};
updateName = ()=>{
    document.getElementById("team1-name").textContent = team1.name;
    document.getElementById("team2-name").textContent = team2.name;
    document.getElementById("team3-name").textContent = team3.name;
    document.getElementById("team4-name").textContent = team4.name;
};
var handleStrikeButtonClick = ()=>{
    console.log("button click works")
    var runs = score[Math.floor(Math.random()*score.length)];
    console.log(runs);
    run= run === 0 ? 'F':run;
    console.log(run);
    if(turn==1)
    {
        team1.runs.push(run);
        team1.score =calculateScore(team1.runs);
    }
    else
    {
        team2.runs.push(run);
        team2.score =calculateScore(team2.runs);
    }
    updateButtonText();//update team name 
    updateScore();
};
var handleStrike2ButtonClick =()=>{

    console.log("Checking Button click");
    var run=score[Math.floor(Math.random()*score.length)];
    console.log(run);
    run= run === 0 ? 'F':run;
    console.log(run);
    if(turn==1)
    {
        team3.runs.push(run);
        team3.score =calculateScore(team3.runs);
    }
    else
    {
        team4.runs.push(run);
        team4.score =calculateScore(team4.runs);
    }
    updateButtonText();//update team name 
    updateScore();
};

var calculateScore =(run)=>{
    return run.map(run =>{
        return run == 'F'?0:run;
    }).reduce((total,run)=>total+run);
};
updateScore = ()=>
{
    var TeamOneGoalsElement = document.getElementById("team-1-round-shots").children;
    var TeamTwoGoalsElement = document.getElementById("team-2-round-shots").children;
    team1.goals.forEach((goal,index) => {
        goal === 1 ? TeamOneGoalsElement[index].style.backgroundColor ="Green" :TeamOneGoalsElement[index].style.backgroundColor ="rgba(255,0,0,1)";
        // TeamOneGoalsElement[index].textContent=goal;
    });
    team2.goals.forEach((goal,index) => {
        goal === 1 ? TeamTwoGoalsElement[index].style.backgroundColor ="Green" :TeamTwoGoalsElement[index].style.backgroundColor ="rgba(255,0,0,1)";
    });
};