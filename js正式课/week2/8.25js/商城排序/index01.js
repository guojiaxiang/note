/**
 * Created by 29120 on 2018/8/25.
 */
//1.获取操作元素
var header = document.getElementById('header');
var buttons = header.getElementsByTagName('a');
var shopList = document.getElementById('shopList');
data = null;
//2.请求服务端数据进行展示
var xhr = new XMLHttpRequest();
xhr.open('get', 'data/like.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText)
    }
};
xhr.send();
//console.log(data);
//3.将数据绑定到页面中
function bindHtml(data) {
    var str = ``;
    data.forEach(function (item, index) {
        str += `  <li>
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <p class="hot">热度：${item.hot}</p>
            <del>￥9999</del>
            <span>￥${item.price}</span>
            <p class="time">上架时间 :${item.time}</p>
        </li>`
    })
    shopList.innerHTML = str;
}
bindHtml(data);
//4.点击按钮实现排序
for (var i = 0; i < buttons.length; i++) {
    buttons[i].index = -1;
    buttons[i].onclick = function () {
        //先循环数据排序，在绑定页面展示
        this.index *= -1
        var value = this.getAttribute('attrName');
        productSort.call(this, value);
        changeArrow.call(this);
        clearArrow.call(this);
        changeColor.call(this);
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
//5.让排序按钮箭头根据正序倒叙改变颜色
function changeColor() {
    this.index;
    var down = this.children[1];
    var up = this.children[0];
    if (this.index === -1) {
        down.classList.add('bg');
        up.classList.remove('bg');
    } else {
        up.classList.add('bg');
        down.classList.remove('bg')
    }
}
//6.只保留最后点击的那个按钮，其他的按钮颜色全部清空
function clearArrow() {
    for (var i = 0; i < buttons.length; i++) {
        if (this != buttons[i]) {
            buttons[i].children[0].classList.remove('bg');
            buttons[i].children[1].classList.remove('bg');
            buttons[i].index = -1
        }
    }
}