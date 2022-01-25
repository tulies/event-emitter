/*
 * @Author: 王嘉炀
 * @Date: 2022-01-17 21:36:16
 */

import { TypeListener } from '.'
import EventStore from './EventStore'
class EventHandler {
  public eventStore
  constructor() {
    this.eventStore = new EventStore()
  }
  addEventListener(type: string, listener: TypeListener, options?: any): void {
    this.eventStore.put({
      type,
      listener,
      options
    })
  }
  // 移除
  removeEventListener(type: string, listener: TypeListener, options?: any): void {
    this.eventStore.remove({
      type,
      listener,
      options
    })
  }
  emit(type: string, data?: any): void {
    // 根据type 获取缓存中的事件
    const typeData = this.eventStore.get(type)
    // //如果没有事件 就返回
    if (!typeData) {
      return
    }

    // if (typeof data === 'string') {
    //   try {
    //     data = JSON.parse(data)
    //   } catch (e) {}
    // }
    // index, array
    typeData.forEach(function (value) {
      // if (options && options.id) {
      //   if (!(value.options && value.options && value.options.id && value.options.id === options.id)) {
      //     return true
      //   }
      // }

      // 执行回调
      data ? value.listener && value.listener(data) : value.listener && value.listener()
    })
  }
  has(type: string, listener?: TypeListener, options?: any): boolean {
    return this.eventStore.has({
      type,
      listener,
      options
    })
  }
}
export default EventHandler
