//button
var btn = document.getElementById("goBtn");
function buttonClick(){
    console.log("button clicked");
    document.getElementById("txt").innerHTML = 
    "Hello " + document.getElementsByClassName("btnInput")[0].value;

}

// list/arrays
var hobbies = ["pizza","gaming","music"];
console.log(hobbies.pop());
console.log(hobbies);
hobbies.forEach(function(item,index){
    console.log("I like", item);
})
btn.addEventListener("click",buttonClick);

//functions
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

//program to find missing number
array = [12,24,21,27,9,15,3,18];
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

//Classes
class animal{
    constructor(name, height, weight){
        console.log("created animal named",name);
        this.name=name;
        this.height=height;
        this.weight=weight;
    }
    nameLength(){
        return this.name.length;
    }

}

animal.planet="earth";
var dog = new animal("Fido",25,90);
var goldy = new animal("goldy",2,0.2);
console.log(dog.nameLength());
console.log(dog.constructor.planet); //to call class level variable

//class extending
class Dog extends animal{
    constructor(name,height,weight,barkVolume,leashColor,runSpeed){
        super(name, height, weight); //assigns values to the parent class constructor.
        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
        this.runSpeed = runSpeed;
    }
    bark(){
        if(this.barkVolume>50){
            console.log(this.name,"barks loudly (volume:",this.barkVolume,")");
        }
        else{
            console.log(this.name,"barks softly (volume:",this.barkVolume,")");
        }
    }
}

class Fish extends animal{
    constructor(name,height,weight,swimSpeed){
        super(name,height,weight);
        this.swimSpeed = swimSpeed;
    }
    swim(chaserSpeed){
        if(this.swimSpeed>50){
            console.log(this.name,"swims quickly. speed:",this.swimSpeed);
        }
        else{
            console.log(this.name,"swims slowly. speed:",this.swimSpeed);
        }
        
        if(this.swimSpeed>chaserSpeed){
            console.log(this.name,"survives");
        }
        else{
            console.log(this.name,"dies");
        }
    }
}

var king = new Dog("king",45,92,72,"red",52);
king.bark();
var sharky = new Fish("sharky",12,23,53);
sharky.swim(king.runSpeed);