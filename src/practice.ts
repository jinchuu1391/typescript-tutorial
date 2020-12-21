// message 변수의 타입은 문자열, 할당하고자 하는 값은 'hello world"다.
const message: string = 'hello world';
console.log(message)

let count = 0;
count += 1;
// count = '갑자기 분위기 문자열' -> 이러면 에러남!

// 변수 done의 타입은 불린으로 할 것이고, true를 할당하겠다.
const done: boolean = true;

const numbers: number[] = [1,2,3];
const messages: string[] = ['hello', 'world']

// 변수 mightBeUndefined의 타입은 문자열 또는 undefined로 할 것이고 지금은 undefined를 할당하겠다.
let mightBeUndefined: string | undefined = undefined;
let nullableNubmer: number | null = null;
let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
console.log(color)

function sum(x: number, y: number): number {
    return x + y;
}
sum(1,3)

// 함수의 매개변수로 들어올 값의 타입을 정해둘 수 있다. number[] -> 숫자로 이루어진 숫자 배열
// 함수의 반환값에 대한 타입도 설정 가능 (number)
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

sumArray([1,2,3])

// 아무것도 반환하지 않는 함수의 경우 타입으로 void를 설정
function returnNothing(): void {
    console.log('I am just saying hello world');
}
returnNothing()

// interface -> 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법
interface Shape {
    getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자 타입 이다.
}

class Circle implements Shape {
    radius:number
    constructor(radius: number){
        this.radius = radius;
    }
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(public width: number, private height: number){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const shpaes: Shape[] = [new Circle(5), new Rectangle(10,5)]

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(rectangle.width)

interface Person {
    name: string;
    age?: number; // 물음표 -> 설정을 해도 되고 안해도 되는 값이라는 뜻
}

interface Developer extends Person { // extends 키워드를 이용해 Person의 변수를 상속 받을 수 있다
    skills: string[];
}

const person: Person = {
    name: '진수',
    age: 30
}

const expert:Developer = {
    name: '종훈',
    skills:['javascript', 'react']
}

// const people: Person[] = [person, expert]

// type 키워드 -> 특정 타입에 별칭을 붙이는 용도로 사용할 수 있다.
type People = Person[];
const people:People = [person, expert]

// type 키워드로 객체를 위한 타입을 설정할 수도 있다.
type Pet = 'dog' | 'cat' | 'bird';
const pet: Pet = 'dog';
const pets: Pet[] = ['dog', 'cat']

// 클래스와 관련된 타입의 경우엔 interface를 사용하는게 좋고, 일반 객체 타입의 경우엔 그냥 type을 써도 좋다.
// 객체를 위한 타입을 정의할 때 무엇을 써도 상관 없으나 일관성 있게 쓰는게 좋음.