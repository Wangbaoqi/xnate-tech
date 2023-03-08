
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

// union type
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
  eat: function (): void {
    throw new Error("Function not implemented.");
  },
  speak: function (): void {
    throw new Error("Function not implemented.");
  }
} 


// function assert

const bar = (name: string, age: number, sex?: number): string => {
  return `${name}and${age}`
}


// different Type and Interface
// 1. Interface has extends function 

interface Dog extends Person { }

type Cate = {}

// 2. add new fields to an existing interface

interface Window {
  title: string;
}

interface Window {
  target: string;
}

// type Person = {}; // Duplicate Identifier 'Person'



// # Type Assertions 
// Sometimes you will have information about the type of a value that 
// TypeScript can’t know about.

// like a type annotation, type assertions are removed by the compiler 
// and won't affect the runtime behavior of you code

// * reminder type assertions are removed at compile-time, there is no
// * runtime checking associated with a type assertion. there won't be
// * an exception or null generated if the type assertion is wrong.
const html = document.getElementById('person') as HTMLElement;
// or
const html1 = <HTMLElement>document.getElementById('person');

// ! typeScript only allow type assertions which convert to a more specific
// ! or less specific version of a type.
// ! like 
// const numA = 'hello' as number; // wrong

// * sometimes need two type assertions
const op = '';
const aa = (op as any) as Teacher;





