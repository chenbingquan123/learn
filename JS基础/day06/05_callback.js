function ran(madai){

    madai();
    console.log('第一棒开始');
    console.log('到达第一棒终点');
  }
  //第二棒从这里开始
  //实参会赋值给形参

//   madai=dong
//   madai()=dong();
  //调用传递进来的数字
   

function dong(){
    console.log('第二棒开始');
    console.log('到达终点');
}
ran(dong);

// function ran() 


//练习：创建函数，把这个函数以实参传递给ran

function xin(){

    console.log('新哥开始跑第二棒');
    console.log('新哥到达终点');
}  
//调用var 传递的实参是另一个函数
ran(dong);
ran(xin);
ran(function(){
    console.log('陌生人跑了')
});