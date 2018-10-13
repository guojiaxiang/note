/* 我只要修改了服务端，就需要断开连接【ctrl+c】，重新启动 */
let http=require('http');
let server=http.createServer((req,res)=>{//开启一个web服务
//当前端请求我的时候，执行这个回调函数
//req：请求的对象
//res：响应的对象
console.log('当前端请求我的时候，执行这个回调函数'+(a++));
res.setHeader('Content-Type','text/plain;charset=utf8')
res.end('你好')
})
server.listen(8080,()=>{//监听一个端口，并且启动服务端
    console.log('服务端8080开启');
    
})