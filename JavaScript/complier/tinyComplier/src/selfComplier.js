// first stage: tokenzition

/**
 *
 * @param {*} input 
 */
function tokenzier(input) {
  let current = 0;

  let tokens = [];

  while (current < input.length) {

    let char = input[current];


    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })
      current++;

      continue;
    }

    if (char === ')') { 

      tokens.push({
        type: 'paren',
        value: ')'
      })

      current++;

      continue;
    }

    const WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }


    const NUMBER = /[0-9]/;
    if (NUMBER.test(char)) {
      
      let value = '';

      while (NUMBER.test(char)) {
        value += char;
        char = input[current++];
      }

      tokens.push({
        type: 'number',
        value
      })

      continue;
    }


    if (char === '"') {
      
      let value = '';
      char = input[++current];

      while (char !== '"') { 
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({
        type: 'string',
        value
      })

      continue
    }

    const LETTER = /[a-z]/i;
    if (LETTER.test(char)) {
      let value = '';

      while (LETTER.test(char)) {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({
        type: 'name',
        value
      })

      continue;
    }

    throw new TypeError('I dont know what this character is:' + char);
  }

  return tokens;
}



function parser(tokens) {

  let current = 0;

  let ast = {
    type: 'Program',
    body: []
  }

  while (current < tokens.length) { 
    ast.body.push(walk())
  }

  return ast;

  function walk() {

    let token = tokens[current];
    
    if (token.type === 'string') {
      current++;
      return {
        type: 'StringLiteral',
        value: token.value
      }
    }

    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value
      }
    }

    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current];

      let node = {
        type: 'CallExpression',
        name: token.value,
        params: []
      }

      token = tokens[++current];

      // handle params
      while (
        (token.type !== 'paren') || 
        (token.type === 'paren' && token.value !== ')')
      ) {
        node.params.push(walk());
        token = tokens[current];
      }

      current++;

      return node;

    }

    
    throw new TypeError(token.type);
  }

}


module.exports = {
  tokenzier
}