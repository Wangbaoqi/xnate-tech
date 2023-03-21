
// # Object Types

// * 1. Property Modifiers
// * 2. Extending Types


// ## Property Modifiers

// ### optional properties
// ### readonly properties
// ### Index Signature

// ## Extending Types

// ### Intersection Types

interface ColorFul {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorCircle = ColorFul & Circle;


// ## Interfaces vs INtersections


// ### Generic Object Types

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

// #### Array Types

const arr: Array<string> = ['1', '2'];
const arr3: string[] = ['2', '3'];

// ** 1. ReadonlyArray Type

function doStuff(values: ReadonlyArray<string>) {
  const res = values.slice();
  res.push('3')
  values.push('3');
}

// ** 2. Tuple Types

type StringNumberPair = [string, number];
type StringNumberBooleans = [string, number, ...boolean[]];

// ** 3. readonly Tuple Types

// 在大多数代码中，元组往往是创建和未修改的，
// 因此尽可能将类型注释为只读元组是一个很好的默认值。
// 鉴于具有常量断言的数组文字将使用只读元组类型推断，这一点也很重要。

type StringNumber = readonly [string, number];

