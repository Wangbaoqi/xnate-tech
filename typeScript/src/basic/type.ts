
// # Everyday Types 常见类型

// number
// string
// boolean



const fun = (name: string) => {}

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

// # Liter Types
let str: string = '';

// ## Literal Inference
// * when you initialize a variable with a object, TS assumes that the properties of that object
// * might change values later

// * if meet this issue, you can resolve this use two ways:
// ** 1. you can change the inference by adding a type assertion in either location
// ** 2. you can use 'as const' to convert the entire object to be type literals

const req = { url: 'http://localhost', method: 'POST' };

handleRequest(req.url, req.method)

function handleRequest(url: string, method: 'GET') {
  console.log(url, method);
}

// to fixed it

const req1 = { url: 'http://localhost', method: 'GET' } as const;
handleRequest(req.url, req1.method)



// # null and undefined
// javascript has two primitives values used to signal absent or uninitialized value: null and undefined
// typescript has two corresponding types by the same names. 
// How these types behave depends on whether you have the Strict option on

// * strict off, the same of behave
// * strict on, check for undefined or null values, need use narrowing to check for values that might be
// * null 

function doSomething(x: string | null) {
  if (x === null) {
    //
  } else {
    console.log(x.toLowerCase());
  }
}
// ## Non-null Assertion Operator !
// TS also has a special syntax for removing null and undefined from a type without doing any explicit checking
// Writing ! after any expression is effectively a type assertion that the value isn't null or undefined

function liveSome(x?: string | null) {
  console.log(x!.toLowerCase());
}

// 枚举是TypeScript添加到JavaScript的一个功能，它允许描述一个值，该值可以是一组可能的命名常量之一。
// 与大多数TypeScript功能不同，这不是对JavaScript的类型级添加，而是添加到语言和运行时的东西。正因为如此，
// 这是一个你应该知道存在的功能，但除非你确定，否则可能会推迟使用。您可以在枚举参考页面中阅读有关枚举的更多信息。

// # Enums
// Enums are a feature added to JavaScript by TS which allows for describing a value that could be one
// of a set of possible named constants. Unlike most Ts features, this is not a type-level addition to 
// JS but something added to the language and runtime. Because of this, it is a feature which you should
// know exists, but maybe hold off on using unless you are sure. 


// # Less Common Primitives
// * bigint
// * symbol
// 