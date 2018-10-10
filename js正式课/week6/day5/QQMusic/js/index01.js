/*
 let QQmusic = (function () {
 let $header = $('.QQMusic>header'),
 $main = $(".main"),
 $footer = $(".QQMusic>footer"),
 $playBtn = $(".playBtn"),
 $songWord = $(".songWord"),
 $runTime = $(".runTime"),
 $innerL = $(".innerL"),
 $endTime = $("endTime"),
 myAudio = $("#audio")[0];
 let timer = null;
 let $oPs = null;

 function setHeight() {
 let winH = document.documentElement.clientHeight || document.body.clientHeight;
 let h = winH - $header.height() - $footer.height() - parseInt($main.css("margin-top")) - parseInt($songWord.css("padding-top")) * 2;
 $main.css("height", h + 'px');
 }

 function bindHtml(ary) {
 let str = ``;
 ary.forEach(function (item, index) {
 str += `<p m="${item.m}" s="${item.s}">${item.w}</p>`
 });
 $songWord.html(str);
 $oPs = $songWord.find('p')
 }

 function btnRotate() {
 myAudio.addEventListener("canplay", function () {
 playMusic()
 }, false)
 }

 function playMusic() {
 if ($playBtn.hasClass('rotateClass')) {
 $playBtn.removeClass('rotateClass');
 myAudio.pause()
 } else {
 $playBtn.addClass('rotateClass');
 myAudio.play();
 computedTime()
 }
 }

 $playBtn.singleTap(function () {
 playMusic()
 });
 function formaTime(time) {
 let m = parseInt(time / 60);
 m = m < 10 ? "0" + m : m;
 let s = parseInt(time - m * 60);
 s = s < 10 ? "0" + s : s;
 return `${m}:${s}`
 }

 function computedTime() {
 let duration = myAudio.duration;
 $endTime.html(formaTime(myAudio.duration));
 timer = window.setInterval(function () {
 let curT = myAudio.currentTime;
 $runTime.html(formaTime(curT));
 if (curT >= duration) {
 clearInterval(timer);
 $songWord.css('transform', 'translate(0)');
 $playBtn.removeClass("rotateClass")
 } else {
 matchLyric()
 }
 $innerL.css("width", curT / myAudio.duration * 100 + '%')
 }, 500)
 }

 function matchLyric() {
 let curTime = formaTime(myAudio.currentTime);
 let [m, s] = curTime.split(":");
 let $curP = $oPs.filter(`[m="${m}"]`).filter(`[s="${s}"]`);
 if ($curP.length === 0) return;
 if ($curP.hasClass("active")) return;
 $curP.addClass("active").siblings().removeClass("active");
 let index = $curP.index();
 if (index > 2) {
 posY -= $curP[0].offsetHeight;
 $songWord.css("transform", `translateY(${posY}px)`);
 }
 }

 let posY = 0;
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
 QQmusic.init()
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

    function setHeight() {
        let winH = document.documentElement.clientHeight || document.body.clientHeight;
        let h = winH - $header.height() - $footer.height() - parseInt($main.css("margin-top")) - parseInt($songWord.css("padding-top")) * 2;
        $main.css("height", h + "px");
    }

    function bindHtml(ary) {
        let str = ``;
        ary.forEach(function (item, index) {
            str += `<p m="${item.m}" s="${item.s}">${item.w}</p>`
        });
        $songWord.html(str);
        $oPs = $songWord.find('p')
    }

    function btnRotate() {
        myAudio.addEventListener('canplay', function () {
            playMusic()
        }, false);
    }

    function playMusic() {
        if ($playBtn.hasClass('rotateClass')) {
            $playBtn.removeClass('rotateClass');
            myAudio.pause()
        } else {
            $playBtn.addClass('rotateClass');
            myAudio.play();
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
        $endTime.html(formatTime(myAudio.duration));
        timer = window.setInterval(function () {
            let curT = myAudio.currentTime;
            $runTime.html(formatTime(curT));
            if (curT >= duration) {
                clearInterval(timer);
                $songWord.css("transform", "translate(0)");
                $playBtn.removeClass("rotateClass");
            } else {
                matchLyric();
            }
            $innerL.css("width", curT / myAudio.duration * 100 + "%")
        }, 500)
    }

    function matchLyric() {
        let curTime = formatTime(myAudio.currentTime);
        let [m, s] = curTime.split(":");
        let $curP = $oPs.filter(`[m="${m}"]`).filter(`[s="${s}"]`);
        if ($curP.length === 0) return;
        if ($curP.hasClass("active")) return;
        $curP.addClass("active").siblings().removeClass("active");
        let index = $curP.index();
        if (index > 2) {
            posY -= $curP[0].offsetHeight;
            $songWord.css("transform", `translateY(${posY}px)`)
        }
    }

    let posY = 0;
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