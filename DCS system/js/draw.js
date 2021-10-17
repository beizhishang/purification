document.onclick = function (e) {


    //��ȡ����λ��tank
// var write="<img src='../image-unit/tank.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:188px;height:181px'></img>"


    //��ȡ���Ҽ�ͷλ��arrow-right
    var write = "<img src='../image-unit/arrow-right.png' style='left:" + e.pageX + "px;top:" + e.pageY + "px;width:40px;height:18px'></img>"


    //��ȡ�����ͷλ��arrow-left
    //var write="<img src='../image-unit/arrow-left.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:40px;height:18px'></img>"


    //��ȡ���ӷ�λ��link
    //var write="<img src='../image-unit/link.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:20px;height:30px'></img>"


    //��ȡ����λ��text
    var i = prompt("����������", "PV");
    if (i !== null && i !== "") {
        var write = "<span class='text' style='left:" + e.pageX + "px;top:" + e.pageY + "px;'>" + i + "</span>"
    }
    ;


    //��ȡ����λ��pv-open
    //var write="<img src='../image-unit/pv-open.png' style='left:"+e.pageX+"px;top:"+e.pageY+"px;width:25px;height:25px'></img>"


//��ȡ��ʾ��λ��text-area
    //var write="<span class='text textarea' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'></span>"


//��ȡ���ȱ���λ��coldhot
    //var write="<span class='coldhot' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'>C</span>"


//��ȡ��ˮ��λ��trap
    //var write="<span class='trap' style='left:"+e.pageX+"px;top:"+e.pageY+"px;'>T</span>"


    //��ȡ�������
    //var loc = e.pageX+"&"+e.pageY
//console.log(loc);
//var write ="<div style='width:3px; height: 3px; background-color: red; left:"+e.pageX+"px; top: "+e.pageY+"px;'></div>"


    var context = document.getElementById("container").innerHTML;
    document.getElementById("container").innerHTML = context + write;

}