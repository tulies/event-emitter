import EventStore from './EventStore'
class EventHandler {
  constructor () {
    this.eventStore = new EventStore()
  }

  add (type, handler, options) {
    this.eventStore.cache({
      type: type,
      handler: handler,
      options: options
    })
  }

  push (type, data, options) {
    // 根据type 获取缓存中的事件
    var typeData = this.eventStore.get(type)
    // //如果没有事件 就返回
    if (!typeData) {
      return
    }

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch (e) {}
    }

    typeData.forEach(function (value, index, array) {
      if (options && options.id) {
        if (!(value.options && value.options && value.options.id && value.options.id === options.id)) {
          return true
        }
      }

      // 执行回调
      if (data) {
        value.handler(data)
      } else {
        value.handler()
      }
    })
  }

  remove (type, options) {
    this.eventStore.remove({
      type: type,
      options: options
    })
  }
}
export default EventHandler
