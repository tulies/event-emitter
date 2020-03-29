
 // 添加消息监听
 EventMiddleware.on('custom-event-1',function(data){
  console.log(new Date(),'custom-event-1 回调中返回：',data);
});

 // 添加消息监听
 EventMiddleware.on('custom-event-2',function(data){
  console.log(new Date(),'custom-event-2 回调中返回：',data);
});


document.getElementById('custom-event-1').addEventListener('click',function(){
  EventMiddleware.dispatch('custom-event-1',{
    name:'我是custom-event-1的回调数据'
  })
})

document.getElementById('custom-event-2').addEventListener('click',function(){
  EventMiddleware.dispatch('custom-event-2',{
    name:'我是custom-event-2的回调数据'
  })
})


/**** optios的使用 */

 // 添加消息监听
 EventMiddleware.on('custom-event-3',function(data){
  console.log(new Date(),'custom-event-3, id-1 回调中返回：',data);
},{id:'id1'});

 // 添加消息监听
 EventMiddleware.on('custom-event-3',function(data){
  console.log(new Date(),'custom-event-3, id-2 回调中返回：',data);
},{id:'id2'});


document.getElementById('custom-event-3-all').addEventListener('click',function(){
  EventMiddleware.dispatch('custom-event-3',{
    name:'我是custom-event-3的回调数据'
  })
})

document.getElementById('custom-event-3-id1').addEventListener('click',function(){
  EventMiddleware.dispatch('custom-event-3',{
    name:'我是custom-event-3的回调数据'
  },{id:'id1'})
})


/***  使用new出来的实例 */
var eventMiddleware = new EventMiddleware();

 // 添加消息监听，这里事件名称和上面的一样，但是你会发现互不冲突
 eventMiddleware.on('custom-event-1',function(data){
  console.log(new Date(),'custom-event-1 回调中返回：',data);
});

document.getElementById('custom-event-4').addEventListener('click',function(){
  eventMiddleware.dispatch('custom-event-1',{
    name:'我是new出来的custom-event-1的回调数据'
  })
})

