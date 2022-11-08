

interface IClient {
  [key: string]: [];
}

class EventObserver {

  private clientInfo: IClient = {};

  on(key: string, cb: () => void): void {
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