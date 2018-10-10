/**
 * Created by 29120 on 2018/9/6.
 */
//获取元素
let outer=document.getElementById('outer');
let swiper=document.getElementById('swiper');
let focus=document.getElementById('focus');
let left=outer.getElementsByTagName('a')[0];
let right=outer.getElementsByTagName('a')[1];
let imgs=swiper.getElementsByTagName('img');
let lis=focus.getElementsByTagName('li');
let data=null;
let step=0;
let timer=null;
//通过ajax拿到数据
let xhr=new XMLHttpRequest();
xhr.open('get','img4/data.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        data=JSON.parse(xhr.responseText)
    }
};
xhr.send();
console.log(data);
//绑定数据
function bindHTML() {
    var imgStr=``,lisStr=``;
    for(var i=0;i<data.length;i++){
        //通过data的数量，给页面添加相对应的图片
        imgStr+=`<div><img data-src="img/${data[i].src}" alt=""></div>`;
        //给页面添加相对应的小圆点，第一个小圆点默认是选中的样式
        lisStr+=`<li class="${i===0?'selected':''}"></li>`
    }
    //在图片的末尾在增加第一张
    imgStr+=`<div><img data-src="img/${data[0].src}" alt=""></div>`;
    swiper.innerHTML=imgStr;
    focus.innerHTML=lisStr;
    //再给swiper这个标签设置宽度【在添加一张图片的宽度】
    utils.css(swiper,'width',1000*(data.length+1));
    utils.css(focus,'marginLeft',-(focus.offsetWidth/2));
}
bindHTML(data);
//延迟加载
function lazyIMG() {
    for(let i=0;i<imgs.length;i++){
        let cur =imgs[i];
        let newImg=new Image();
        let url=cur.getAttribute('data-src');
        newImg.src=url;
        //所有的事件都是异步执行，所以当执行这个函数的时候，
        // 函数中的变量会向上级去找，可是上级中的cur所代表的imgs[i],
        // i值已经变成最大值
        newImg.onload=function () {
            cur.src=this.src;
            newImg=null;
animate(cur,{opacity:1},3000);
        }
    }

}
lazyIMG();
//图片滚动
timer=setInterval(autoMove,2000);
function autoMove() {
    step++;
    if(step>=data.length){
        step=0;
        utils.css(swiper,'left',0)
    }
    utils.css(swiper,'left',-1000*step);
    focusTip()
}
//小圆点滚动
function focusTip() {
    for(var i=0;i<lis.length;i++){
        if(step===i){
            lis[i].classList.add('selected')
        }else {
            lis[i].classList.remove('selected')
        }if(step===data.length){
            lis[0].classList.add('selected')
        }
    }
}
// 滑入停止
outer.onmouseover=function () {
    clearInterval(timer);
    utils.css(left,'display','block');
    utils.css(right,'display','block');

}
// 滑出继续
outer.onmouseout=function () {
    timer=setInterval(autoMove,2000);
    utils.css(left,'display','none');
    utils.css(right,'display','none');

}

// 点击小圆点跳转
function roundClick() {
    //循环每一个li
    for (let i=0;i<lis.length;i++){
        //给每一个li添加一个点击事件
        lis[i].onclick=function () {
            //修改step的值，让它等于i-1
            step=i-1;
            //再继续执行一次autoMove
            autoMove()
        }
    }
}
roundClick()
// 点击左按钮跳转
left.onclick=function () {
    //当step小于0的时候
    if(step<=0){
        //让step等于最后那张
        step=data.length;
        //让图片瞬间跳到最后那一张
        utils.css(swiper,'left',-1000*step)
    }
    //点击左侧按钮的时候，让step递减
    step--;
    //轮播图向左在移动1000px
    utils.css(swiper,'left',-1000*step);
    focusTip()
};
// 点击右按钮跳转
right.onclick=function () {
    autoMove()
}