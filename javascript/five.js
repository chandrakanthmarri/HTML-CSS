function Dog(breed){
	this.breed = breed;
};


Dog.prototype.bark =function(){
	console.log("jbjbjbjbjh")
}

var buddy = new Dog("pug");
/*buddy.bark = function(){
	console.log("hhhhhhhhhh")
}*/
buddy.bark();


var snoopy = new Dog("lab");
snoopy.bark();