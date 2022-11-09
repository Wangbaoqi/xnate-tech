

// environment record mock


abstract class EnvironmentRecord {

  N: string

  // if N exist that has binding
  HasBinding(N: string) {
    return this.N === N
  }

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
}

