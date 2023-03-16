

// # Function

// ## Function Type Expressions

function greeter(fn: (a: string) => void) {
  fn('3')
}

type GreetFunction = (a: string) => void;
function greeter1(fn: GreetFunction) {
  fn('3')
}

// ## Call Signatures

// 在JavaScript中，函数除了可调用外，还可以具有属性。
// 然而，函数类型表达式语法不允许声明属性。如果我们想用属性描述可调用的东西，
// 我们可以在对象类型中写一个调用签名：

type DescribableFunction = {
  desc: string;
  (arg: number): boolean;
}

function describeDo(fn: DescribableFunction) {
  console.log(fn.desc + fn(3));
}

// ! note 
// ! this syntax is slightly different compared to a function type expression 
// ! use : between the parameter list and the return type rather than =>

// ## Construct Signature

// Javascript functions can also be invoked with the new operator
// TypeScript refers to these as constructors because they usually create
// a new object. you can write a construct signature by adding the new keyword
// in front of a call signature

interface SomeObject {}

type SomeConstruct = {
  new (someArgs: string): SomeObject
}

function fnCon(ctor: SomeConstruct) {
  return new ctor('1')
}

// ## Generic Functions

function firstFunction(arr: any[]) { }

// 在TypeScript中，当我们想要描述两个值之间的对应关系时，会使用泛型。
// 我们通过在函数签名中声明类型参数来做到这一点：

function secondFunction<Type>(arr: Type[]): Type | undefined { 
  return arr[0]
}

// 通过向此函数添加类型参数Type并在两个位置使用它，
// 我们已经在函数的输入（数组）和输出（返回值）之间创建了一个链接。 
// 现在当我们调用它时，会得到一个更具体的类型

secondFunction([1, '2', false, [], {}])


// ### Inference

// * Note that we didn't have to specify Type in this sample. The type was
// * inferred - chosen automatically by the typescript

// * we can use multiple type parameters as well
// * for example, a standalone version of map would look like this:

function standaloneMap<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] { 
  return arr.map(func);
}

standaloneMap([1, 2, 3, 4], (n) => n ** 2);


// ### Constraints 

// we have written some generic functions that can work on any kind of value.
// sometimes we want to relate two values, but can only operate on a certain
// subset of values. in this case, we can use a constraint to limit the kind
// of types that a type parameter can accept

function constraintLong<Type extends { length: number }>(a: Type, b: Type) {
  return a.length > b.length ? a : b;
}

constraintLong([1, 2], [4]); 

function constraintMin<Type extends { length: number }>(obj: Type, num: number): Type {
  if (obj.length > num) {
    return obj
  } else {
    return { length: 2 }
  }
}

// * it might look like this function is ok - Type is constrained to { length: number }, and the 
// * function either returns Type or a value matching that constraint
// * the problem is that the function promises to return the same kind of object as was passed in.
// * not just some object matching the constraint.


// ### Specifying Type Arguments

// TypeScript通常可以在通用调用中推断预期的类型参数，但并非总是如此。
// 例如，假设你写了一个函数来组合两个数组：

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return [...arr1, ...arr2]
}

// * wrong way
combine([1, 2, 3], ['s']); // Type 'string' is not assignable to type 'number'


// * right way
combine<number | string>([1, 2, 4], ['4']); 


// ### Guidelines for Writing Good Generic Functions

// 写泛型函数很有趣，而且可能会过度使用类型参数。如果有太多的类型参数或者在不需要的情况下使用约束，
// 就会导致推断不成功，令你的函数调用者感到沮丧。

// * rules
// * 1. When possible, use the type parameter itself rather than constraining it
// * 2. Always use as few type parameters as possible
// * 3. If a type parameter only appears in one location, strongly reconsider if you need it

// #### Push Type Parameters Down 向下推导类型

// * right way
function firstFunction1<Type>(arr: Type[]) {
  return arr[0]
}

// ! bad way
function firstFunction2<Type extends any[]>(arr: Type[]) {
  return arr[0]
}

// 乍一看可能看起来完全相同，但firstElement1是编写此函数的更好方法。其推断的返回类型是Type，
// 但firstElement2的推断返回类型是任何，因为TypeScript必须使用约束类型解析arr[0]表达式，
// 而不是在调用期间“等待”解析元素。

// #### Use Fewer Type Parameters

function filter1<Type>(arr: Type[], func: (arg: Type) => Boolean): Type[] {
  return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func) {
  return arr.filter(func)
}

// 我们创建了一个类型参数Func，它不涉及两个值。这总是一个危险信号，
// 因为它意味着想要指定类型参数的调用者必须无故地手动指定额外的类型参数。
// Func什么都不能做，但会使函数难以阅读和理解！


// #### Type Parameters Should Appear Twice

// 有时忘记了函数不需要通用的类型

function greet<Str extends string>(s: Str) {
  return s
}

function greet1(s: string) {
  return s
}

// ** 请记住，类型参数用于关联多个值的类型。如果类型参数在函数签名中仅使用一次，则与任何内容无关。


// ### Optional Parameters

// JavaScript中的函数通常需要可变数量的参数。例如，toFixed数字方法采用可选的数字计数：

function fs(n: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

// use ? optional 
function fs1(n?: number) {
  console.log(n);
}

// #### Optional Parameters in CallBacks

function myEach(arr: any[], cb: (arg: any, idx?: number) => void) {
  arr.forEach((a, id) => cb(a, id))
}


myEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed()); // i possibly is undefined
  console.log(i?.toFixed());
})

// * note 在写回调函数类型时，除非你打算不传递该参数就调用函数，否则永远不要写可选参数。


// ## Function Overloads

// * note learn it in the future when using it


// ## Other Type to Know about

// * 1. void
// * 2. object
// * 3. unknow
// * 4. never
// * 5. Function

// ### void

// void表示不返回任何值的函数的返回值。
// 当一个函数没有任何return语句或者在这些return语句中没有显式地返回任何值时，
// 它就是隐含类型。

function myVoid() {
  return;
}

// like myVoid(): void

// 在JavaScript中，不返回任何值的函数将隐式返回未定义的值。
// 然而，在TypeScript中，void和undefined不是一回事

// ### object

// the special type object refers to any value that isn't a primitive(string, number,
// bigInt, boolean, null, undefined), this is different from empty object type {}, 
// and also different from the global type Object, it's very likely you will never use
// Object type

// ### unknow 

// the unknow type represents any value, this is similar to the any type, but is safer 
// because it's not legal to do anything with an unknow value.

// unknow 是安全的，在做任何不合法的操作都会抛出异常

function myAny(a: any) {
  a.b();
}

function myKnow(a: unknown) {
  a.b(); 
}

// 这在描述函数类型时很有用，因为您可以描述接受任何值的函数，而函数体中没有任何值。
// * 相反，您可以描述返回未知类型值的函数：

function safeKnow(s: string): unknown {
  return JSON.parse(s);
}
const res = safeKnow('3')

// ### never

// Some functions never return a value:

function fail(msg: string): never {
  throw new Error(msg)
}

// Never类型表示从未观察到的值。在返回类型中，这意味着函数抛出异常或终止程序的执行。
// Never也会出现，当TypeScript判断联合中没有剩余项时

function fn(s: string | number) {
  if (typeof s == 'string') {
    
  } else if (typeof s == 'number') {
    
  } else {
    console.log(s); // s is never type
  }
}

// ### Function 

// 全局类型函数描述了JavaScript中所有函数值上存在的bind、call, apply等属性。
// 它还具有特殊属性，即函数类型的值始终可以调用；这些调用返回 any 

function myFun(f: Function) {
  f.call(null);
  f.apply(null);
  f(11)
}

// ## Rest Parameters and Arguments


// ### Rest Parameters

// 除了使用可选参数或重载来创建可接受各种固定参数个数的函数外，
// 我们还可以使用剩余参数定义接受无限个数的函数。

// A rest parameter appears after all other parameters, and uses the ... syntax:

function myRest(n: number, ...m: number[]) {
  return m.map(x => n ** x)
}

// * note the type of m


// ### Rest Arguments

// 相反，我们可以使用扩展语法从数组中提供可变数量的参数。
// 例如，数组的推送方法接受任意数量的参数：

const arr1 = [1, 2, 3, 4];
const arr2 = [0, 6, 6];

arr2.push(...arr1);


const args = [8, 5];
const angle = Math.atan2(...args); // 传递给参数的参数必须具有元组类型或者被传递到剩余参数中

// * 这种情况的最佳修复方法有点取决于您的代码，但一般来说，常量上下文是最直接的解决方案 

const args1 = [9, 4] as const;
const angles = Math.atan2(...args1);


// ## Parameter Destructuring 类型解构



