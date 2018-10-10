/**
 * Created by 29120 on 2018/8/31.
 */
//获取元素
let box = document.getElementById('box');
let uls = box.getElementsByTagName('ul');
uls = utils.toArray(uls);
let data = null;
let minH = null;
let stop = 0;
let imgs = box.getElementsByTagName('img');
//请求数据ajax
//ajax();
function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = utils.toJSON(xhr.responseText);
            //请求完数据，让页面展示绑定好的数据
            bindHtml(20)
        }
    };
    xhr.send();
}
ajax();
console.log(data);
//绑定数据在页面显示
function bindHtml(n) {
    //n代表循环n项，就向页面中插入n项，
    for (var i = 0; i < n; i++) {
        //每一次循环，都需要求出5个ul中，长度最短的那个
        uls.sort(function (a, b) {
            //通过js盒子上的属性offsetHeight
            return a.offsetHeight - b.offsetHeight
        })
        //图片是随机的所以需要求一个随机数,根据JSON数据内容给定的
        let num = utils.getRandom(0, 21);
        //长度最短的那个就是索引为0的那个
        uls[0].innerHTML += `<li>
            <div style="height: ${data[num].height}px">
            <img data-src="${data[num].img}" alt="">
            
            </div>
            <p>这是第${num}张图片</p>
            </li>`;
        minH = uls[0].offsetHeight
    }
}
//滑到底部之后继续加载
let winH = utils.win('clientHeight');
window.onscroll = function () {//触发onscroll事件
// 要对浏览器滚动条进行判断
    //滚动条卷出去的距离+浏览器一屏幕的高度>uls[0]【最长的ul的高度】
    //继续请求数据
    let winT = utils.win('scrollTop');//不断变化
    if (winH + winT > minH) {
        stop++;
        if (stop > 10) {
            alert('已经到底部了呦');
            window.onscroll = null;
            return
        }
        ajax();
    }
    //便利每一张图片，然后对图片进行延迟加载
    /*for (var i = 0; i < imgs.length; i++) {
     lazyImg(imgs[i])
     }*/
    lazy()
};
//让首屏显示
lazy();
function lazy() {
    for (var i = 0; i < imgs.length; i++) {
        lazyImg(imgs[i])
    }
}
//设置延迟加载
function lazyImg(ele) {
    if(ele.load)return;
    //计算每一张图片距离body顶部的偏移量
    let imgT = utils.offset(ele).top;
    //计算每一张图片自身的高度
    let imgH = ele.offsetHeight / 2;
    //计算屏幕卷上去的高度
    let winT = utils.win('scrollTop');
    //开始判断
    // 浏览器屏幕的高度+浏览器卷上去的高度>图片自身的高度+图片距离body的上偏移量
    if (winT + winH > imgT + imgH) {
        //创建一个新的图片
        let newImg = new Image;
        //获取行内样式中的data-src上的真实图片
        let url = ele.getAttribute('data-src');
        //获取到赋值给新图片的src属性
        newImg.src = url;
        //尝试让newImg加载，如果加载成功，把这个地址还给真实的img图片
        newImg.onload = function () {
            ele.src = this.src;
            //可以进行一些性能优化
            newImg = null;
           ele.load = true;//给图片一个自定义属性，下次再碰到这张图片的时候，不会重新加载
            ele.parentNode.style.background = 'none';//图片已经有了，就不需要loading图，就可以直接去掉它了
            fadeIn(ele)
        }
    }
}
//让图片进行逐渐显示

function fadeIn(ele) {
    //获取真实图片的透明度
    let opacity = utils.css(ele, 'opacity');
    //设置定时器让图片逐渐显示
    ele.timer = setInterval(() => {
        opacity += 0.04;
        //透明度加完之后还给ele图片标签
        utils.css(ele, 'opacity', opacity);
        //当图片透明度大于等于1的时候让定时器停止
        if (opacity >= 1) {
            clearInterval(ele.timer);
            utils.css(ele, 'opacity', 1);
        }
    }, 13)
}

