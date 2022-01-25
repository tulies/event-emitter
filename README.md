# EventMiddleware

JS 自定义事件消息通知，类似 jquey 的事件机制。

If I can help you, please give me a star, tahnk you!

# Installation

## ES6 import

```shell
npm i --save @tulies/event-middleware
```

```javascript
import EventMiddleware from '@tulies/event-middleware'

EventMiddleware.on(type, callback)
```

> tips: 不要放到 exclude 中

```javascript
{
  test: /\.js$/,
  loader: 'babel-loader',
  // exclude: /node_modules/
  exclude: /node_modules\/(?!(@tulies\/event-middleware)\/).*/

}
```

## 引入文件

```html
<script src="/build/EventMiddleware.js"></script>
<script>
  EventMiddleware.on(type, callback)
</script>
```

# Basic Usage

## 全局调用，全局共享事件监听。

```javascript
// 添加事件监听
EventMiddleware.on('custom-event', function (data) {
  console.log(new Date(), 'custom-event 回调中返回：', data)
})

// 取消事件监听
EventMiddleware.unbind('custom-event')

// 事件消息通知
EventMiddleware.dispatch('custom-event', {
  name: '我是custom-event-1的回调数据'
})

// 添加options参数，配置id，区分事件的监听来源。
EventMiddleware.on(
  'custom-event',
  function (data) {
    console.log(new Date(), 'custom-event 回调中返回：', data)
  },
  { id: 'id1' }
)
// 仅解除指定id来源的事件
EventMiddleware.unbind('custom-event', { id: 'id1' })
// 仅通知指定id来源的事件
EventMiddleware.dispatch(
  'custom-event',
  {
    name: '我是custom-event-1的回调数据'
  },
  { id: 'id1' }
)
```

## 具体实例调用，每个实例相互独立

```javascript
var eventMiddleware = new EventMiddleware()
// 添加事件监听
eventMiddleware.on('custom-event', function (data) {
  console.log(new Date(), 'custom-event 回调中返回：', data)
})

// 取消事件监听
eventMiddleware.unbind('custom-event')

// 事件消息通知
eventMiddleware.dispatch('custom-event', {
  name: '我是custom-event-1的回调数据'
})
```

# Dist / Build

## Development Build

```shell
$ npm run dev
```

## Production Build

```shell
$ npm run build
```
