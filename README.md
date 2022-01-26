# EventMiddleware

JS 自定义事件消息通知，类似 jquey 的事件机制。

If I can help you, please give me a star, tahnk you!

# Installation

## ES Module Import

```shell
yarn add @tulies/event-middleware
```

```javascript
import EventMiddleware from '@tulies/event-middleware'
```

## 引入文件

```html
<script src="/dist/event-middleware.umd.js"></script>
<script>
  EventMiddleware.on(type, listener)
</script>
```

# Basic Usage

## 全局调用，全局共享事件监听。

```javascript
const listener = function (data) {
  console.log(new Date(), 'custom-event 回调中返回：', data)
}
// 添加事件监听
EventMiddleware.on('custom-event', listener)

// 取消事件监听
EventMiddleware.off('custom-event', listener)

// 事件消息通知
EventMiddleware.emit('custom-event', { name: '我是custom-event 的回调数据' })
```

## 具体实例调用，每个实例相互独立

```javascript
var eventMiddleware = new EventMiddleware()
const listener = function (data) {
  console.log(new Date(), 'custom-event 回调中返回：', data)
}
// 添加事件监听
eventMiddleware.on('custom-event', listener)

// 取消事件监听
eventMiddleware.off('custom-event', listener)

// 事件消息通知
eventMiddleware.emit('custom-event', { name: '我是custom-event 的回调数据' })
```

# Dist / Build

## Development Build

```shell
$ yarn dev
```

## Production Build

```shell
$ yarn build
```
