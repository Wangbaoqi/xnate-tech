import ts, { SyntaxKind } from 'typescript';


const sourceText = `
  const b = '3';
`

// produce AST Tree
const sourceFile = ts.createSourceFile('foo.ts', sourceText, ts.ScriptTarget.ESNext, true);

// console.log(sourceFile, 'source file');


const getAllNodes = (node: ts.Node, depth = 0) => {

  console.log(`${new Array(depth + 1).join('----')} ${SyntaxKind[node.kind]} ${node.pos} ${node.end}`);

  depth++;
  node.getChildren().forEach(n => getAllNodes(n, depth))
  
}

getAllNodes(sourceFile)


/** AST for produce
  * 
  * SourceFile 0 18
  * ---- SyntaxList 0 17
  * -------- FirstStatement 0 17
  * ------------ VariableDeclarationList 0 16
  * ---------------- ConstKeyword 0 8
  * ---------------- SyntaxList 8 16
  * -------------------- VariableDeclaration 8 16
  * ------------------------ Identifier 8 10
  * ------------------------ FirstAssignment 10 12
  * ------------------------ StringLiteral 12 16
  * ------------ SemicolonToken 16 17
  * ---- EndOfFileToken 17 18
  */

export default sourceFile