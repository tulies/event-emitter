import EventHandler from './EventHandler'
export type TypeListener = (data?: any, responseCallback?: (resdata?: any) => void) => void

class EventMiddleware {
  private eventHandler
  private static globalInstance: Record<string, EventMiddleware> = {}
  private static globalEventMiddleware: EventMiddleware

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
  static instance(id: string): EventMiddleware {
    if (id) {
      if (!this.globalInstance[id]) {
        this.globalInstance[id] = new EventMiddleware()
      }
      return this.globalInstance[id]
    }
    return new EventMiddleware()
  }
  // 单例，用于全局类直接调用。
  static singleInstance(): EventMiddleware {
    if (this.globalEventMiddleware) {
      return this.globalEventMiddleware
    }
    this.globalEventMiddleware = new EventMiddleware()
    return this.globalEventMiddleware
  }
  public static on = EventMiddleware.singleInstance().on.bind(EventMiddleware.singleInstance())
  public static off = EventMiddleware.singleInstance().off.bind(EventMiddleware.singleInstance())
  public static emit = EventMiddleware.singleInstance().emit.bind(EventMiddleware.singleInstance())
  public static has = EventMiddleware.singleInstance().has.bind(EventMiddleware.singleInstance())
}
export default EventMiddleware
