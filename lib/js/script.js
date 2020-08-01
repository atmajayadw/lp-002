// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const span = document.querySelectorAll('.hamburger span');
const sidebar = document.querySelector('.sidebar .links');

hamburger.addEventListener('click', function () {
    span[0].classList.toggle('show1');
    span[1].classList.toggle('show2');
    span[2].classList.toggle('show3');
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});

// Filter portofolio
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("porto");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show animate__animated animate__fadeIn");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

//  Slide testimonials
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('animate__animated', 'animate__bounceInRight');

}

// Modal

const modal = document.getElementById("myModal");
const img = document.querySelectorAll('.porto img');
const modalImg = document.getElementById("img01");
const navbar = document.querySelector('.navbar');


for (let j = 0; j < img.length; j++) {
    img[j].addEventListener('click', function (e) {
        document.body.style.overflow = "hidden";
        modal.style.display = "block";
        modalImg.src = "Assets/img/" + this.alt + ".png"
        navbar.style.display = "none";
        modalImg.classList.add('animate__animated', 'animate__zoomIn');

    });

    closemodal.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        navbar.style.display = "block";
        modalImg.classList.remove('animate__animated', 'animate__zoomIn');
    }
}

// Parallax
$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    $('.jumbo-right img').css({
        'transform': 'translate(' + wScroll / 4 + '%, 0px)'
    });

    $('.jumbo-left h1').css({
        'transform': 'translate(-' + wScroll / 2 + '%, 0px)'
    });

    $('.jumbo-left p').css({
        'transform': 'translate(-' + wScroll / 3 + '%, 0px)'
    });

    $('.jumbo-left .wave-me').css({
        'transform': 'translate(-' + wScroll / 4 + '%, 0px)'
    });

    if (wScroll > $('.services').offset().top - 500) {
        $('.service').each(function (i) {
            setTimeout(function () {
                $('.service').eq(i).addClass('show');
            }, 500 * (i + 1));
        });
    }
});

$(window).scroll(function () {
    let wScroll_ = $(this).scrollTop();
    if (wScroll_ > $('#goals').offset().top) {
        $('.number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});


// Fixed Navbar

const fixbar = document.querySelector('.navbar');
const jumbo = document.getElementById('jumbotron');
const logo = document.querySelector('.nav .logo');

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            fixbar.classList.add("sticky");
            fixbar.classList.add('animate__animated', 'animate__fadeInDown');
            fixbar.classList.toggle('animate__animated', 'animate__fadeInUp');
            jumbo.style.marginTop = '-20px';
            logo.classList.add("sticky");
        } else {
            fixbar.classList.remove("sticky");
            fixbar.classList.remove('animate__animated', 'animate__fadeInDown');
            jumbo.style.marginTop = '-120px';
            logo.classList.remove("sticky");
        }
    });
});

//WOW.JS 
new WOW().init();

// Jumbotron
const animate1 = document.querySelector('.jumbo-right');
animate1.classList.add('wow', 'animate__animated', 'animate__fadeInRight', 'animate__delay-2s');

const animate2 = document.querySelector('.jumbo-left');
animate2.classList.add('wow', 'animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');

// Services
const animate3 = document.querySelector('#services .head');
animate3.classList.add('wow', 'animate__animated', 'animate__fadeInDown');

const animate4 = document.querySelector('#about .about-left');
animate4.classList.add('wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');

// Workflow
const animate5 = document.querySelector('#workflow .left');
animate5.classList.add('wow', 'animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');

const animate6 = document.querySelector('#workflow .right .head');
animate6.classList.add('wow', 'animate__animated', 'animate__fadeInDown', 'animate__delay-2s');

const animate7 = document.querySelector('#workflow .right .flows');
animate7.classList.add('wow', 'animate__animated', 'animate__fadeInUp', 'animate__delay-3s');




// const check = document.querySelector('.number');

// $(check).ready(function () {
//     $('.number').each(function () {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 2000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });