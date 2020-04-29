/*
 * @Author: 王嘉炀
 * @Date: 2020-03-29 21:35:54
 * @Last Modified by: 王嘉炀
 * @Last Modified time: 2020-04-29 23:37:33
 */

import EventHandler from './EventHandler'
class EventMiddleware {
  constructor () {
    this.event = new EventHandler()
  }

  dispatch (type, data, options) {
    // console.log(type,data);
    this.event.push(type, data, options)
    // return this;
  }

  on (type, callback, options) {
    this.event.add(type, callback, options)
    // return this;
  }

  unbind (type, options) {
    this.event.remove(type, options)
    // return this;
  }

  static instance (id) {
    if (id) {
      if (!this.globalInstance[id]) {
        this.globalInstance[id] = new EventMiddleware()
      }
      return this.globalInstance[id]
    }
    return new EventMiddleware()
  }

  static singleInstance () {
    if (this.globalEventMiddleware) {
      return this.globalEventMiddleware
    }
    this.globalEventMiddleware = new EventMiddleware()
    return this.globalEventMiddleware
  }

  static on (type, callback, options) {
    this.singleInstance().on(type, callback, options)
  }

  static unbind (type, options) {
    this.singleInstance().unbind(type, options)
  }

  static dispatch (type, data, options) {
    this.singleInstance().dispatch(type, data, options)
  }
}
EventMiddleware.globalInstance = {}

export default EventMiddleware
