function audi(){
    window.location="abcde.html";  
}
function Previous(){
    window.location="quiz.html";
}
var score2=Number(localStorage.getItem("score"));
function next(){
    ans=document.getElementById("T-cell").checked ;
    if(ans== true){
        score2+=1;
        console.log(score2);
        localStorage.setItem("score",score2);
    }
    window.location="Q3.html";
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