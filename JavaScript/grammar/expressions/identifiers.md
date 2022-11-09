

### Syntax 

1. IdentifierReference 
  
a. 语法产生式

```md
IdentifierReference[Yield, Await] :
  Identifier
  [~Yield] yield
  [~Await] await
```
可以拆分成几种：

```md
(1) 
IdentifierReference :
  Identifier
  yield
  await

(2)
IdentifierReference_Yield :
  Identifier
  await

(3)
IdentifierReference_await :
  Identifier
  yield

(4)
IdentifierReference_Yield_Await :
  Identifier
```


2. BindingIdentifier 

a. 语法产生式

```md
BindingIdentifier[Yield, Await] :
  Identifier
  yield
  await
```

可以拆分成一下几种：

```md
(1)
BindingIdentifier ：
  Identifier
  yield
  await

(2)
BindingIdentifier_Yield :
  Identifier
  yield
  await

(3)
BindingIdentifier_Await :
  Identifier
  yield
  await

(4)
BindingIdentifier_Yield_Await :
  Identifier
  Yield
  Await
```

3. LabelIdentifier 

a. 语法产生式

LabelIdentifier[Yield, Await] :
  Identifier
  [~Yield] yield
  [~Await] await

可以拆分成一下几种：

```md
(1)
LabelIdentifier :
  Identifier
  yield
  await

(2)
LabelIdentifier_Yield :
  Identifier
  await

(3)
LabelIdentifier_Await :
  Identifier
  yield

(4)
LabelIdentifier_Yield_Await :
  Identifier
```

4. Identifier
 

Identifier :
  IdentifierName but not ReservedWord   


### Static Semantics


1. 如果在严格模式下**标识符**是`arguments`或者`eval`，则会产生语法错误。
   
   产生式为：BindingIdentifier ：Identifier

2. 如果在严格模式下，标识符为`yield`保留字，则会产生语法错误
  
  IdentifierReference : yield
  BindingIdentifier : yield
  LabelIdentifier : yield

3. 如果是`Module`模块的话，使用`await`保留字也会产生语法错误

  IdentifierReference : await
  BindingIdentifier : await
  LabelIdentifier : await

