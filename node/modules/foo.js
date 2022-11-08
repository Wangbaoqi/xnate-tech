
function foo() {
  console.log(bar)
}


const bar = '1'

module.exports = foo


console.log(module, 'module foo');


// compile the this function 

(
  function (exports, require, module, __dirname, __filename) {
    const bar = '1';
    function foo() {
      console.log(bar);
    }
    module.exports = foo;
    console.log(module, 'module foo');
  }
)