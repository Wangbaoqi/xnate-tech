
let instance = null;

class SingleTon { }

export default () => {

  if (instance === null) {
    instance = new SingleTon();
  }
  return instance;
}