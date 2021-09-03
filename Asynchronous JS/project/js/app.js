console.log("Hello I am Clock");

// let date = new Date();
// console.log(date);


function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }

    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + ":" + session;


    document.getElementById("clock").innerHTML = time;
    let yogi = setInterval(() => {
        currentTime();
        {
            currentTime()
        }
    }, 1000)
}


currentTime();