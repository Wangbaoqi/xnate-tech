


class Observer {
  name: string;
  constructor(name: string) { this.name = name; }
  update(state: number) {
    console.log(`state: ${state} is update`);
  }
}


class Subject {
  private state: number = -1;
  private observers: Observer[] = [];
  
  getState(): number {
    return this.state;
  }

  setState(state: number): void { 
    this.state = state;
    this.notify();
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  private notify(): void { 
    this.observers.forEach(observer => observer.update(this.state));
  }
}