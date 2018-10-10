/**
 * Created by 29120 on 2018/9/6.
 */
var utils = (function () {
    //offset方法：求出当前元素距离body的偏移量
    function offset(ele) {
        let l = ele.offsetLeft;
        let t = ele.offsetTop;
        let parent = ele.offsetParent;
        while (parent) {
            l += parent.offsetLeft + parent.clientLeft;
            t += parent.offsetTop + parent.clientTop;
            parent = parent.offsetParent;
        }
        return {left: l, top: t}
    }

    //封装浏览器盒子模型属性
    function win(attr, value) {
        if (value == undefined) {
            return document.documentElement[attr] || document.body[attr];////?????
        } else {
            document.documentElement[attr] = value;
            document.body[attr] = value;
        }
    }

    //类数组转数组
    function toArray(likeAry) {
        try {
            return [].slice.call(likeAry)
        } catch (e) {
            var newAry = [];
            for (var i = 0; i < likeAry.length; i++) {
                newAry.push(likeAry[i])
            }
            return newAry
        }
    }

    //getCss通过该方法获得某个元素上的属性值
    function getCss(ele, attr) {
        let value = window.getComputedStyle(ele)[attr];
        var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem|%)?$/i;
        if (reg.test(value)) {
            value = parseFloat(value);
        }
        return value
    }

    //通过setCss给元素设置样式
    function setCss(ele, attr, value) {
        var reg = /^(width|height|fontSize|(margin|padding)?(left|top|bottom|right))$/i;
        if (reg.test(attr)) {
            /px/.test(value.toString()) ? null : value += 'px';
        }
        ele.style[attr] = value;
    }

    //通过setGroupCss给元素进行批量赋值
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
            if (arg[1] instanceof Object) {//Object.prototype.toString.call(arg[1])==='[object Object]'){///?????
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
        setGroupCss,
        setCss,
        css,
    }

})();