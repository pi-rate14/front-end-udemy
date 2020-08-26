var btn = document.getElementById("goBtn");
function buttonClick(){
    console.log("button clicked");
    document.getElementById("txt").innerHTML = 
    "Hello " + document.getElementsByClassName("btnInput")[0].value;

}

var hobbies = ["pizza","gaming","music"];
console.log(hobbies.pop());
console.log(hobbies);
hobbies.forEach(function(item,index){
    console.log("I like", item);
})
btn.addEventListener("click",buttonClick);

function getPhrase(params)
{
    var l = 0;
    if(typeof params.phrase !== "undefined")
    {
        l = params.phrase.length;
    }
    if (typeof params.another !== "undefined")
    {
        l+=params.another.length;
    }
    return l;
}

var p1 = "My name is";
var p2 = "Apoorva Srivastava";

var computed = getPhrase({phrase:p1, another:p2});
console.log(computed);

array = [12,24,27,9,15,3,18];
function sortArray(array){
    var l = array.length;
    for(var i=0;i<l;i++)
    {
        for(var j=0;j<l-1;j++)
        {
            if(array[j]>array[j+1])
            {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
function findMissing(array){
    var l = array.length;
    for(var i=0;i<l-1;i++){
        if(array[i]+3!==array[i+1]){
            return "missing number is ", array[i]+3;
        }
    }
}
console.log(findMissing(sortArray(array)));