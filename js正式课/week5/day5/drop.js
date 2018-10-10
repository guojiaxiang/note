/**
 * Created by 29120 on 2018/9/16.
 */
var g = 9.8;
var flag = 0;

function drop() {
    clearTimeout(this.droptimer);
    if (!this.dropSpeed) {
        this.dropSpeed = 0
    }
    this.dropSpeed += g;
    this.dropSpeed *= 0.98;
    var tSide = (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight;
    var duration = this.offsetTop + this.dropSpeed;
    if (duration >= tSide) {
        this.style.top = tSide + 'px';
        this.dropSpeed *= -1;
        flag++;//连续两次走到这里，就说明小球停下来
    } else {
        this.style.top = duration + 'px';
        flag = 0
    }
    //this.style.top=this.offsetTop+this.dropSpeed+'px';
    if (flag < 2) {
        this.droptimer = window.setTimeout(() => {
            drop.call(this)
        }, 30)
    }

}