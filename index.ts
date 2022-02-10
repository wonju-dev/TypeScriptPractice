// string, number
const myString: string = 'hi';
const myNumber: number = 10;

// number array
const myNumberArray: Array<number> = [1, 2, 3, 4];
const myNumberArray2: number[] = [1, 2, 3, 4];

// string array
const myStringArray: Array<string> = ['a', 'b', 'c'];
const myStringArray2: string[] = ['a', 'b', 'c'];

// tuple : index마다 type이 지정된 특수한 배열
const myTuple: [string, number] = ['a', 1];

// object
const myObject: object = {
  name: 'wonju',
  age: 25,
};

// Object의 field에 더 구체적인 타입을 명시할 수 있음
const wonjuObj: { name: string; age: number } = {
  name: 'wonju',
  age: 25,
};

const myBoolean: boolean = true;

function log(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

log(1, 2); // No Error
log(1, 2, 3);
// log(1,2,3,4) : Error

let myAny: any = 10;
myAny = 's';

type Tstudent = {
  id: number;
  name: string;
};

const studentList: Tstudent[] = [];

const printStudentList = (): void => {
  studentList.forEach((student) => {
    console.log(student);
  });
};

const addStudent = (newStudent: Tstudent): void => {
  studentList.push(newStudent);
};

const getNewStudent = (id: number, name: string): Tstudent => {
  const newStudent: Tstudent = {
    id,
    name,
  };
  return newStudent;
};

const student1: Tstudent = getNewStudent(1, 'wonju');

addStudent(student1);
printStudentList();

interface biMathFunc {
  (a: number, b: number): number;
}

const sum: biMathFunc = (a: number, b: number) => a + b;
const multiply: biMathFunc = (a: number, b: number) => a * b;

sum(10, 20);
multiply(10, 20);

interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  major: string;
}

function unionFunc(s: Person | Developer) {
  console.log(s);
}
function intersactionFunc(s: Person & Developer) {
  console.log(s);
}

unionFunc({ name: '1', age: 1, major: '1' });
intersactionFunc({ name: '1', age: 1, major: '1' });
// intersactionFunc({ name: '1', age: 1 });

class MyClass {
  // ES6와 달리, Class의 필드를 먼저 선언해줘야 한다
  public name: string;

  public id: number;

  readonly CONST_NUMBER: number = 10;

  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }
}

const tmp: MyClass = new MyClass(1, '1', 1);
console.log(tmp.getAge());
