
// # Operators

// * 1. Keyof Type Operator
// * 2. Indexed Access Types
// * 3. Conditional Type Constraints
// * 4. Mapped Types



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
 

// ### Inferring Within Conditional Types

// 我们发现自己使用条件类型来应用约束并提取出类型。
// 这最终会成为如此常见的操作，以至于条件类型可以使其更容易。


// * 条件类型为我们提供了一种方法，可以通过使用infer关键字从在true分支中与之比较的类型中推断出。
// * 例如，我们可以在Flatten中推断出元素类型而不是“手动”使用索引访问类型来获取它：

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type Arr = Flatten<Array<number | string>>

// 在这里，我们使用infer关键字声明性地引入了一个新的名为Item的泛型类型变量，
// 而不是指定如何在真分支中获取T的元素类型。 
// 这使我们无需考虑如何深入并探测我们感兴趣的类型的结构。

// * We can write some useful helper type aliases using the infer keyword. 
// * For example, for simple cases, we can extract the return type out from function types:

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

type Num = GetReturnType<() => number>;
type Str = GetReturnType<(s: string) => string>;
type Bool = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// * note
// * 当从具有多个调用签名的类型推断时（例如重载函数的类型），
// * 将从最后一个签名进行推断（这可能是最宽松的通用情况）。 无法根据参数类型列表执行重载解析。

// ### Distributive Conditional Types

// 当条件类型作用于泛型类型时，如果给定一个联合类型，它们就会变成分配式的。
// 例如，看下面的例子：

type ToArray<Type> = Type extends any ? Type[] : never;

type Arr1 = ToArray<number>;
type StrArrOrNum = ToArray<number | string>;

// * 一般来说，分布性是所需的行为。要避免这种行为，可以用方括号将extends关键字的每一边包围起来。

type ToArray1<Type> = [Type] extends [any] ? Type[] : never;

type Arr2 = ToArray1<number | string>;


// ## Mapped Types

// 当你不想重复自己时，有时需要基于另一种类型来定义一个类型。
// 映射类型基于索引签名的语法，用于声明未提前声明的属性的类型：

type OnlyBoolAndHorses = {
  [key: string]: boolean | string;
}

const conform: OnlyBoolAndHorses = {
  del: 'rr',
  read: true
} 

// 一个映射类型是一种通用类型，它使用PropertyKeys的联合（通常通过keyof创建）来遍历键以创建类型：

type OptionFlags<Type> = {
  [property in keyof Type]: boolean
}

type FeatureFlags = {
  darkMode: () => void;
  newProfile: () => void;
}

type FeatureOption = OptionFlags<FeatureFlags>

// OptionsFlags will take all the properties from the type Type and change their values to be a boolean.


// ### Mapping Modifiers

// 在映射期间可以应用两个附加修饰符：readonly 和 ? 分别影响可变性和可选性。
// 您可以通过前缀加上 - 或 + 来删除或添加这些修饰符。如果不添加前缀，则假定为+。

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
} 

type LockedAccount = {
  readonly id: number,
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>


// remove optional attributes

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

type MaybeUser = {
  id: string,
  name?: string,
  age?: number
}

type UnMaybeUser = Concrete<MaybeUser>

// ### Key Remapping via as

// 在TypeScript 4.1及以后的版本中，您可以使用映射类型中的as子句重新映射键：

type MappedTypeWithNewProperties<Type> = {
  [Properties in keyof Type as KeyType]: Type[Properties]
} 


type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

interface Person1 {
  name: string,
  age: number,
  location: string
}

type LazyPerson = Getters<Person1>

// 您可以通过条件类型产生 never，从而过滤出键：

type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kink'>]: Type[Property]
}

interface Circle {
  kink: string,
  radius: number
}

type KinkLessCircle = RemoveKindField<Circle>

// 您可以映射任意联合，不仅是 string|number|symbol 的联合，而且还有任何类型的联合：

// ?? Question

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = {
  kind: 'square',
  x: number,
  y: number
}

type CircleEvent = {
  kind: 'circle',
  radius: number
}

type Config = EventConfig<CircleEvent>


