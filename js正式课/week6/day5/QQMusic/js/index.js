/**
 * Created by 29120 on 2018/9/23.
 */
let QQmusic = (function () {
    let $header = $(".QQMusic>header"),
        $main = $(".main"),
        $footer = $(".QQMusic>footer"),
        $playBtn = $(".playBtn"),
        $songWord = $(".songWord"),
        $runTime = $(".runTime"),
        $innerL = $(".innerL"),
        $endTime = $(".endTime"),
        myAudio = $("#audio")[0];
    let timer = null;
    let $oPs = null;

    //设置main部分的高度=一屏高度-头部高度-尾部的高度-main的margin-songWord的padding
    function setHeight() {
        let winH = document.documentElement.clientHeight || document.body.clientHeight;
        let h = winH - $header.height() - $footer.height() - parseInt($main.css("margin-top")) - parseInt($songWord.css("padding-top")) * 2;
        $main.css("height", h + 'px');

    }

    //动态绑定数据
    function bindHtml(ary) {
        let str = ``;
        /*for(let i=0;i<ary.length;i++){
         $songWord[i].innerHTML+=`<p>${ary.w}</p>`
         }*/
        ary.forEach(function (item, index) {
            str += `<p m="${item.m}" s="${item.s}">${item.w}</p>`

        });
        $songWord.html(str);
        $oPs = $songWord.find('p')

    }
function btnRotate() {
    myAudio.addEventListener('canplay', function () {
        playMusic()
    },false);
}


    function playMusic() {
        if ($playBtn.hasClass('rotateClass')) {//判断是否在播放中
            $playBtn.removeClass('rotateClass');//移除类名，不在转动
            myAudio.pause()//音频文件播放
        } else {
            $playBtn.addClass('rotateClass');//添加类名，开始转动
            myAudio.play();//音频文件开始播放
            computedTime()

        }
    }

    $playBtn.singleTap(function () {
        playMusic()
    });
    function formatTime(time) {
        let m = parseInt(time / 60);
        m = m < 10 ? "0" + m : m;
        let s = parseInt(time - m * 60);
        s = s < 10 ? "0" + s : s;
        return `${m}:${s}`
    }

    function computedTime() {
        let duration = myAudio.duration;
        $endTime.html(formatTime(myAudio.duration));//音频文件播放的总时间，单位是秒
        timer = window.setInterval(function () {
            let curT = myAudio.currentTime;
            $runTime.html(formatTime(curT));
            if (curT >= duration) {
                clearInterval(timer);
                $songWord.css("transform","translate(0)");
                $playBtn.removeClass("rotateClass");
            } else {
                matchLyric();//匹配歌词
            }
            $innerL.css("width", curT / myAudio.duration * 100 + '%')
        }, 500)
    }

    function matchLyric() {
//获取已播放时间的分钟数和秒数，然后所有的p标签中筛选出相同分钟数和秒数的p标签，给这个p标签添加类名active
        let curTime=formatTime(myAudio.currentTime);
        let [m,s]=curTime.split(":");
        let $curP=$oPs.filter(`[m="${m}"]`).filter(`[s="${s}"]`);
        if($curP.length===0) return;//一个都没找到
        if($curP.hasClass("active")) return;//已添加这个类名
        $curP.addClass("active").siblings().removeClass("active");
        let index=$curP.index();
        if(index>2){
            posY-=$curP[0].offsetHeight;//累加向上移动的距离，由于向上移动的距离是负值，所以写成类减
            $songWord.css("transform",`translateY(${posY}px)`);
        }
    }
let posY=0;
    return {
        init: function () {
            setHeight();
            $.ajax({
                url: "data.json",
                dataType: "json",
                success: function (data) {
                    let str = data.lyric;
                    var ary = [];
                    let reg = /\[(\d{2}):(\d{2})\.\d+\]([^\[]+)/g;
                    str.replace(reg, function ($0, $1, $2, $3) {
                        //$0正则匹配的内容
                        //$1第一个分组的内容
                        //$2第二个分组的内容
                        //$3第三个分组的内容
                        let obj = {};
                        obj.m = $1;
                        obj.s = $2;
                        obj.w = $3;
                        ary.push(obj);
                    });

                    bindHtml(ary);
                    btnRotate()

                }
            })
        }
    }
})();
QQmusic.init();