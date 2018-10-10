/**
 * Created by 29120 on 2018/8/29.
 */
var utils=(function () {
    var flag ='getComputedStyle' in window;
    //封装win方法
    function win(key,value) {
        if(value==undefined){
            return document.documentElement[key]||document.body[key]
        }
        document.documentElement[key] =value;
        document.body[key]=value
    }
    //封装offset方法
    function offset(ele) {
        let l=ele.offsetLeft;
        let t=ele.offsetTop;
        let parent=ele.offsetParent;
        console.dir(parent);
        //判断父级元素是不是body，如果是，证明已经到了最外层的body元素，就不用再循环了；如果不是，我们需要继续循环父级参照物，并累加父级参照物的边框以及偏移量
        while(parent.tagName!='BODY'){
            //需要累加父级参照物的左边框
            l+=parent.clientLeft;
            t+=parent.clientTop;
            //需要累加父级参照物的左偏移量
            l+=parent.offsetLeft;
            t+=parent.offsetTop;
            parent=parent.offsetParent//更新父级参照物，如果不更新则会进入死循环
        }

        return {left:l,top:t}
    }
    //封装类数组转数组
    function toArray(likeAry) {
        if(flag){
            //标准浏览器
            return [].slice.call(likeAry)
        }else{
            //IE浏览器
            let ary=[];
            for (var i=0;i<likeAry.length;i++){
                ary.push(likeAry[i])
            }
            return ary
        }
    }
    return {
        win:win,//属性名和属性值一样的时候可以简写，只写一个win
        offset:offset,
        toArray:toArray
    }
})()
