
let Promise=require('./promise1')

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        Math.random() > 0.5 ? resolve(100) : reject(200)
    },0) 
})
p1.then(res => {
    console.log(res);

}, rej => {
    console.log(rej);

})
console.log(500);