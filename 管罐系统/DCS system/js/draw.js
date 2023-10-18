document.onclick = function (e) {


    //tank
// var write="<img src='../image-unit/tank.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:188px;height:181px'></img>"


    //arrow-right
   // var write = "<img src='../image-unit/arrow-right.png' style='left:" + e.pageX + "px;top:" + e.pageY + "px;width:40px;height:18px'></img>"


    //arrow-left
    //var write="<img src='../image-unit/arrow-left.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:40px;height:18px'></img>"


    //link
    //var write="<img src='../image-unit/link.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:20px;height:30px'></img>"


    //text
   // var i = prompt("please input text", "PV");
  //  if (i !== null && i !== "") {
    //    var write = "<span class='text' style='left:" + e.pageX + "px;top:" + e.pageY + "px;'>" + i + "</span>"
    //};


    //pv-open
    //var write="<img src='../image-unit/pv-open.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:25px;height:25px'></img>"


    //text-area
    //var write="<span class='text textarea' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'></span>"


	//coldhot
    //var write="<span class='coldhot' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'>C</span>"


	//trap
    //var write="<span class='trap' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'>T</span>"


    //location
var loc = e.pageX+"&"+e.pageY
console.log(loc);
var write ="<div style='width:3px; height: 3px; background-color: red; left:"+e.pageX+"px; top: "+e.pageY+"px;'></div>"

	//var i = prompt("please input text");
	//if (i !== null && i !== "") {
    //    var write = "<span class='unit-button' style='left:" + e.pageX + "px;top:" + e.pageY + "px;'>" + i + "</span>"
    //};

    var context = document.getElementById("container").innerHTML;
    document.getElementById("container").innerHTML = context + write;

}