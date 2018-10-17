 /* 
 forEach
 map
 
 
 
 
 
 
 
 */
 var ary = [1, 4, 9, 4, 5, 8, 6, 10];
 /* ary.forEach((item,index,input)=>{
     console.log(this);//window
     
 },1) */
 //[map];将回调函数的的返回值组成一个新的数组,没有return直接返回undefined
 /* var newAry = ary.map((item, index) => {
     // return item*10
     // return'<li>'+item+'</li>'
 })
 console.log(newAry); */
 //for in遍历对象
/*  for (var key in ary) {
     console.log(key); //数组中的索引
     console.log(ary[key]); //数组中的每一项
 } */
 //for of 遍历数组/,不可以遍历对象；直接遍历对象会报错，我们可以调用【Object.keys()】解决
 /* for (var item of ary) {
     console.log(item); //item对应是ary中的每一项
 } */
/*  var obj = {
     name: 'zf',
     age: '9'
 }
 // console.log(Object.keys(obj));
 for (var item of Object.keys(obj)) {
     console.log(item);
 } */
 //filter 过滤：将符合条件的值放到新的数组当中
 //1、遍历数组
 //2、降负荷回调函数返回值的内容【判断为true】放入一个新的数组当中；原数组不会发生改变
/* var newAry=ary.filter((item,index)=>{
    return item>6
}) */
/* var newAry=ary.map((item,index)=>{
    if(item>6){
        return item
    }
}) */
/* console.log(newAry,ary); */

//includes 判断数组当中是否有某项 有=>true,否=>false,可以理解成完全比对，也就是严格比较
/* var newAry=ary.includes(10);
console.log(newAry); */

//find 查找=>找到符合条件的值返回
//1、遍历数组
//2、判断回调函数返回值的布尔值，返回true，停止遍历，直接将这个值【遍历数组当前项的值】返回
 /*  var newAry=ary.find((item,index)=>{
    return item>5
})
console.log(newAry);  */
 
//some 找true=> 遍历数组当中如果回调函数返回值计算为true，整体返回true，否则返回为false；全部遍历后，都没有返回true，整体返回false
/*  var newAry=ary.some((item,index)=>{
    return item>0
})
console.log(newAry);
  */

  //every 找false=>1、遍历数组；2、如果回调函数返回值计算结果为false，停止遍历，整体返回false；如果计算结果为true，则继续遍历，直到找到false，否则为true，【当遍历结束后，全部返回为true时，整体返回true】
 /*  var newAry=ary.every((item,index)=>{
      return item>5
  })
  console.log(newAry); */

  //reduce 返回两次计算后的结果
  //1、遍历数组 2、将回调函数返回值作为第一次的计算结果，
//prev[初始值=>第一项的值，当循环第二次的时候，就是计算后的结果],
//next【数组第二项，从第二项依次向后获取】
//index【next代表值所对应的索引】,
//input【当前数组】
//遍历ary.length-1次
//1、prev=》1 next=》4 index=》1
  var newAry=ary.reduce((prev,next,index,input)=>{
return prev+next
  },0)//调用reduce内置的方法可以实现数组中含有对象求和操作，reduce第二个参数为当前数组遍历的初始值
  console.log(newAry);
  