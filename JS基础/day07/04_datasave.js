var a=1;
var b=a;
a=2;
console.log(b);

//引用类型
var ran={
    color:'萤光禄',
    size:'XXXL'
}

//把ran对象的地址赋给了dong,两者指向同一个对象
var dong=ran;
dong.size='XXXXL';
dong.color='红色';

console.log(dong);

//销毁引用类型数据，没有任何地址指向就会销毁
ran=null;  //null是一个空地址，不指向任何对象
dong=null;