/*
*  Создать класс Human, у которого будут свойства обычного человека:
*    имя, возраст, пол, рост, вес.*/
function Human (name, age, sex, height, weight){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.height = height;
	this.weight = weight
};
/*  Используя прототипное наследование создать дочерние классы Worker
*  (дописать в них поля места работы, зарплатой, методом "работать")*/
function Worker (name, age, sex, height, weight,work, pay){
	 Human.apply(this, arguments);
	this.work = work;
	this.pay = pay;
	this.worker = function(){
		console.log('My name is ' + this.name );
	}
};

Worker.prototype = new Human();

var worker1 = new Worker('John', '18', 'male', '180', '75', 'Google', '11000$');
console.log('worker1', worker1);
var worker2  = new Worker ('Mary', 'female', '168', '53', 'Nike', '25000$');
console.log('worker2', worker2);
worker1.worker();
worker2.worker();

function Student (name, age, sex, height, weight, student, grant){
	Human.apply(this, arguments);
	this.student = student;
	this.grant = grant;
	};



Student.prototype = new Human ();

var student1  = new Student ('Pol','19', 'male', '195', '89', 'UCLA', '3000$');
console.log('student1', student1);
Student.prototype.series=function(series_name){
		var series_name = series_name;
		console.log('I like ' + series_name);
	};


student1.series("Sherlock");

var student2 =new Student ('Mike', '20', 'male', '187', '80', 'NYU', '3100$');
console.log('student2', student2);
student2.series('Suits');

Human.prototype.hoby=function(hoby_name){
	var hoby_name = hoby_name;
	console.log('I like ' + hoby_name);
};

var student3 = new Student('Nick', '22', 'male', '179', '75', 'UCLA', '1000$');
console.log('student3', student3);

student3.hoby('biatlon');

