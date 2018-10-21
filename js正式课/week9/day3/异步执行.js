 new Promise((res,rej)=>{
    //  setTimeout(() => {
         res(100)
    //  }, 0);
 }).then(res=>{
     console.log(res);
     
 })
 setTimeout(() => {
     console.log(200);
     
 }, 0);

 async function fn() {
     await function(){
        console.log(300);
     }
 }

//  fn().then(res=>{
//      console.log(res)
//  })