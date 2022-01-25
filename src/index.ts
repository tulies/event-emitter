/*
 * @Author: 王嘉炀
 * @Date: 2020-03-29 21:35:54
 */

import EventHandler from './EventHandler'
export type TypeHandler = (data?: any, responseCallback?: (resdata?: any) => void) => void

class EventMiddleware {
  private eventHandler
  private static globalInstance: Record<string, EventMiddleware> = {}
  private static globalEventMiddleware: EventMiddleware

  constructor() {
    this.eventHandler = new EventHandler()
  }
  public on(type: string, handler: TypeHandler, options?: any): void {
    console.debug('on', type, handler)
    this.eventHandler.addEventListener(type, handler, options)
  }

  public off(type: string, handler: TypeHandler, options?: any): void {
    console.debug('off', type, handler)
    this.eventHandler.removeEventListener(type, handler, options)
  }
  public emit(type: string, data?: any): void {
    // console.log(type,data);
    this.eventHandler.emit(type, data)
    // return this;
  }
  public has(type: string, handler?: TypeHandler, options?: any): boolean {
    return this.eventHandler.has(type, handler, options)
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
