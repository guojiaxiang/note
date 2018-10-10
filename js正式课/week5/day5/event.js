/**
 * Created by 29120 on 2018/9/16.
 */
//系统事件的绑定 ->订阅发布模式
//什么叫事件 简单来说就是一件事
//当这件事发生时，做什么事情（绑定的行为）
//事件类型 click mousedown mousemove mouseup
//自定义事件 （事件类型？是自己随便起的）
//on 把事件计划好          订阅  把计划的事件放到事件池中
//fire 把计划好的事情执行   发布
//off 把计划好的事情取消    取消订阅


//自定义事件库
function on(ele, type, fn) {
    //事件池，把它作为ele的属性
    if (!ele['my' + type]) {
        ele['my' + type] = [];
    }
    var a = ele['my' + type];
    for (var i = 0; i < a.length; i++) {
        if (a[i] === fn) {
            return
        }
    }
    a.push(fn)

}
function fire(type, e) {//把绑定的事件行为执行
    var a = this['my' + type];
    if (a && a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            if (typeof a[i] === 'function') {
                a[i].call(this, e)//把绑定的事件执行，同时把行为中的this改成绑定的元素
            } else {
                a.splice(i, 1);
                i--;
            }
        }
    }
}
function off(ele, type, fn) {
//把fn这个行为从事件池中移除（假移除）
    var a = ele['my' + type];
    if (a && a.length > 0) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === fn) {
                a[i] = null;
            }
        }
    }
}