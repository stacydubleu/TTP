//06/06/2016
//Write a method that lists the properties of a JavaScript object literal. (Hint: loops!)
var obj ={
	name:"thing", //instance , not ;
	number: 1,
	action:"do nothing"
}

for(var x in obj){
	console.log(x);
}

/**Create an object called Multiplier with two methods: multiply and getCurrentValue. 
multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. 
getCurrentValue should return the last answer returned from multiply.
*/

function Multiplier(){
	var num=1;
	this.multiply = function (number){
		num=num*number;
		console.log(num);
	}

	this.getCurrentValue = function() {
		console.log(num);
	}
}

m = new Multiplier();
m.multiply(5);
m.multiply(6);
m.getCurrentValue();

/*Implement an object model that allows you to store strings that represent a Photo. 
Your model should include an Album object that can contain many Photo objects in its photos attribute. 
Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
Each Photo should tell you the photo's file name and the location the photo was taken in. 
Create instances of each object defined to prove that your object model works.
*/

function Photo(name, location){
	this.filename=name;
	this.location=location;
}

function Album(){
	var album = [];

	this.addPhoto= function (Photo){
		album.push(Photo);
	}

	this.listAlbum= function(){
		for(i=0;i<album.length;i++){
			console.log(album[i]);
		}
	}

	this.getPhoto= function(num){
		var i=num;
		if(album.length>i&&!(i<0)){
			console.log(album[i]);
		}
		else{
			console.log("not in album. number too big.")
		}
	}
}

A= new Album();
P1= new Photo("flowers", "desktop");
P2= new Photo("mountains", "desktop");
P3= new Photo("grass", "desktop");
A.addPhoto(P1);
A.addPhoto(P2);
A.addPhoto(P3);
A.listAlbum();
A.getPhoto(1);
A.getPhoto(3);

/*Create a prototypical Person object. 
From this object, extend a Teacher object and a Student object. 
Each of these objects should have attributes and methods pertinent to what they describe. 
Also create a School object that should be able to store instances of students and teachers. 
Make sure to write code afterwards that creates instances of these objects to make sure that 
what you've written works well and you're able to store the necessary data in each object.
*/

function School(){
	var School = [];

	this.add = function(Person){
		School.push(Person);
	}

	this.list= function(){
		for(i=0;i<School.length;i++){
			console.log(School[i]);
		}
	}
}

function Person(name){
	this.name=name;
}

Person.prototype.Student = function(){
	this.type="Student";
}

Person.prototype.Teacher = function(){
	this.type="Teacher";
}

S= new School();
Student1= new Student("Bob");
Student2= new Student("Sam");
Teacher1= new Teacher("Ms. Poppins");
S.add(Student1);
S.add(Student2);
S.add(Teacher1);
S.list();











