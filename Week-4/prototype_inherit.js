var Person = function(){};
Person.prototype.intialize=function(name,age){
	this.name=name;
	this.age=age;
}
var Teacher = function(){};
Teacher.prototype.teach = function(subject){
  this.subject = subject;
}
Object.setPrototypeOf(Teacher.prototype, Person.prototype)
console.log(Person)
var him = new Teacher();
console.log(Object.getPrototypeOf(Teacher));
him.intialize();
him.teach("JS");
console.log(`${him.name} is teaching ${him.subject}`);