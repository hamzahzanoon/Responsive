window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100)
});


//show/hide faq answer

const feqs = document.querySelectorAll('.feq');

feqs.forEach((feq) => {
    feq.addEventListener('click', () => {
        feq.classList.toggle('open');

        //change icon
        // const icon = feq.querySelector('.feq_icon i');
        // if(icon.className === 'uil uil-plus') {
        //     icon.className = "uil uil-plus"
        // }else {
        //     icon.className = "uil uil-plus";
        // }
    })
})

 //show/hide nav menu
const navMenu = document.querySelector(".nav_menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
    navMenu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
});

const closeNav = (e) => {
    e.preventDefault();
    navMenu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
}

closeMenuBtn.addEventListener("click", closeNav);


