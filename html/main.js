var btn = document.getElementById("goBtn");
function buttonClick(){
    alert("button clicked");
    btn.removeEventListener("click",buttonClick);
    document.getElementById("txt").innerHTML="don't do it";
}

var hobbies = ["pizza","gaming","music"];
console.log(hobbies.pop());
console.log(hobbies);
hobbies.forEach(function(item,index){
    console.log("I like", item);
})
btn.addEventListener("click",buttonClick);
