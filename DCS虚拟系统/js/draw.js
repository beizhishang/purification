
document.onclick = function(e){


 //获取罐子位置tank
// var write="<img src='../image-unit/tank.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:188px;height:181px'></img>"


 //获取向右箭头位置arrow-right
 var write="<img src='../image-unit/arrow-right.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:40px;height:18px'></img>"


 //获取向左箭头位置arrow-left
 //var write="<img src='../image-unit/arrow-left.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:40px;height:18px'></img>"


 //获取连接符位置link
 //var write="<img src='../image-unit/link.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:20px;height:30px'></img>"


 //获取文字位置text
var i = prompt("请输入文字","PV");
if(i !==null && i !== ""){
 var write="<span class='text' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'>"+i+"</span>"
};


 //获取阀门位置pv-open
 //var write="<img src='../image-unit/pv-open.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:25px;height:25px'></img>"


//获取显示框位置text-area
 //var write="<span class='text textarea' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'></span>"


//获取保热保冷位置coldhot
 //var write="<span class='coldhot' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'>C</span>"


//获取疏水阀位置trap
 //var write="<span class='trap' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'>T</span>"


 //获取点击坐标
 //var loc = e.pageX+"&"+e.pageY
//console.log(loc);
//var write ="<div style='width:3px; height: 3px; background-color: red; left:"+e.pageX+"px; top: "+e.pageY+"px;'></div>"


var context = document.getElementById("container").innerHTML;
document.getElementById("container").innerHTML = context+write;

}