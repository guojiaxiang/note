/**
 * Created by 29120 on 2018/8/27.
 */
/*
 var header = document.getElementById('header'),
 buttons = header.getElementsByTagName('a'),
 shopList = document.getElementById('shopList'),
 data = null;
 var xhr = new XMLHttpRequest();
 xhr.open('get', 'data/like.json', false);
 xhr.onreadystatechange = function () {
 if (xhr.readyState == 4 && xhr.status == 200) {
 data = JSON.parse(xhr.responseText)
 }
 };
 xhr.send();
 //console.log(data);
 function bindHtml(data){
 var str = ``;
 data.forEach(function(item,index){
 str+=`<li>
 <img4 src="${item.img4}" alt="">
 <p class="title">${item.title}</p>
 <p class="hot">热度：${item.hot}</p>
 <del>￥9999</del>
 <span>￥${item.price}</span>
 <p class="time">上架时间：${item.time}</p>
 </li>`
 })
 shopList.innerHTML = str
 }
 bindHtml(data);
 for (var i = 0; i < buttons.length; i++) {
 buttons[i].index = -1;
 buttons[i].onclick = function () {
 this.index *= -1;
 var value = this.getAttribute('attrName');
 sortAry.call(this,value);
 changeColor.call(this);
 clearArrow.call(this)
 }
 }
 function sortAry(value, index) {
 var that = this;
 if (value == 'time') {
 data.sort(function (a, b) {
 return (new Date(a.time) - new Date(b.time)) * that.index
 })
 } else {
 data.sort(function (a, b) {
 return (a[value] - b[value]) * that.index
 })
 }
 bindHtml(data)
 }
 function changeColor() {
 this.index;
 var down = this.children[1];
 var up = this.children[0];
 if (this.index === -1) {
 down.classList.add('bg');
 up.classList.remove('bg')
 } else {
 up.classList.add('bg');
 down.classList.remove('bg')
 }
 }
 function clearArrow() {
 for (var i = 0; i < buttons.length; i++) {
 if (this != buttons[i]) {
 buttons[i].children[0].classList.remove('bg');
 buttons[i].children[1].classList.remove('bg');
 buttons[i].index = -1
 }
 }
 }*/









/*
 var header = document.getElementById('header'),
 buttons = header.getElementsByTagName('a'),
 shopList = document.getElementById('shopList'),
 data = null;
 var xhr = new XMLHttpRequest();
 xhr.open('get', 'data/like.json', false);
 xhr.onreadystatechange = function () {
 if (xhr.readyState == 4 && xhr.status == 200) {
 data = JSON.parse(xhr.responseText)
 }
 };
 xhr.send();
 //console.log(data);
 function bindHtml(data) {
 var str = ``;
 data.forEach(function (item, index) {
 str += `<li>
 <img4 src="${item.img4}" alt="">
 <p class="title">${item.title}</p>
 <p class="hot">热度：${item.hot}</p>
 <del>￥9999</del>
 <span>￥${item.price}</span>
 <p class="time">上架时间：${item.time}</p>
 </li>`

 });
 shopList.innerHTML = str
 }
 bindHtml(data);
 for (var i = 0; i < buttons.length; i++) {
 buttons[i].index = -1;
 buttons[i].onclick = function () {
 this.index *= -1;
 var value = this.getAttribute('attrName');
 sortAry.call(this, value);
 changeColor.call(this);
 clearArrow.call(this)
 }
 }
 function sortAry(value, index) {
 console.log(this);
 var that = this;

 if (value == 'time') {
 data.sort(function (a, b) {
 return (new Date(a.time) - new Date(b.time)) * that.index
 })
 } else {
 data.sort(function (a,b) {
 return (a[value] - b[value]) * that.index
 })
 }
 bindHtml(data)
 };
 function changeColor() {
 this.index;
 var down = this.children[1];
 var up = this.children[0];
 if (this.index === -1) {
 down.classList.add('bg');
 up.classList.remove('bg')
 } else {
 up.classList.add('bg');
 down.classList.remove('bg')
 }
 };
 function clearArrow() {
 for (var i = 0; i < buttons.length; i++) {
 if (this != buttons[i]) {
 buttons[i].children[0].classList.remove('bg');
 buttons[i].children[1].classList.remove('bg');
 buttons[i].index = -1
 }
 }
 }*/

/*
 //1.获取元素
 var header = document.getElementById('header'),
 buttons = header.getElementsByTagName('a'),
 shopList = document.getElementById('shopList'),
 data = null;
 //2.通过ajax建立联系(四步)
 var xhr = new XMLHttpRequest();
 xhr.open('get', 'data/like.json', false);
 xhr.onreadystatechange = function () {
 if (xhr.readyState == 4 && xhr.status == 200) {
 data = JSON.parse(xhr.responseText)
 }
 };
 xhr.send();
 console.log(data);
 //3.将js和HTML结构进行绑定
 function bindHtml(data) {
 var str = ``;
 data.forEach(function (item, index) {
 str += `<li>
 <img4 src="${item.img4}" alt="">
 <p class="title">${item.title}</p>
 <p class="hot">热度：${item.hot}</p>
 <del>￥9999</del>
 <span>￥${item.price}</span>
 <p class="time">上架时间：${item.time}</p>
 </li>`
 });
 shopList.innerHTML = str
 }
 bindHtml(data);
 //4.设置点击事件，每次点击之后浏览器都会进行回流，所以应该添加上所有对应的执行函数
 for (var i = 0; i < buttons.length; i++) {
 buttons[i].index = -1;
 buttons[i].onclick = function () {
 this.index *= -1;
 var value = this.getAttribute('attrName');
 sortAry.call(this, value);
 changeColor.call(this);
 clearArrow.call(this)
 }
 }
 //5.编写对应效果的函数方法
 function sortAry(value, index) {
 var that = this;
 if (value == 'time') {
 data.sort(function (a, b) {
 return (new Date(a.time) - new Date(b.time)) * that.index
 })
 } else {
 data.sort(function (a, b) {
 return (a[value] - b[value]) * that.index
 })
 }
 bindHtml(data)//排序完成之后，页面的结构会发生改变所以需要再次跟页面结构绑定
 }
 function changeColor() {
 this.index;
 var down = this.children[1];
 var up = this.children[0];
 if (this.index === -1) {
 down.classList.add('bg');
 up.classList.remove('bg');
 } else {
 up.classList.add('bg');
 down.classList.remove('bg');
 }
 }
 function clearArrow() {
 for (var i = 0; i < buttons.length; i++) {
 if (this != buttons[i]) {
 buttons[i].children[0].classList.remove('bg');
 buttons[i].children[1].classList.remove('bg');
 buttons[i].index = -1
 }
 }
 }
 */

var header = document.getElementById('header'),
    buttons = header.getElementsByTagName('a'),
    shopList = document.getElementById('shopList'),
    data = null;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data/like.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText)
    }
};
xhr.send();
function bindHtml(data) {
    var str = ``;
    data.forEach(function (item, index) {
        str += `<li>
                <img src="${item.img}" alt="">
                <p class="title">${item.title}</p>
                <p class="hot">热度：${item.hot}</p>
                <del>￥9999</del>
                <span>￥${item.price}</span>
                <p class="time">上架时间：${item.time}</p>
            </li>`
    });
    shopList.innerHTML = str
}
bindHtml(data);

for (var i = 0; i < buttons.length; i++) {
    buttons[i].index = -1;
    buttons[i].onclick = function () {
        this.index *= -1;
        var value = this.getAttribute('attrName');
        sortAry.call(this,value);
        changeColor.call(this);
        clearArrow.call(this)
    }
}
function sortAry(value, index) {
    var that = this;
    if (value == 'time') {
        data.sort(function (a, b) {
            return (new Date(a.time) - new Date(b.time)) * that.index
        })
    } else {
        data.sort(function (a, b) {
            return (a[value] - b[value]) * that.index
        })
    }
    bindHtml(data)
};
function changeColor() {
    this.index;
    var down = this.children[1];
    var up = this.children[0];
    if (this.index === -1) {
        down.classList.add('bg');
        up.classList.remove("bg")
    } else {
        up.classList.add('bg');
        down.classList.remove('bg')
    }
};
function clearArrow() {
    for (var i = 0; i < buttons.length; i++) {
        if (this != buttons[i]) {
            buttons[i].children[1].classList.remove('bg');
            buttons[i].children[0].classList.remove('bg');
            buttons[i].index = -1
        }
    }
}



