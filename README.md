# EventEmitter

JS 自定义事件消息通知，类似 jquey 的事件机制。

If I can help you, please give me a star, tahnk you!

# Installation

## ES Module Import

```shell
yarn add @tulies/event-emitter
```

```javascript
import EventEmitter from '@tulies/event-emitter'
```

## 引入文件

```html
<script src="/dist/event-emitter.umd.js"></script>
<script>
  EventEmitter.on(type, listener)
</script>
```

# Basic Usage

## 全局调用，全局共享事件监听。

```javascript
const listener = function (data) {
  console.log(new Date(), 'custom-event 回调中返回：', data)
}
// 添加事件监听
EventEmitter.on('custom-event', listener)

// 取消事件监听
EventEmitter.off('custom-event', listener)

// 事件消息通知
EventEmitter.emit('custom-event', { name: '我是custom-event 的回调数据' })
```

## 具体实例调用，每个实例相互独立

```javascript
var eventEmitter = new EventEmitter()
const listener = function (data) {
  console.log(new Date(), 'custom-event 回调中返回：', data)
}
// 添加事件监听
eventEmitter.on('custom-event', listener)

// 取消事件监听
eventEmitter.off('custom-event', listener)

// 事件消息通知
eventEmitter.emit('custom-event', { name: '我是custom-event 的回调数据' })
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
