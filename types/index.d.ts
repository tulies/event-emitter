declare class EventMiddleware {
  /**
   * 实例化构造函数.
   */
  constructor();

  /**
   * 版本号
   */
  static VERSION: string;
  
  /**
   * 返回一个实例化的EventMiddleware对象.
   */
  static instance(): EventMiddleware;

  /**
   * 添加事件监听.
   * @param type 事件类型.
   * @param callback 事件触发的回调.
   * @param options 配置参数.
   */
  static on (type: string, callback: ( data: object ) => void, options?: object): void;

    /**
   * 解除事件监听.
   * @param type 事件类型.
   * @param options 配置参数.
   */
  static unbind (type: string, options?: object): void;


    /**
   * 事件广播.
   * @param type 事件类型.
   * @param data 传递的数据.
   * @param options 额外的配置参数.
   */
  static dispatch (type: string, data: object, options?: object): void;


  /**
   * 添加事件监听.
   * @param type 事件类型.
   * @param callback 事件触发的回调.
   * @param options 配置参数.
   */
  on (type: string, callback: ( data: object ) => void, options?: object): void;

    /**
   * 解除事件监听.
   * @param type 事件类型.
   * @param options 配置参数.
   */
  unbind (type: string, options?: object): void;

    /**
   * 事件广播.
   * @param type 事件类型.
   * @param data 传递的数据.
   * @param options 额外的配置参数.
   */
  dispatch (type: string, data: object, options?: object): void;
}

// declare namespace UUU{
// 	let a:number
// }

// declare module "UUU" {
// 	export =UUU
// }

// export = MVPlayer;
export = EventMiddleware
