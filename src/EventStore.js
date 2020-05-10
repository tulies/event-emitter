/*
 * @Author: 王嘉炀
 * @Date: 2020-03-29 21:36:01
 */
class EventStore {
  constructor () {
    this.dataPool = {
      events: {}
    }
  }

  cache (data) {
    if (data === undefined) {
      return
    }
    if (!this.dataPool.events[data.type]) {
      this.dataPool.events[data.type] = []
    }
    this.dataPool.events[data.type].push(data)
    // console.log('catch:',this.dataPool.events);
  }

  get (key) {
    return key === undefined
      ? {}
      : this.dataPool.events && this.dataPool.events[key]
  }

  remove (data, options) {
    if (data === undefined) {
      return
    }
    if (!this.dataPool.events[data.type]) {
      return
    }
    // 如果options存在指定了id，则删除特定的id事件。
    if (data.options && data.options.id) {
      var typeEvents = []
      this.dataPool.events[data.type].forEach(function (value, index, array) {
        if (value.options && value.options.id === data.options.id) {
          return true
        }
        typeEvents.push(value)
      })
      this.dataPool.events[data.type] = typeEvents
    } else {
      // 删除全部事件
      delete this.dataPool.events[data.type]
    }
  }
  // hasData() {
  // }
}

export default EventStore
