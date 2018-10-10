/**
 * Created by 29120 on 2018/8/23.
 */
//1.获取元素
var header = document.getElementById('header');
var buttons = header.getElementsByTagName('a');
var shopList = document.getElementById('shopList');
var data = null;
//2.请求数据
var xhr = new XMLHttpRequest();
xhr.open('get', 'data/like.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText)
    }
}
xhr.send();
//console.log(data);
//3.将数据绑定到页面中
function bindHtml(data) {
    var str = ``;
    data.forEach(function (item, index) {
        str += ` <li>
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <p class="hot">热度 ${item.hot}</p>
            <del>￥9999</del>
            <span>${item.price}</span>
            <p class="time">上架时间：${item.time}</p>
        </li>`
    })
    shopList.innerHTML = str
}
bindHtml(data);
//4.给每一个按钮添加点击事件 实现排序
for (var i = 0; i < buttons.length; i++) {
    buttons[i].index = -1;
    buttons[i].onclick = function () {
        this.index *= -1
        var value = this.getAttribute('attrName');
        productSort.call(this, value);
        changeArrow.call(this);
        clearArrow.call(this)
    }
}

function productSort(value) {
    /* if(value==='hot'){
     data.sort(function (a,b) {
     return a.hot-b.hot
     })
     }else if(value==='price'){
     data.sort(function (a,b) {
     return a.price-b.price
     })
     }else*/
    var _this = this;
    if (value === 'time') {//如果点击的是时间，需要将时间转化成毫秒数在进行相减
        data.sort(function (a, b) {
            return (new Date(a.time) - new Date(b.time)) * _this.index
        })
    } else {
        data.sort(function (a, b) {//如果不是时间，直接相减
            return (a[value] - b[value]) * _this.index//我们可以在对象后边加一个变量
        })
    }
    bindHtml(data)
}
//5.点击的时候让箭头显示
function changeArrow() {
    this.index;//1 正序  -1  倒叙;通过获取this下的元素子节点对应所有，找到up和down两个元素
    var down=this.children[1];
    var up=this.children[0];
    if(this.index<0){//根据a标签上的行内自定义属性所对应的属性值变换，判断是否为升序还是降序
        down.classList.add('bg')
        up.classList.remove('bg')
    }else {
        down.classList.remove('bg')
        up.classList.add('bg')

    }
}
//6.清除其他箭头的颜色
function clearArrow() {
    for (var i=0;i<buttons.length;i++){
        //判断但前点击的元素是否是循环中的一个元素
        //如果循环的三个点击那妞不是我们当前点击的元素，我将清除掉bg类名
        if(this!=buttons[i]){
            buttons[i].children[0].classList.remove('bg');
            buttons[i].children[1].classList.remove('bg');
            buttons[i].index=-1
        }
    }
}
