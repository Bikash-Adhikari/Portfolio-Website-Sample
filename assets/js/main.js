/* ==========================================================
    Resume Section tabs and tab contents
=============================================================*/
// const resumeTabs = document.querySelector(".resume-tabs");
// const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
// const resumeTabContents = document.querySelectorAll(".resume-tab-content");


// var resumeTabNav = function(resumeTabClick){
//     resumeTabContents.forEach((resumeTabContent) => {
//         resumeTabContent.style.display = "none";
//         resumeTabContent.classList.remove("active");
//     });


//     resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
//         resumePortfolioTabBtn.classList.remove("active");
//     });


//     resumeTabContents[resumeTabClick].style.display = "flex";

//     setTimeout(() => {
//         resumeTabContents[resumeTabClick].classList.add("active");
//     }, 100);
    

//     resumePortfolioTabBtns[resumeTabClick].classList.add("active");
// };


// resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
//     resumePortfolioTabBtn.addEventListener("click", () => {
//         resumeTabNav(i);
//     });

// });








/* ==========================================================
    Service Modal open/close function
=============================================================*/
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");


    serviceCard.addEventListener("click", () =>{
        serviceBackDrop.style.display = "flex";

        setTimeout(() =>{
            serviceBackDrop.classList.add("active");
        }, 100);

        setTimeout(() =>{
            serviceModal.classList.add("active");
        }, 300);
      
    });


    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            serviceBackDrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            serviceBackDrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
    });
});





/* ==========================================================
    Portfolio modals, tabs and cards
=============================================================*/



// Filter Portfolio cards according to portfolio tabs.

document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabsBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabsBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardsWithModal) => {
                if(filter === "all" || cardsWithModal.classList.contains(filter)){
                    cardsWithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardsWithModal.style.opacity = "1";
                        cardsWithModal.style.transition = ".5s ease";
                    }, 1);
                }
                else{
                    cardsWithModal.classList.add("hidden");


                    setTimeout(() => {
                        cardsWithModal.style.opacity = "0";
                        cardsWithModal.style.transition = ".5s ease";
                    }, 1);

                }
            });

            // Add active class to the clicked tab button.
            portfolioTabsBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active")

        });
    });
});







// Open/Close Portfolio Modals.

const portfolioCardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");


    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";


        setTimeout(() => {
            portfolioBackdrop.classList.add("active");
        }, 300);


        setTimeout(() => {
            portfolioModal.classList.add("active");
        }, 300);
    
    });




    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portfolioBackdrop.style.display = "none";
        }, 500);


        setTimeout(() => {
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        }, 100);
    })


});






/* ==========================================================
    Testimonial Swiper
=============================================================*/
var swiper = new Swiper(".sue-client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});




/* ==========================================================
    Send/Receive emails from contact form = Email JS
=============================================================*/
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "bdtjltYptuBvkJMp1",
    });
})();


sueContactForm = document.getElementById("sue-contact-form")
sueContactFormAlert = document.querySelector(".contact-form-alert")

sueContactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    // Customize these detail acccording to client -----in [https://www.emailjs.com]
    emailjs.sendForm('service_nugdzz4', 'template_i26fjtg', '#sue-contact-form')
        .then(() => {
            // console.log('SUCCESS!');
            sueContactFormAlert.innerHTML = "<span>Your message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
            sueContactForm.reset();
        }, (error) => {
            // console.log('FAILED...', error);
            sueContactFormAlert.innerHTML = "<span>Message not sent!</span> <i class='ri-error-warning-fill'></i>";
            sueContactFormAlert.title = error;
        });
});






/* ==========================================================
    Shrink the height of the header on Scroll
=============================================================*/
window.addEventListener("scroll", () => {
    const sueHeader = document.querySelector(".sue-header");

    sueHeader.classList.toggle("shrink", window.scrollY > 0);
});





/* ==========================================================
    Bottom navigationa menu
=============================================================*/

// Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll", () => {
    const navMenuSections = document.querySelectorAll(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) =>{
        let sectionHeight = navMenuSection.offsetHeight;
        let sectionTop = navMenuSection.offsetTop - 50;
        let id = navMenuSection.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".bottom-nav .menu li a[href*=" + id +"]").classList.add("current");
        } else{
            document.querySelector(".bottom-nav .menu li a[href*=" + id +"]").classList.remove("current");
        }
    });
});





// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", () =>{
    const bottomNav = document.querySelector(".bottom-nav");

    bottomNav.classList.toggle("active", window.scrollY < 10);
});




// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");

    if(window.scrollY < 10){
        menuHideBtn.classList.remove("active")

        function scrollStopped(){
            bottomNav.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    };



    if(window.scrollY > 10){
        menuHideBtn.classList.add("active")

        function scrollStopped(){
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    };
});


// Hide bottom navigation menu on click menu-hide-btn.


// Show bottom navication menu on click menu-show-btn.


/* ==========================================================
    To-top-button with scroll indicator bar
=============================================================*/




/* ==========================================================
    Customized cursor on mousemove
=============================================================*/

