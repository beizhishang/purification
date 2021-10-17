var valve = document.getElementsByClassName("valve");

for (i = 0; i < valve.length; i++) {
    var flag = true;
    valve[i].onclick = function () {
        if (flag) {
            this.src = "../image-unit/pv-open.png";
            flag = false;
            this.value = "1";
        } else {
            this.src = "../image-unit/pv-close.png";
            flag = true;
            this.value = "0";
        }

    }

}
