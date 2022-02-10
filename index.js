// string, number
var myString = 'hi';
var myNumber = 10;
// number array
var myNumberArray = [1, 2, 3, 4];
var myNumberArray2 = [1, 2, 3, 4];
// string array
var myStringArray = ['a', 'b', 'c'];
var myStringArray2 = ['a', 'b', 'c'];
// tuple : index마다 type이 지정된 특수한 배열
var myTuple = ['a', 1];
// object
var myObject = {
    name: 'wonju',
    age: 25
};
// Object의 field에 더 구체적인 타입을 명시할 수 있음
var wonjuObj = {
    name: 'wonju',
    age: 25
};
var myBoolean = true;
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
log(1, 2); // No Error
log(1, 2, 3);
// log(1,2,3,4) : Error
var myAny = 10;
myAny = 's';
var studentList = [];
var printStudentList = function () {
    studentList.forEach(function (student) {
        console.log(student);
    });
};
var addStudent = function (newStudent) {
    studentList.push(newStudent);
};
var getNewStudent = function (id, name) {
    var newStudent = {
        id: id,
        name: name
    };
    return newStudent;
};
var student1 = getNewStudent(1, 'wonju');
addStudent(student1);
printStudentList();
var sum = function (a, b) { return a + b; };
var multiply = function (a, b) { return a * b; };
sum(10, 20);
multiply(10, 20);
function unionFunc(s) {
    console.log(s);
}
function intersactionFunc(s) {
    console.log(s);
}
unionFunc({ name: '1', age: 1, major: '1' });
intersactionFunc({ name: '1', age: 1, major: '1' });
// intersactionFunc({ name: '1', age: 1 });
var MyClass = /** @class */ (function () {
    function MyClass(id, name, age) {
        this.CONST_NUMBER = 10;
        this.id = id;
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.getAge = function () {
        return this.age;
    };
    return MyClass;
}());
var tmp = new MyClass(1, '1', 1);
console.log(tmp.CONST_NUMBER);
console.log(tmp.name);
console.log(tmp.id);
console.log(tmp.getAge());
