/**
 * Created by 29120 on 2018/8/19.
 */

/*
function fn() {
    var i=5;
    return function (n) {
        console.log(n * i++);
    }
}
var f=fn();
f(4);
fn()(5);//代表函数重新运行一次，与之前的函数无关
f(6)*/
/*
var i=3;
function fn(){
    i*=2;
    return function(n){
        console.log(n*(++i))
    }
}
var f=fn();
f(3);//21???????????
fn()(3);
f(4);
fn()(3);*/
var num = 3;
var obj = {
    num:5,
    fn : (function(){
        this.num*=2;
        var num = 4;
        return function(){
            this.num *=2;
            num *= 4;
            alert(num);
        }
    })()
}
var fn = obj.fn;
alert(num);
fn();
obj.fn();
console.log(window.num,obj.num);
