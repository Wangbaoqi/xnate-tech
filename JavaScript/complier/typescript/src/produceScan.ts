import ts, { SyntaxKind } from 'typescript';


const testStr = `
  const a = '1'
`

// create scanner instance

// source code on compile.ts
const scanner = ts.createScanner(ts.ScriptTarget.Latest, true);


const init = (text: string) => { 
  scanner.setText(text);
  scanner.setScriptTarget(ts.ScriptTarget.ESNext);
  scanner.setLanguageVariant(ts.LanguageVariant.Standard);
};

init(testStr);

let tokens = scanner.scan();

while (tokens !== ts.SyntaxKind.EndOfFileToken) {
  console.log(tokens, SyntaxKind[tokens], 'ts tokens');
  tokens = scanner.scan();
}

// result
// 85 ConstKeyword
// 79 Identifier
// 63 FirstAssignment
// 10 StringLiteral