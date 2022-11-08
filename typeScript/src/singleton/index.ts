
// singleton pattern



class Singleton {
  private constructor() {}

  private static instance: Singleton | null

  static getInstance(): Singleton {
    if (Singleton.instance === null) { 
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

Singleton.getInstance() // get singleton instance