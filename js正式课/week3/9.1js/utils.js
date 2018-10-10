/**
 * Created by 29120 on 2018/9/1.
 */
var utils = (function () {
    // offset方法：求出当前元素距离body的偏移量
    function offset(ele) {
        let l = ele.offsetLeft;
        let t = ele.offsetTop;
        //如果元素的父级有定位则需要判断
        let parent = ele.offsetParent;
        while (parent) {//直到parent为null【当parent上一次循环为body的时候，才进不来这个循环】
            l += parent.offsetLeft + parent.clientLeft;
            t += parent.offsetTop + parent.clientTop;
            //防止死循环，更新parent,给parent赋值，让其等于其父级参照物
            parent = parent.offsetParent;
        }
        return {left: l, top: t}
    }

    /*
     * 封装浏览器盒子模型属性
     *
     * */
    function win(attr, value) {
        //判断第二个参数有没有传入，如果有证明我是要设置，如果没有传，只是来求这个值
        if (value == undefined) {
            return document.documentElement[attr] || document.body[attr];
        } else {
            document.documentElement[attr] = value;
            document.body[attr] = value;
        }
    }

    /*
     * 类数组转数组
     *
     * */
    function toArray(likeAry) {
        try {//通过改变slice中的this，克隆一份像likeAry一样的数组
            return [].slice.call(likeAry)
        } catch (e) {
            var newAry = [];
            for (var i = 0; i < likeAry; i++) {
                newAry.push(likeAry[i])
            }
            return newAry
        }
    }

    /*
     * getCss 通过该方法获得某一个元素上的属性
     *
     *
     * */

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
        var reg = /^(wisth|height|fontSize|(margin|padding)|(margin|padding)?(left|top|bottom|right))$/i;
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
            if (arg[i] instanceof Object) {
                setGroupCss(...arg)
            } else {
                return getCss(...arg)
            }
        }
    }

    return {
        offset,
        win,
        toArray,
        getCss,
        setCss,
        setGroupCss,
        css,
    }
})();
utils.offset(box);
utils.win('clientHeight');
utils.win('scrollTop', 100)