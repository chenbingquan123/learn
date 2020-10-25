//一次性定时器 
//300毫秒有以后，会调用一次回调函数
// //开启
// let timer=setTimeout(()=>{
//     console.log('boom!')
// },3000);
//清除
// clearTimeout(timer);

// let timer=setInterval(()=>{
  
//     console.log('起床')
   
// },3000);
//     clearInterval(timer);
//     //打印三次内容后清除定时器

    // let count=0;
    // let timer=setInterval( ()=>{
    //     console.log('ok');
    //     count++;
    //     if(count===3){
    //     clearInterval(timer);
    //     }
    // },3000);

    //立即执行定时器
    console.log(2);
    setImmediate( ( )=>{
        console.log(1);
    });
    console.log(3);