

// faker code

class Product {
  name: string;
  constructor(name: string) { this.name = name; }
  fn1() {
    console.log('fn1');
  }
  fn2() {
    console.log('fn2');
  }
}

class Creator {
  create(name: string): Product { 
    return new Product(name);
  }
}


// standard factory functions

type FnType = () => void;

interface IProduct {
  name: string;
  fn1: FnType;
  fn2: FnType;
}


class Product1 implements IProduct { 
  name: string
  constructor(name: string) {
    this.name = name;
  }
  fn1() {
    console.log('fn1');
  }
  fn2() {
    console.log('fn2');
  }
}

class Product2 implements IProduct { 
  name: string
  constructor(name: string) {
    this.name = name;
  }
  fn1() {
    console.log('fn1');
  }
  fn2() {
    console.log('fn2');
  }
}


class Creator1 {
  // 依赖倒置原则 - 依赖于抽象而不是具体
  create(type: string, name: string): IProduct {
    if (type === 'p1') {
      return new Product1(name)
    }

    if (type === 'p2') { 
      return new Product2(name)
    }

    throw new Error('Invalid type: ' + type)
  }
}


// scene jquery

declare interface Window {
  $: (selector: string) => Jquery
}

class Jquery {
  selector: string
  length: number
  constructor(selector: string) { 
    const domList = Array.prototype.slice.call(document.querySelectorAll(selector));
    const length = domList.length;
    for (let i = 0; i < length; i++) {
      // @ts-ignore
      this[i] = domList[i];      
    }
    this.length = length;
    this.selector = selector
  }

  addClass(className: string): Jquery {
    return this
  }

  append(ele: HTMLElement): Jquery {
    return this
  }
}

function $(selector: string): Jquery { 
  return new Jquery(selector)
}

window.$ = $

const div = $('div');
const p = $('p');