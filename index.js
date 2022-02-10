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
console.log(myAny);
myAny = 's';
console.log(myAny);
