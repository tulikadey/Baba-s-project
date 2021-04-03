function audi(){
    window.location="abcde.html";  
}
function Previous(){
    window.location="quiz.html";
}
var score1=0;
function next(){
    ans=document.getElementById("monkeys").checked;
    if(ans== true){
        score1+=1;
        console.log(score1);
        localStorage.setItem("score",score1);
    }
    window.location="Q2.html";
}
function logout(){
    window.location="index.html";
}
function home(){
    window.location="home.html";
}
function booth(){
    window.location="booth.html";

}
function abstract(){
    window.location="abstarct.html";

}
function agenda(){
    window.location="agenda.html"
}