//主界面按钮
var homeButton = document.createElement("a");
var container =  document.getElementById("container");
homeButton.id= "home";
homeButton.title= "主界面";
homeButton.href ="../home/home.html";
container.appendChild(homeButton);

//阀门控制开关

var valve = document.getElementsByClassName("valve");

for (i = 0; i < valve.length; i++) {
    valve[i].onclick = function () {
        if (this.getAttribute("value") == 0) {
            this.src = "../image-unit/pv-open.png";
			this.setAttribute("value","1");
        } else {
            this.src = "../image-unit/pv-close.png";
			this.setAttribute("value","0");

        }

    }

}

