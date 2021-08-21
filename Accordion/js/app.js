var acc = document.getElementsByClassName("accordion");
// var mus = document.getElementsByClassName("mus");
// var plus = document.getElementsByClassName("plus");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    })
}

