/**
 * Created by 29120 on 2018/8/31.
 */
var utils = (function () {
let flag='getComputedStyle' in window;
    /*
     * 获取当前浏览器可视窗口的属性
     * */
    function win(key, value) {

        if (value == undefined) {
            //获取属性值
            return document.documentElement[key] || document.body[key];
        }
        document.documentElement[key] = value;
        document.body[key] = value;
    }

    /*
     *
     *  获取当前元素距离body的距离
     */
    function offset(ele) {
        let l = ele.offsetLeft;
        let t = ele.offsetTop;
        let parent = ele.offsetParent;
        while (parent.tagName !== 'BODY') {
            l += parent.clientLeft + parent.offsetLeft;
            t += parent.clientTop + parent.offsetTop;
            //需要不断的更新父级参照物
            parent = parent.offsetParent;
        }
        return {left: l, top: t}
    }

    /*
     * 类数组转数组的方法
     * */
    function toArray(likeAry) {
        try {
            //标准浏览器
            return [].slice.call(likeAry)
        } catch (e) {
            //证明当前浏览器是IE6-8
            let newAry = [];
            for (let i = 0; i < likeAry.length; i++) {
                newAry[newAry.length] = likeAry[i]
            }
        }
    }

    /*
     * JSON字符串转JSON对象
     * eval非常消耗性能，不建议使用
     * */
    function toJSON(str) {
        try {
            return JSON.parse(str)
        } catch (e) {
            return eval('(‘+str+’)')//eval将字符串转换成JS代码
        }
    }

    /*
     * 获取n到m之间的随机数
     * Math.round（Math.random（）*（m-n）+n）
     * */
    function getRandom(n, m) {//正常是n<m
        //防止串的参数是字符串
        n = Number(n);
        m = Number(m);
        //防止n>m
        if (n > m) {
            [n, m] = [m, n]
        }
        return Math.round(Math.random() * (m - n) + n)
    }

    /*
     * 获取当前元素的样式
     * window.getComputedStyle  标准浏览器使用  获取当前元素计算后的样式，在内嵌中
     * window.currentStyle  IE6-8使用
     * */
    function getCss(ele, attr) {
        var value = window.getComputedStyle(ele)[attr];
        var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/;
        //验证是否带单位的值，如果带，去掉单位转成数字
        if (reg.test(value)) {
            value = parseFloat(value);
        }
        return value
    }

    /*
     * 设置当前元素的样式
     * ele.style.xxx=xxx
     * */
    function setCss(ele, attr, value) {
        //筛选正确的样式值的格式  是否有单位
        var reg = /^width|height|fontSize|(margin|padding)?(left|top|right|bottom)|(margin|padding)$/i;
        //判断传进来的属性是否是符合正则的格式，如果匹配，判断一下要设置的属性值是否带有单位，决定是否给其添加单位
        if (reg.test(attr)) {
            /* /^(px|pt|em|rem)$/*/
           // debugger;//断点，主要用来调试js代码。写在哪一行JS运行到那一行就会暂停，除非JS代码根本没有加载到这一行，debugger不会让浏览器暂停正在运行的JS代码，
            // F8跳转到下一个debugger，
            // F10跳转到下一行，但是不会进入到函数中逐行调试
            // F11会逐行进行调试，【包括进入到函数中】
            /px/.test(value.toString()) ? null : value += 'px'
        }
        ele.style[attr] = value;
    }

    /*
     * 批量给元素设置样式
     * 
     * */
    function setGroupCss(ele, obj = {}) {
        if (obj instanceof Object) {
            for (var key in obj) {
//for in 循环会便利obj这个对象上所有的可枚举属性
                //可枚举属性：obj上的私有属性和手动给obj设置的公有属性，
                // obj天生自带的公有属性，不属于obj的可枚举属性
                if(obj.hasOwnProperty(key)){
                    //我们只需要obj上的私有属性，通过hasOwnProperty这个属性拿到它的私有属性进行循环设置
                    setCss(ele,key,obj[key])
                }else {
                    getCss(...arg)
                }
            }
        }
    }
    /*
    * 将getCss、setCss和setGroupCss绑定到一起，封装成一个css方法
    * 
    * 
    * */
    function css(...arg) {
        //判断传入的参数个数，如果个数为3个的时候，则用setCss
        if(arg.length===3){
            setCss(...arg)
        }else{
            //如果传入的第二个参数为一个对象的时候，我们调用setGroupCss这个方法进行批量设置
            if(Object.prototype.toString.call(arg[1])==='[object,Object]'){
                setGroupCss(...arg)
            }else{
                //否则属于获取到当前元素的属性
                return getCss(...arg)
            }
        }
    }

    return {
        win: win,//属性名和属性值相同时可以只写一个,
        offset,
        toArray,
        toJSON,
        getRandom,
        getCss,
        setCss,
        setGroupCss,
        css,
    }


})();
