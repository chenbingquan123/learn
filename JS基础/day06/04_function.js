//全局污染：全局变量的出现 造成变量的污染
//轮播图1
//用于记录播放到了第几张
var n=1;
 (function (){
  var n=1;
  console.log(n);
})
();
// //轮播图2


(function (){
    var n=3;
    console.log(n);
})
();
// var n=3;
//    console.log(n);




// //轮播图3
(function (){
    var n=5; 
    console.log(n);
})
();


// var n=3;