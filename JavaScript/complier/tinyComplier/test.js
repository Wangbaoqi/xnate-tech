
        
const { tokenzier } = require('./src/selfComplier');


const testCode = `
  const a = ""
`

const tokens = tokenzier(testCode)

console.log(tokens);
