/*/判断一个人是否为成年人
var age=20;

var r=age>=18 ? '成年人' : '未成年人';
console.log(r);*/

//练习：声明变量分别保存用户名输入的用户名密码，如果用户名是'root'，
//并且密码是'123456'，打印'登陆成功'，否则打印'登陆失败'
var uname='root',upassword='123456';

var r=uname==='root' && upassword==='123456' ? '登陆成功' : '登录失败';
console.log(r);