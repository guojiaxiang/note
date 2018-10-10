/**
 * Created by 29120 on 2018/9/6.
 */
(function () {
    let utils=(function () {
        function getCss(ele, attr) {
            let value = window.getComputedStyle(ele)[attr];
            var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem|%)?$/i;
            if (reg.test(value)) {
                value = parseFloat(value);
            }
            return value
        }
        function setCss(ele, attr, value) {
            var reg = /^(width|height|fontSize|(margin|padding)|(margin|padding)?(left|top|bottom|right))$/i;
            if (reg.test(attr)) {
                /px/.test(value.toString()) ? null : value += 'px';
            }
            ele.style[attr] = value;
        }
        function setGroupCss(ele, obj = {}) {
            if (obj instanceof Object) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        setCss(ele, key, obj[key])
                    }
                }
            }
        }
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
    function animate(ele,target={},duration,callback) {
        if(typeof duration==='function'){////?????有一种情况是
            // 传三个参数，当第三个参数为函数的时候，执行该步骤。
            // 如果第三个参数是时间的时候，跳过该步骤
            callback=duration;//?????
            duration=2000
        }
        let begin={},change={},time=0;
        for (var key in target){
            begin[key]=utils.css(ele,key);
            change[key]=target[key]-begin[key];
        }
        //在下一个进行设置定时器时，我们需要把上一个定时器清除
        clearInterval(ele.timer);//?????
        ele.timer=setInterval(()=>{
            time+=17;
            if(time>=duration){
                clearInterval(ele.timer);
                utils.css(ele,target);
                if(typeof callback==='function'){////?????让回调函数
                    // 执行
                    callback.call(ele)
                }
                return;
            }
            for (var key in change){
                //循环change中的每一项，拿到我们要设置的值，cur会根据time不同，不断进行更新
                var cur =linear(time,duration,change[key],begin[key]);
                utils.css(ele,key,cur)
            }
        },17)
    }
    //通过给全局变量赋值，我们可以在外面进行调用
    window.animate=animate;
    window.utils=utils;
})();