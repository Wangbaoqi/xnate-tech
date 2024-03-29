

// # Generics 泛型

// 在C#和Java等语言中，工具箱中用于创建可重用组件的主要工具之一是泛型，
// 即能够创建可以在各种类型而不是单一类型上工作的组件。这允许用户使用这些组件并使用自己的类型。

// * identity function。
// * 身份函数是一个将返回传入的任何内容的函数。你可以以类似于echo命令的方式来思考这个问题。

// without identity function, we would either have to give the identity function a specific type

function identity(arg: number): number {
  return arg
}

// use generic identity function

// this we will use the *Type variable*, a special type that works on types rather than values

function genericIdentity<Type>(arg: Type): Type { 
  return arg
}

// 我们现在将类型变量Type添加到身份函数中。此类型允许我们捕获用户提供的类型（例如数字），
// 以便我们以后可以使用该信息。在这里，我们再次使用Type作为返回类型。
// 在检查中，我们现在可以看到参数和返回类型使用相同的类型。这允许我们在函数的一侧和另一侧传输该类型信息。


// * two ways to call it

// * 1. pass the all of the arguments, including the type argument
// 这里我们明确地将Type设置为字符串作为函数调用的参数之一，使用<>而不是()来表示这些参数。

const resIdentity = genericIdentity<string>('s')

// * 2. the most common, use type argument inference - 
// * we want to the compiler to set value of Type for us automatically 
// * based on the type of the argument we pass in.

const resIdentity1 = genericIdentity(3)


// ## Works with Generics Type Variables

// 当您开始使用泛型时，您会注意到，当您创建诸如identity之类的泛型函数时，
// 编译器将强制您正确使用函数体中的任何泛型类型参数。 也就是说，
// 实际上要将这些参数视为可能是任何类型的参数。


function generateIdentityArray<Type>(arg: Type[]): Type[] {
  return arg;
}

// ## Generic Types

// 在前面的章节中，我们创建了可在多种类型上工作的通用标识函数。
// 在本节中，我们将探索这些函数本身的类型以及如何创建通用接口。

function identity1<Type>(arg: Type): Type {
  return arg;
}

const myIdentity: <Type>(arg: Type) => Type = identity1;
const myIdentity2: { <Type>(arg: Type): Type } = identity1;


// use interface
interface MyIdentity {
  <Type>(arg: Type): Type
}

const myIdentity3: MyIdentity = identity1;

// * 在类似的例子中，我们可能希望将通用参数移动到整个接口的参数。
// * 这使我们看到我们正在泛型化的类型(例如Dictionary<string>，而不仅仅是Dictionary)。
// * 这使得该类型参数对接口的所有其他成员都是可见的。

interface MyIdentity1<Type> {
  (arg: Type): Type
}

const myIdentity4: MyIdentity1<string> = identity1;


// ## Generic Classes

// 一个泛型类具有与泛型接口相似的形状。
// 泛型类在类名之后具有尖括号（<>）中的泛型类型参数列表。

class GenericClass<Type> {
  value: Type;
  add: (x: Type, y: Type) => Type;
}

const generic = new GenericClass<number>();


// ## Generic Constraints

// 为此，我们将创建一个描述我们约束的接口。在这里，
// 我们将创建一个具有单个.length属性的接口，
// 然后我们将使用此接口和extends关键字来表示我们的约束：

interface LengthWise {
  length: number
}

function loggingIdentity<Type extends LengthWise>(arg: Type) {
  console.log(arg.length);
}

loggingIdentity(1);
loggingIdentity({ length: 1, value: '22' });


// ## Using Type Parameters in Generic Constraints


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  console.log(obj[key]);
}

getProperty({ a: 1, b: 2, c: 3 }, 'a');
getProperty({ a: 1, b: 2, c: 3 }, 'd');

// ## Using Class Types in Generics

// 在使用泛型创建TypeScript中的工厂时，必须通过其构造函数引用类型。 例如，=>

function create<Type>(c: { new(): Type }): Type {
  return new c()
}

class Beekeeper {
  hasMask: boolean = true;
}

class Zookeeper {
  nameTag: string = 'zookeeper';
}

class Animal {
  numLegs: number = 3;
}

class Bee extends Animal {
  keeper: Beekeeper = new Beekeeper();
}

class Lion extends Animal { 
  keeper: Zookeeper = new Zookeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

const bee = createInstance(Bee)
console.log(bee.keeper.hasMask);

// * 此模式用于为混合设计模式提供动力。
