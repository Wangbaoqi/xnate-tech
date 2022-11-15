

// environment record mock


abstract class EnvironmentRecord {

  N: string

  // if N exist that has binding
  HasBinding(N: string) {}

  CreateMutableBinding(N: string, D: boolean) {}

  CreateImmutableBinding(N: string, S: boolean) {}

  InitializeBinding(N: string, V: string) {}

  SetMutableBinding(N: string, V: string, S: boolean) {}

  GetBindingValue(N: string, S: boolean) {}

  DeleteBinding(N: string) { }

  HasThisBinding() { }
  
  HasSuperBinding() { }
  
  WithBaseObject() { }

}


class DeclareEnvironmentRecord extends EnvironmentRecord { 

}


class ObjectEnvironmentRecord extends EnvironmentRecord { 

  '[[BindingObject]]' = {}
  '[[IsWithEnvironment]]' = false

}


class FunctionEnvironmentRecord extends DeclareEnvironmentRecord { 
  '[[ThisValue]]': ''
  '[[ThisBindingStatus]]': 'lexical | initialized | uninitialized'
  '[[FunctionObject]]': {}
  "[[NewTarget]]": {} | undefined

  BindThisValue(V: string) { }
  GetThisBinding() { }
  GetSuperBase() {}
}

class ModuleEnvironmentRecord extends DeclareEnvironmentRecord { 

  CreateImportBinding(N, M, N2) { }
  GetThisBinding() {}
}


class GlobalEnvironmentRecord extends EnvironmentRecord { 
  '[[ObjectRecord]]': ObjectEnvironmentRecord
  '[[GlobalThisValue]]': {}
  '[[DeclarativeRecord]]': DeclareEnvironmentRecord
  '[[VarNames]]': 'a List of string'

  GetThisBinding() { }
  HasVarDeclaration(N) { }
  HasLexicalDeclaration(N)	{}
  HasRestrictedGlobalProperty(N) { }
  CanDeclareGlobalVar(N) { }
  CanDeclareGlobalFunction(N) { }
  CreateGlobalVarBinding(N, D) { }
  CreateGlobalFunctionBinding(N, V, D)	{}
}