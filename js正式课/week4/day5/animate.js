/**
 * Created by 29120 on 2018/9/9.
 */
//封装动画效果
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
    };//公式
    function animate(ele,target={},duration,callback) {
        if(typeof duration==='function'){
            callback=duration;
            duration=2000;
        }
        let time=0,begin={},change={};
        for(var key in target){
            begin[key]=utils.css(ele,key);
            change[key]=target[key]-begin[key];
        }
        clearInterval(ele.timer);
        ele.timer=setInterval(()=>{
            time+=17;
            if(time>=duration){
                clearInterval(ele.timer);
                utils.css(ele,target);
                if(typeof callback==='function'){
                    callback.call(ele)
                }
                return
            }
            for (var key in change){
                var cur=linear(time,duration,change[key],begin[key]);
                utils.css(ele,key,cur);
            }
        },17)
    }
    window.animate=animate;
    window.utils=utils;
})();

