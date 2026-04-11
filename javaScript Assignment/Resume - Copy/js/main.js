// Smooth Scroll
document.querySelectorAll(".navbar-nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();

            const target = document.querySelector(this.hash);

            window.scrollTo({
                top: target.offsetTop - 30,
                behavior: "smooth"
            });

            // Active class
            document.querySelectorAll(".navbar-nav a").forEach(a => {
                a.classList.remove("active");
            });

            this.classList.add("active");
        }
    });
});

const textArray = ["Full Stack Developer", "Java Developer", "Frontend Developer"];
let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".header h2");
//✅ 2. Typed Effect (Simple Version)
function typeEffect() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();

//3. Skills Progress Bar (Without Waypoint)
window.addEventListener("scroll", function () {
    const skillsSection = document.querySelector(".skills");

    if (!skillsSection) return;

    const sectionTop = skillsSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop + 100) {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = bar.getAttribute("aria-valuenow") + "%";
        });
    }
});
//4. Portfolio Filter (Without Isotope)

const filterButtons = document.querySelectorAll("#portfolio-flters li");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        document.querySelector("#portfolio-flters .filter-active")
            ?.classList.remove("filter-active");

        this.classList.add("filter-active");

        const filter = this.getAttribute("data-filter");

        portfolioItems.forEach(item => {
            if (filter === "*" || item.classList.contains(filter.substring(1))) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
//5. Simple Slider (Instead of Slick)

let slideIndex = 0;
const slides = document.querySelectorAll(".review");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // auto slide
}

showSlides();
//✅ 6. Back to Top Button

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




// (function ($) {
//     "use strict";
    
//     // Smooth scrolling on the navbar links
//     $(".navbar-nav a").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
            
//             $('html, body').animate({
//                 scrollTop: $(this.hash).offset().top - 30
//             }, 1500, 'easeInOutExpo');
            
//             if ($(this).parents('.navbar-nav').length) {
//                 $('.navbar-nav .active').removeClass('active');
//                 $(this).closest('a').addClass('active');
//             }
//         }
//     });
    

//     // Typed Initiate
//     if ($('.header h2').length == 1) {
//         var typed_strings = $('.header .typed-text').text();
//         var typed = new Typed('.header h2', {
//             strings: typed_strings.split(', '),
//             typeSpeed: 100,
//             backSpeed: 20,
//             smartBackspace: false,
//             loop: true
//         });
//     }
    
    
//     // Skills
//     $('.skills').waypoint(function () {
//         $('.progress .progress-bar').each(function () {
//             $(this).css("width", $(this).attr("aria-valuenow") + '%');
//         });
//     }, {offset: '80%'});
    
    
//     // Porfolio isotope and filter
//     var portfolioIsotope = $('.portfolio-container').isotope({
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows'
//     });

//     $('#portfolio-flters li').on('click', function () {
//         $("#portfolio-flters li").removeClass('filter-active');
//         $(this).addClass('filter-active');

//         portfolioIsotope.isotope({filter: $(this).data('filter')});
//     });
    
    
//     // Review slider
//     $('.review-slider').slick({
//         autoplay: true,
//         dots: false,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     });
    
    
//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });
// })(jQuery);

