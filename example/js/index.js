// 添加消息监听
EventEmitter.on('custom-event-1', function (data) {
  console.log(new Date(), 'custom-event-1 回调中返回：', data)
})

var fun = function (data) {
  console.log(new Date(), 'event-middleware 回调中返回：', data)
}
document.getElementById('event-on').addEventListener('click', function () {
  // 添加消息监听
  EventEmitter.on('custom-event', fun)
})
document.getElementById('event-emit').addEventListener('click', function () {
  // 广播消息
  EventEmitter.emit('custom-event', {
    name: '我是 custom-event 的广播消息'
  })
})
document.getElementById('event-off').addEventListener('click', function () {
  // 移除消息监听
  EventEmitter.off('custom-event', fun)
})

/***  使用new出来的实例 */
var eventEmitter = new EventEmitter()

// 添加消息监听，这里事件名称和上面的一样，但是你会发现互不冲突
eventEmitter.on('new-custom-event', function (data) {
  console.log(new Date(), 'new-custom-event 回调中返回：', data)
})

document.getElementById('new-event').addEventListener('click', function () {
  eventEmitter.emit('new-custom-event', {
    name: '我是new出来的 new-custom-event 的回调数据'
  })
})
