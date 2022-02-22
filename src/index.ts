import EventHandler from './EventHandler'
export type TypeListener = (data?: any, responseCallback?: (resdata?: any) => void) => void

class EventEmitter {
  private eventHandler
  private static globalInstance: Record<string, EventEmitter> = {}
  private static globalEventEmitter: EventEmitter

  constructor() {
    this.eventHandler = new EventHandler()
  }
  public on(type: string, listener: TypeListener, options?: any): void {
    // console.debug('on', type, listener)
    this.eventHandler.addEventListener(type, listener, options)
  }

  public off(type: string, listener: TypeListener, options?: any): void {
    // console.debug('off', type, listener)
    this.eventHandler.removeEventListener(type, listener, options)
  }
  public emit(type: string, data?: any): void {
    // console.log(type,data);
    this.eventHandler.emit(type, data)
    // return this;
  }
  public has(type: string, listener?: TypeListener, options?: any): boolean {
    return this.eventHandler.has(type, listener, options)
  }

  // 通过id来标识，存在实例则直接返回，没有则new
  static instance(id: string): EventEmitter {
    if (id) {
      if (!this.globalInstance[id]) {
        this.globalInstance[id] = new EventEmitter()
      }
      return this.globalInstance[id]
    }
    return new EventEmitter()
  }
  // 单例，用于全局类直接调用。
  static singleInstance(): EventEmitter {
    if (this.globalEventEmitter) {
      return this.globalEventEmitter
    }
    this.globalEventEmitter = new EventEmitter()
    return this.globalEventEmitter
  }
  public static on = EventEmitter.singleInstance().on.bind(EventEmitter.singleInstance())
  public static off = EventEmitter.singleInstance().off.bind(EventEmitter.singleInstance())
  public static emit = EventEmitter.singleInstance().emit.bind(EventEmitter.singleInstance())
  public static has = EventEmitter.singleInstance().has.bind(EventEmitter.singleInstance())
}
export default EventEmitter
