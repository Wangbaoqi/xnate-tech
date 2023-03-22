
// # Operators

// ## Keyof Type Operator

// keyof 操作符接受一个对象类型，并生成其键的字符串或数字文字联合。以下类型P 与“x” | “y”相同：

type Point = { x: number; y: number };
type P = keyof Point;

// * If the type has a string or number index signature, keyof will return those types instead:

type ArrayFish = {
  [n: number]: number;
}
type A = keyof ArrayFish;

// ## typeof Type Operator

// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:


let s = "hello";
let n: typeof s;

// 这对于基本类型没有太大用处，但是结合其他类型运算符，
// 可以方便地表达许多模式。 为了一个例子，我们首先看一下预定义的type ReturnType<T>。 
// 它采用函数类型并生成其返回类型：=>

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

// If we try to use ReturnType on a function name, we see an instructive error:

function f() {
  return {x: 10, y: 1}
}

let TF: typeof f;
type F = ReturnType<typeof f>;


// ## Indexed Access Types

type Person = {
  name: string,
  age: number,
  alive: boolean
}

type Age = Person['age'];
type P1 = Person['name' | 'age'];
type P2 = Person[keyof Person];

type NameAge = 'name' | 'age';
type P3 = Person[NameAge];


// ## Conditional Types

// 在最有用的程序的核心，我们必须根据输入做出决定。JavaScript程序没有什么不同，
// 但鉴于值很容易被内省，这些决定也基于输入的类型。条件类型有助于描述输入和输出类型之间的关系。

interface Animal {
  live(): void
}
interface Dog extends Animal { 
  woof(): void
}

type Condition1 = Dog extends Animal ? number : string;

interface IdLabel {
  id: number
}

interface NameLabel {
  name: string
}

type NameOrId<T extends number | string> = T extends number ? T : string;


// ### Conditional Type Constraints

type MessageOf<T> = T['ms'];

type MessageOf1<T extends { ms: string }> = T['ms'];
 