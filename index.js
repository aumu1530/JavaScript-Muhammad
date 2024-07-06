//stack overflow
let img1 = "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg" 
let img2 = "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
let img3 = "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg"

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let image = document.getElementById("image")

btn2.onclick = function() {
    image.src = img2
};

btn1.onclick = function() {
    image.src = img1
};

btn3.onclick = function() {
    image.src = img3
};

let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')

btn4.onclick = function() {
    image.style.filter = "opacity(25%)";
}

btn5.onclick = function() {
    image.style.filter = "blur(5px)";
}

btn6.onclick = function() {
    image.style.filter = "contrast(200%)";
}

let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')

btn7.onclick = function() {
    image.style.border ="2px black solid"
}
btn8.onclick = function() {
    image.style.border ="thick double black"
}
btn9.onclick = function() {
    image.style.border ="2px black dashed"
}