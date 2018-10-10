/*
 /!**
 * Created by 29120 on 2018/9/8.
 *!/
 let outer = document.getElementById('outer');
 let swiper = document.getElementById('swiper');
 let focus = document.getElementById('focus');
 let imgs = swiper.getElementsByTagName('img');
 let lis = focus.getElementsByTagName('li');
 let left = outer.getElementsByTagName('a')[0];
 let right = outer.getElementsByTagName('a')[1];
 let data = null;
 let timer = null;
 let step = 0;
 let isClick = true;
 var xhr = new XMLHttpRequest();
 xhr.open('get', 'img/data.json', false);
 xhr.onreadystatechange = function () {
 if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
 data = JSON.parse(xhr.responseText);
 bindHTML();
 }
 };
 xhr.send();
 console.log(data);
 function bindHTML() {
 var imgStr = ``, lisStr = ``;
 for (var i = 0; i < data.length; i++) {
 imgStr += `<div><img data-src="img/${data[i].src}" alt=""></div>`;
 lisStr += `<li class="${i === 0 ? 'selected' : ''}"></li>`
 }
 imgStr += `<div><img data-src="img/${data[0].src}" alt=""></div>`;
 swiper.innerHTML = imgStr;
 focus.innerHTML = lisStr;
 utils.css(swiper, 'width', 1000 * (data.length + 1));
 lazyImg()
 };
 function lazyImg() {
 for (let i = 0; i < imgs.length; i++) {
 let cur = imgs[i];
 var newImg = new Image;
 let url = cur.getAttribute('data-src');
 newImg.src = url;
 newImg.onload=function () {
 cur.src=this.src;
 newImg = null;
 animate(cur, {opacity: 1}, 300)
 }
 }
 }
 timer = setInterval(autoMove, 2000);
 function autoMove() {
 if (step > data.length) {
 step = 0;
 utils.css(swiper, 'left', 0)
 }
 step++;
 animate(swiper, {left: -1000 * step}, 1000, function () {
 isClick = true;
 });
 focusTip();
 }
 function focusTip() {
 for (var i = 0; i < lis.length; i++) {
 if (step === i) {
 lis[i].classList.add('selected')
 } else {
 lis[i].classList.remove('selected')
 }
 if (step === data.length) {
 lis[0].classList.add('selected')
 }
 }
 }
 outer.onmouseover = function () {
 clearInterval(timer);
 utils.css(left, 'display', 'block');
 utils.css(right, 'display', 'block')
 };
 outer.onmouseout = function () {
 timer = setInterval(autoMove, 2000);
 utils.css(left, 'display', 'none');
 utils.css(right, 'display', 'none');
 };
 right.onclick = function () {
 if (isClick) {
 isClick = false;
 autoMove()
 }
 };
 left.onclick = function () {
 if (isClick) {
 isClick = false;
 if (step <= 0) {
 step = data.length;
 utils.css(swiper, 'left', step * -1000)
 }
 step--;
 animate(swiper, {left: -1000 * step}, 1000, function () {
 isClick = true;
 });
 focusTip();
 }
 };
 for (var i = 0; i < lis.length; i++) {
 lis[i].onclick = function () {
 if (isClick) {
 isClick = false;
 step = i - 1;
 autoMove()
 }
 }
 }
 document.onvisibilitychange = function () {
 if (document.visibilityState == 'hidden') {
 clearInterval(timer);
 } else {
 timer = setInterval(autoMove, 2000)
 }
 }*/
/*
 let outer = document.getElementById('outer');
 let swiper = document.getElementById('swiper');
 let focus = document.getElementById('focus');
 let left = outer.getElementsByTagName('a')[0];
 let right = outer.getElementsByTagName('a')[1];
 let imgs = swiper.getElementsByTagName('img4');
 let lis = focus.getElementsByTagName('li');
 let data = null;
 let step = 0;
 let timer = null;
 let xhr = new XMLHttpRequest();
 xhr.open('get', 'img4/data.json', false);
 xhr.onreadystatechange = function () {
 if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
 data = JSON.parse(xhr.responseText)
 }
 };
 xhr.send();
 console.log(data);
 function bindHtml() {
 var imgStr = ``, liStr = ``;
 for (var i = 0; i < data.length; i++) {
 imgStr += `<div><img4 data-src="img4/${data[i].src}" alt=""></div>`;
 liStr += `<li class="${i === 0 ? 'selected' : ''}"></li>`
 }
 imgStr+=`<div><img4 data-src="img4/${data[0].src}" alt=""></div>`;
 swiper.innerHTML=imgStr;
 focus.innerHTML=liStr;
 utils.css(swiper,'width',1000*(data.length+1));
 utils.css(focus,'marginLeft',-(focus.offsetWidth/2));
 }
 bindHtml(data);
 function lazyImg() {
 for(let i=0;i<imgs.length;i++){
 let cur=imgs[i];
 let newImg=new Image();
 let url=cur.getAttribute('data-src');
 newImg.src=url;
 newImg.onload=function () {
 cur.src=this.src;
 newImg=null;
 animate(cur,{opacity:1},3000);
 }
 }
 }
 lazyImg();
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
 function focusTip() {
 for(var i=0;i<lis.length;i++){
 if(step===i){
 lis[i].classList.add('selected');
 }else {
 lis[i].classList.remove('selected');
 }if(step===data.length){
 lis[0].classList.add('selected')///?
 }
 }
 }
 outer.onmouseover=function () {
 clearInterval(timer);
 utils.css(left,'display','block');
 utils.css(right,'display','block')
 };
 outer.onmouseout=function () {
 timer=setInterval(autoMove,2000);
 utils.css(left,'display','none');
 utils.css(right,'display','none')
 };
 function roundClick() {
 for(let i=0;i<lis.length;i++){
 lis[i].onclick=function () {
 step=i-1;///?
 autoMove()
 }
 }
 }
 roundClick();
 right.onclick=function () {
 autoMove()
 };
 left.onclick=function () {
 if(step<=0){
 step=data.length;
 utils.css(swiper,'left',-1000*step);
 }
 step--;
 utils.css(swiper,'left',-1000*step);
 focusTip()
 };*/
/*
 let outer=document.getElementById('outer');
 let swiper=document.getElementById('swiper');
 let focus=document.getElementById('focus');
 let imgs=swiper.getElementsByTagName('img4');
 let lis=focus.getElementsByTagName('li');
 let left=outer.getElementsByTagName('a')[0];
 let right=outer.getElementsByTagName('a')[1];
 let data=null;
 let step=0;
 let timer=null;
 let xhr=new XMLHttpRequest();
 xhr.open('get','img4/data.json',false);
 xhr.onreadystatechange=function () {
 if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
 data=JSON.parse(xhr.responseText)
 }
 };
 xhr.send();
 console.log(data);
 function bindHtml() {
 var imgStr=``,liStr=``;
 for(var i=0;i<data.length;i++){
 imgStr=`<div><img4 data-src="img4/${data[i].src}" alt=""></div>`;
 liStr+=`<li class="${i===0?'selected':''}"></li>`;
 }
 imgStr+=`<div><img4 data-src="img4/${data[0].src}" alt=""></div>`;
 swiper.innerHTML=imgStr;
 focus.innerHTML=liStr;
 utils.css(swiper,'width',1000*(data.length+1));
 utils.css(focus,'marginLeft',-(focus.offsetWidth/2))
 }
 bindHtml(data);
 function lazyImg() {
 for(let i=0;i<imgs.length;i++){
 let cur=imgs[i];
 let newImg=new Image();
 let url=cur.getAttribute('data-src');
 newImg.src=url;
 newImg.onload=function () {
 cur.src=this.src;
 newImg=null;
 animate(cur,{opacity:1},3000);
 }
 }
 }
 lazyImg();
 timer=setInterval(autoMove,2000);
 function autoMove() {
 step++;
 if(step>=data.length){
 step=0;
 utils.css(swiper,'left',0);
 }
 utils.css(swiper,'left',-1000*step);
 focusTip()
 }
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
 outer.onmouseover=function () {
 clearInterval(timer);
 utils.css(left,'display','block');
 utils.css(right,'display','block')
 };
 outer.onmouseout=function () {
 timer=setInterval(autoMove,2000);
 utils.css(left,'display','none');
 utils.css(right,'display','none');
 };
 function roundClick() {
 for(let i=0;i<lis.length;i++){
 lis[i].onclick=function () {
 step=i-1;
 autoMove()
 }
 }
 }
 roundClick();
 right.onclick=function () {
 autoMove()
 };
 left.onclick=function () {
 if(step<=0){
 step=data.length;
 utils.css(swiper,'left',-1000*step);
 focusTip()
 }
 }*/
/*
let outer = document.getElementById('outer');
let swiper = document.getElementById('swiper');
let focus = document.getElementById('focus');
let left = outer.getElementsByTagName('a')[0];
let right = outer.getElementsByTagName('a')[1];
let imgs = swiper.getElementsByTagName('img4');
let lis = focus.getElementsByTagName('li');
let data = null;
let step = 0;
let timer = null;
let xhr = new XMLHttpRequest();
xhr.open('get', 'img4/data.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText)
    }
};
xhr.send();
console.log(data);
function bindHtml() {
    let imgStr = ``, liStr = ``;
    for (var i = 0; i < data.length; i++) {

        imgStr += `<div><img4 data-src="img4/${data[i].src}" alt=""></div>`;
        liStr += `<li class="${i === 0 ? 'selected' : ''}"></li>`;
    }
    imgStr += `<div><img4 data-src="img4/${data[0].src}" alt=""></div>`;
    swiper.innerHTML = imgStr;
    focus.innerHTML = liStr;
    utils.css(swiper, 'width', 1000 * (data.length + 1));
    utils.css(focus, 'marginLeft', -(focus.offsetWidth / 2));

}
bindHtml(data);
//console.log(data);
function lazyImg() {
    for (let i = 0; i < imgs.length; i++) {
        let cur = imgs[i];
        let newImg = new Image();
        let url = cur.getAttribute('data-src');
        newImg.src = url;
        newImg.onload = function () {
            cur.src = this.src;
            newImg = null;
            animate(cur, {opacity: 1}, 3000);
        }
    }
}
lazyImg();
timer = setInterval(autoMove, 2000);
function autoMove() {
    step++;
    if (step >= data.length) {
        step = 0;
        utils.css(swiper, 'left', 0)
    }
    utils.css(swiper, 'left', -1000 * step);
    focusTip()
}
function focusTip() {
    for (var i = 0; i < lis.length; i++) {
        if (step === i) {
            lis[i].classList.add('selected')
        } else {
            lis[i].classList.remove('selected')
        }
        if (step === data.length) {
            lis[0].classList.add('selected')
        }
    }
}
outer.onmouseover = function () {
    clearInterval(timer);
    utils.css(left, 'display', 'block');
    utils.css(right, 'display', 'block');
};
outer.onmouseout = function () {
    timer = setInterval(autoMove, 2000);
    utils.css(left, 'display', 'none');
    utils.css(right, 'display', 'none')
};
function roundClick() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            step = i - 1;
            autoMove()
        }
    }
}
roundClick();
right.onclick = function () {
    autoMove()
};
left.onclick = function () {
    if (step <= 0) {
        step = data.length;
        utils.css(swiper, 'left', -1000 * step)
    }
    step--;
    utils.css(swiper, 'left', -1000 * step);
    focusTip()
}*/
/*
let outer=document.getElementById('outer');
let swiper=document.getElementById('swiper');
let focus=document.getElementById('focus');
let left=outer.getElementsByTagName('a')[0];
let right=outer.getElementsByTagName('a')[1];
let imgs=swiper.getElementsByTagName('img4');
let lis=focus.getElementsByTagName('li');
let data=null;
let step=0;
let timer=null;
let xhr=new XMLHttpRequest();
xhr.open('get','img4/data.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        data=JSON.parse(xhr.responseText)
    }
};
xhr.send();
console.log(data);
function bindHtml() {
    let imgStr=``,liStr=``;
    for(var i=0;i<data.length;i++){
        imgStr+=`<div><img4 data-src="img4/${data[i].src}" alt=""></div>`;
        liStr+=`<li class="${i===0?'selected':''}"></li>`
    }
    imgStr+=`<div><img4 data-src="img4/${data[0].src}" alt=""></div>`;
    swiper.innerHTML=imgStr;
    focus.innerHTML=liStr;
    utils.css(swiper,'width',1000*(data.length+1));
    utils.css(focus,'marginLeft',-(focus.offsetWidth/2));
}
bindHtml(data);
function lazyImg(){
    for(let i=0;i<imgs.length;i++){
        let cur=imgs[i];
        let newImg=new Image();
        let url=cur.getAttribute('data-src');
        newImg.src=url;
        newImg.onload=function () {
            cur.src=this.src;
            newImg=null;
            animate(cur,{opacity:1},3000)
        }
    }
}
lazyImg();
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
function focusTip(){
    for(let i=0;i<lis.length;i++){
        if(step===i){
            lis[i].classList.add('selected')
        }else {
            lis[i].classList.remove('selected')
        }if(step===data.length){
            lis[0].classList.add('selected')
        }
    }
}
outer.onmouseover=function () {
    clearInterval(timer);
    utils.css(left,'display','block');
    utils.css(right,'display','block')
};
outer.onmouseout=function () {
    timer=setInterval(autoMove,2000);
    utils.css(left,'display','none');
    utils.css(right,'display','none')
};
function roundClick() {
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
           step=i-1;
           autoMove()
        }
    }
}
roundClick();
left.onclick=function () {
    if(step<=0){
        step=data.length;
        utils.css(swiper,'left',-1000*step)
    }
    step--;
    utils.css(swiper,'left',-1000*step);
    focusTip()
};
right.onclick=function () {
    autoMove()
}*/
/*let outer=document.getElementById('outer');
let swiper=document.getElementById('swiper');
let focus=document.getElementById('focus');
let left=outer.getElementsByTagName('a')[0];
let right=outer.getElementsByTagName('a')[1];
let data=null;
let timer=null;
let step=0;
let imgs=swiper.getElementsByTagName('img4');
let lis=focus.getElementsByTagName('li');
let xhr=new XMLHttpRequest();
xhr.open('get','img4/data.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        data=JSON.parse(xhr.responseText)
    }
};
xhr.send();
console.log(data);
function bindHtml() {
    let imgStr=``,liStr=``;
    for(var i=0;i<data.length;i++){
        imgStr+=`<div><img4 data-src="img4/${data[i].src}" alt=""></div>`;
        liStr+=`<li class="${i===0?'selected':''}"></li>`;
    }
    imgStr+=`<div><img4 data-src="img4/${data[0].src}" alt=""></div>`;
    swiper.innerHTML=imgStr;
    focus.innerHTML=liStr;
    utils.css(swiper,'width',1000*(data.length+1));
    utils.css(focus,'marginLeft',-(focus.offsetWidth/2));
}
bindHtml(data);
function lazyImg() {
    for(let i=0;i<imgs.length;i++){
        let cur =imgs[i];
        let newImg=new Image();
        let url=cur.getAttribute('data-src');
        newImg.src=url;
        newImg.onload=function () {
            cur.src=this.src;
            newImg=null;
            animate(cur,{opacity:1},3000)
        }
    }
}
lazyImg();
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
outer.onmouseover=function () {
    clearInterval(timer);
    utils.css(left,'display','block');
    utils.css(right,'display','block');
};
outer.onmouseout=function () {
    timer=setInterval(autoMove,2000);
    utils.css(left,'display','none');
    utils.css(right,'display','none')
};
function roundClick() {
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            step=i-1;
            autoMove()
        }
    }
}
roundClick();
right.onclick=function () {
    autoMove()
};
left.onclick=function () {
    if(step<=0){
        step=data.length;
        utils.css(swiper,'left',-1000*step)
    }
    step--;
    utils.css(swiper,'left',-1000*step);
    focusTip()
};*/
let outer=document.getElementById('outer');
let swiper=document.getElementById('swiper');
let focus=document.getElementById('focus');
let left=outer.getElementsByTagName('a')[0];
let right=outer.getElementsByTagName('a')[1];
let imgs=swiper.getElementsByTagName('img');
let lis=focus.getElementsByTagName('li');
let data=null;
let timer=null;
let step=0;
let xhr=new XMLHttpRequest();
xhr.open('get','img4/data.json',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        data=JSON.parse(xhr.responseText)
    }
};
xhr.send();
console.log(data);
function bindHtml(){
    var imgStr=``,liStr=``;
    for(var i=0;i<data.length;i++){
        imgStr+=`<div><img data-src="img/${data[i].src}" alt=""></div>`;
        liStr+=`<li class="${i===0?'selected':''}"></li>`
    }
    imgStr+=`<div><img data-src="img/${data[0].src}" alt=""></div>`;
    swiper.innerHTML=imgStr;
    focus.innerHTML=liStr;
    utils.css(swiper,'width',-1000*(data.length+1));
    utils.css(focus,'marginLeft',-(focus.offsetWidth/2))
}
bindHtml(data);
function lazyImg() {
    for(let i=0;i<imgs.length;i++){
        let cur=imgs[i];
        let newImg=new Image();
        let url=cur.getAttribute('data-src');
        //console.log(url);
        newImg.src=url;
        newImg.onload=function () {
            cur.src=this.src;
            newImg=null;
            animate(cur,{opacity:1},3000)
        }

    }
}
lazyImg();
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
function focusTip() {
    for(let i=0;i<lis.length;i++){
        if(step===i){
            lis[i].classList.add('selected')
        }else {
            lis[i].classList.remove('selected')
        }if(step===data.length){
            lis[0].classList.add('selected')
        }
    }
}
outer.onmouseover=function () {
    clearInterval(timer);
    utils.css(left,'display','block');
    utils.css(right,'display','block')
};
outer.onmouseout=function () {
    timer=setInterval(autoMove,2000);
    utils.css(left,'display','none');
    utils.css(right,'display','none')
};
function roundClick() {
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            step=i-1;
            autoMove()
        }
    }
};
roundClick();
left.onclick=function () {
    if(step<=0){
        step=data.length;
        utils.css(swiper,'left',-1000*step)
    }
    step--;
    utils.css(swiper,'left',-1000*step);
    focusTip()
};
right.onclick=function () {
    autoMove()
}

