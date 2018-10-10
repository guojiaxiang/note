/**
 * Created by 29120 on 2018/8/16.
 */
/*
 console.log(n, m, x);
 var n = 12,
 m = 13,
 x = 14;
 function fn(n) {
 console.log(n, m, x);
 var m = 20;
 x = 30;
 console.log(n, m, x);
 }
 fn(10);
 console.log(n, m, x);*/
/*
 u u
 20
 100 100 30
 20 20 30*/
/*
 console.log(x, y);//undefined*2
 var x = 10,
 y = 20;
 //!**
 function fn() {
 console.log(x, y, z);//undefined 20 报错
 var x = y = 100;
 z = 30;
 console.log(x, y, z);//100 100 30
 }
 x = fn(20);
 console.log(x, y, z);//undefined 100 30*!/!*!/
 */
/*
 fn();
 function fn() {
 console.log(1);
 }
 fn();
 function fn() {
 console.log(2);
 }
 fn();
 var fn=10;
 fn();
 function fn() {
 console.log(3);
 }
 fn();
 function fn() {
 console.log(4);
 }
 fn();*/
/*
 function fn() {
 var a =12;
 console.log(a);
 return a
 }
 fn();*/
/*var i = 2,
x = 5;
var fn = function (x) {
    x += 3;
    return console.log(x++) + (--i)
};
var f = fn(1);
f(2);
fn(3)(4);
f(5);*/
var x=1;
function  fn () {
    var x=2;
    return function () {
        console.log(x);
    }
}
var f=fn();
f();
