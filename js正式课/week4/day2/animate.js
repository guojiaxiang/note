/**
 * Created by 29120 on 2018/9/5.
 */
(function () {
    let utils=(function () {
        function getCss(ele, attr) {
            let value = window.getComputedStyle(ele)[attr];
            //获取到的value是一个字符串，需要转数字
            //而且我们需要拿到这个值进行计算，带有单位的值，需要去掉单位
            var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem|%)?$/i;
            if (reg.test(value)) {
                value = parseFloat(value);
            }
            return value
        }

        /*
         *
         * setCss
         * 给元素设置样式
         * */
        function setCss(ele, attr, value) {
            //需要过滤有像素px单位的元素
            var reg = /^(width|height|fontSize|(margin|padding)|(margin|padding)?(left|top|bottom|right))$/i;
            if (reg.test(attr)) {
                /px/.test(value.toString()) ? null : value += 'px';
            }
            ele.style[attr] = value;
        }

        /*
         * setGroupCss
         * */
        function setGroupCss(ele, obj = {}) {
            if (obj instanceof Object) {
                for (var key in obj) {
                    //for in循环是在循环对象上的可枚举属性【对象的私有属性和给对象设置的公有属性，注意 天生自带的公有属性是不包括的】
                    if (obj.hasOwnProperty(key)) {//判断obj中的值是否是私有属性
                        setCss(ele, key, obj[key])
                    }
                }
            }
        }

        /*
         * css
         * 把三个属性和到一起
         * */
        function css(...arg) {
            if (arg.length === 3) {
                setCss(...arg);
            } else if (arg.length === 2) {
                if(Object.prototype.toString.call(arg[1]) === '[object Object]'){

                    setGroupCss(...arg)
                } else {
                    return getCss(...arg)
                }
            }
        }
        return{css}
    })();
   let linear=function (time,duration,change,begin) {
       return time/duration*change+begin
   };
    //1.当前元素 2.元素运动的终点 3.花费的时间 4.callback，动画完成之后的回调函数
   window.animate=function (ele,target={},duration,callback) {
       //如果没有给时间但是设置了回调函数
       if(typeof duration==='function'){
           //就让形参callback等于设置的那个函数
           callback=duration;
           //时间给一个默认值2000
           duration=2000;
       }
       //开始给change进行设置
       let change={},timer=0,begin={};
       //需要循环target中的每一项
       for(var key in target) {
           //拿到begin这个对象中的属性键值对，就是元素一开始身上原有的属性值
           begin[key] = utils.css(ele, key);
           //计算change【要改变的属性】，通过让终点的值减去起点的值
           change[key] = target[key] - begin[key];
       }
       //在元素的自定义属性上添加一个定时器
           ele.timer=setInterval(()=>{
           //定时器执行的时候，每次让timer+17ms
               timer+=17;
               //当timer时间大于我们设置的终点的时间时，清除定时器
               if(timer>=duration){
                   //清除定时器
                   clearInterval(ele.timer);
                   //把元素设置为终点的值
                   utils.css(ele,target);
                   //判断回调函数存在，让回调函数执行，让回调函数中的this变成当前的元素
                   callback&&callback.call(ele);
                   //加return不再让下面的代码执行
                   return
               }
               //要让元素发生动画，需要循环change
               for (var key in change){
                   //求出每一项要改变的属性值通过匀速直线运动公式
                   var cur =linear(timer,duration,change[key],begin[key]);
                   //通过utils设置样式
                   utils.css(ele,key,cur)
               }
           },17)

   }
})()
