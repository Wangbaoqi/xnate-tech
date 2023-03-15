

function padLeft(padding: number | string, input: string): string {
  // throw new Error('Not implemented yet')

  if (typeof padding === 'number') { 
    return ''.repeat(padding) + input;
  }
  return padding + input;
}

// # narrowing
// * typeof narrowing
// * equality narrowing
// * in operator narrowing
// * instanceof narrowing
// * using type predicates 类型谓词
// * never Type


interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle;

 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

