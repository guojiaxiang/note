/**
 * Created by 29120 on 2018/8/28.
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
console.log(data);
function bindHtml(data) {
    var str = ``;
    data.forEach(function (item, index) {
        shopList.innerHTML += `<li>
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <p class="hot">热度：${item.hot}</p>
            <del>￥9999</del>
            <span>￥${item.price}</span>
            <p class="time">上架时间 :${item.time}</p>
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
        sortAry.call(this, value);
        changeColor.call(this);
        clearArrow.call(this)
    }

}
;
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
    var down = this.children[1],
        up = this.children[0];
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
            buttons[i].children[1].classList.remove('bg');
            buttons[i].children[0].classList.remove('bg');
            buttons[i].index = -1
        }
    }
}
