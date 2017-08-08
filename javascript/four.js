function add(a,b){
	return a+b
}

add(1,2)
3


function allow(a){
	if(a=="satya"){
		console.log("allow acces")
	}
	else if(a == "aakash"){
		console.log("do not allow acces")
	}
	else{
		console.log("i dont know")
	}
}

allow("satya")
allow acces
undefined
allow("satymdshja")
i dont know
undefined
allow("aakash")
do not allow acces



var allow = function(a){
	if(a=="satya"){
		console.log("allow acces")
	}
	else if(a == "aakash"){
		console.log("do not allow acces")
	}
	else{
		console.log("i dont know")
	}
}

literl
construtor
object.create


var animal = {
	name:"dog",
	color:"black"
}


animal.name
"dog"
animal.color
"black"
animal["name"]
"dog"
animal["color"]
"black"
nimal
Object {name: "dog", color: "black", legs: 4}
delete animal.color
true
animal
Object {name: "dog", legs: 4}




var toy = new Object()
toy.color="red";
toy.brand="hot wheels"

Object {color: "red", brand: "hot wheels"}
toy.color
"red"
toy["brand"]
"hot wheels"


var bob = new Object();
bob.age =10;
bob.setage = function(newAge){
	bob.age = newAge
}


bob
Object {age: 10, setage: function}
bob.age
10
bob.setage(17)
undefined
bob.age;


var setage =function(newAge){
	this.age = newAge
}

var tony = new Object();
tony.age = 10;
tony.setage =setage

var react = new Object();
react.age = 12;
react.setage = setage


































