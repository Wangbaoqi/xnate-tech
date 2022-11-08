
interface IPerson {
  name: string
  age: number
  eat: () => void
}



class Person {
  name: string = 'John Smith'
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} eating`);
  }
  speak() { 
    console.log(`${this.name} speaking`);
  }
}

class Student extends Person { 
  constructor(name: string, age: number) { 
    super(name, age);
  }
  private learn() { 
    console.log('learn student');
  }
}

class Teacher extends Person { 
  constructor(name: string, age: number) { 
    super(name, age);

  }
  private teach() {
    console.log('tech student');
    
  }
}



class Employee {
  name: string;
  timeCard: TimeCard;
  constructor(name: string) { 
    this.name = name;
    this.timeCard = new TimeCard();
  }
}

class TimeCard { 

}



