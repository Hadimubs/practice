score=0;
function Update(){
score=score+1;
document.getElementById("s").innerHTML="Score: "+score;
}
function Save(){
localStorage.setItem("sc",score);
}
function next(){
window.location="activity_2.html";
}