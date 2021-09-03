console.log("Welcome to Events in JS Guys!");

const button = document.querySelector('#btn');
const heading = document.querySelector('#heading');

button.addEventListener('ondblclick', function (event) {
    console.log("Button Was Clicked!", event);
    heading.style.color = 'purple';
    heading.style.fontSize = '60px';
})



// ***** -----   projects  -----  ****


// const bulbSwitch = document.querySelector('#bulbSwitch');
// const bulb = document.querySelector('#bulb');

// bulbSwitch.addEventListener('click', function () {
//     console.log(bulb.src);

//     if (bulb.src.match('off')) {
//         bulb.src = './img/bulbon.gif';
//         bulbSwitch.innerHTML = "Trun Off";
//     } else {
//         bulb.src = './img/bulboff.gif';
//         bulbSwitch.innerHTML = "Trun On";
//     }
// })


