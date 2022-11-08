
const fun = (name: string) => {

}

const isBoolean: boolean = true;
const isNum: number = 10;
const isBinary: number = 0b1111;
const isStr: string = 'nate';


// null和undefined在非严格模式下 是所有类型的子类型
const isNull: null = null;
const isUndefined: undefined = undefined;

const num: number = 1;

// 避免使用any
let anyVal: any = 0;
anyVal = '1';
anyVal = true;
anyVal.val;
// anyVal.getVal();

// uni
const uVal: number | string = '22'

// array
const arrNum: number[] = [1, 2, 3];
const arrNum1: string[] = ['1', '2', '3'];
const arrNum2: Array<number> = [11];
arrNum.push(2)

// tuple
const user: [string, number] = ['2', 4];


// arrayLike
function arrayLike() {
  console.log(arguments);
}

// void
function arrayLikeVoid(): void {
  console.log(arguments);
}


type fnType = (a: number, b: string) => void;
const foo: fnType = (a: number, b: string) => {
  
}


// interface
// 1. object shape description
// 2. abstract class
// 3. duck Typing

interface Person {
  name: string;
  age: number;
  hobby?: string;
  readonly id: number;
}

const nate: Person = {
  id: 1,
  name: 'wang',
  age: 19,
} 


// function assert

const bar = (name: string, age: number, sex?: number): string => {
  return `${name}and${age}`
}