
// TypeScript offers full support for the class keyword introduced in ES2015.

// # Class Members
// ## Fields
// ## Constructors
// ## readonly
// ## methods
// ## Getters and setters
// ## index Signature

class Points { 
  fa: string = '1';
}

// * Field
// A field declaration creates a public writeable property on a class:


class PointsField { 
  a: number = 0;
  b: number = 0;
  readonly c: number;
}
const pf = new PointsField();
pf.a = 1;


// * --strictPropertyInitialization

class PointsField1 {
  a: number;
  b: string;
  kn: string;

  constructor() {
    this.a = 1;
  }
}

// * superCalls

class PointsField2 extends Points {
  constructor() {
    super();
    console.log(this.fa);
  }
}

// * Getters and setters

class PointsC {
  _length: number = 0;
  get length() {
    return this._length;
  }
  set length(value: number) { 
    this._length = value;
  }
}
const pc = new PointsC();
pc._length = 1

// * index signature

class PointsIndex {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

// # Class Heritage
// ## implements Clause
// ## extends Clause
// ##


// ## implements Clause
// You can use an implements clause to check that a class satisfies a particular interface. 
// An error will be issued if a class fails to correctly implement it:

interface PingAble {
  ping(): void;
}

class PingPoint implements PingAble {
  ping() {
    return 'l'
  }
}

// ! caution
interface CheckAble {
  check(s: string): boolean
}
class CheckPoint implements CheckAble {
  check(s): boolean {
    return s.toLowerCase() === 's'
  }
  // check(s: string): boolean {
  //   return s.toLowerCase() === 's'
  // }
}

// ## extends Clause
// ### overriding methods
// ### Type-only Field Declarations



// ### Type-only Field Declarations

// 当target >= ES2022 或 useDefineForClassFields 为true时，类字段将在父类构造函数完成后进行初始化，
// 覆盖由父类设置的任何值。 当您只想重新声明一个从已有字段中继承的更准确的类型时，这可能是一个问题。 
// 为了处理这些情况，您可以写declare来表明TypeScript应该不会对此字段声明产生任何运行时效应。

interface AnimalP {
  date: any
}

interface DogP extends AnimalP { 
  breed: any
}

class AnimalHouse {
  resident: AnimalP;
  constructor(animal: AnimalP) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  declare resident: DogP;
  constructor(dog: DogP) { 
    super(dog);
  }
}

let dd: DogP = { breed: 'dd', date: 'dd' };

const dh = new DogHouse(dd);