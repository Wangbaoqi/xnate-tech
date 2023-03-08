

type IClientItem = Array<() => void>

interface IClient {
  [key: string]: IClientItem;
}

class EventObserver {

  private clientInfo: IClient = {};

  on(key: string, cb: any): void {
    const { clientInfo } = this;
    if (!clientInfo[key]) { 
      clientInfo[key] = []
    }
    clientInfo[key].push(cb);
  }

  emit(name: string): void { 

  }

  remove(name: string): void { 

  }

}