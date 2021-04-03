function audi(){
    window.location="abcde.html";  
}
function Previous(){
    window.location="quiz.html";
}
var score3=Number(localStorage.getItem("score"));
function next(){
    ans=document.getElementById("NeitherAnorB").checked;
    if(ans== true){
        score3+=1;
        console.log(score3);
        localStorage.setItem("score",score3);
    }
    window.location="quizsubmite.html";
}
function logout(){
    window.location="index.html";
}
function home(){
    window.location="home.html";
}
function booth(){
    window.location="booth.html";

}function abstract(){
    window.location="abstarct.html";

}
function agenda(){
    window.location="agenda.html"
}
