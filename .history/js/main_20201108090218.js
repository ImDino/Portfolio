document.addEventListener('DOMContentLoaded', () => {

    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);


    gsap.from("#home-text", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});


    
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 1}); }, 1000);
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 0}); }, 2000);
    

    let header = document.getElementsByClassName('header')[0];
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: header,
            start: "bottom bottom",
            end: "+=100",
            scrub: 1,
            snap: {
                snapTo: "labels",
                duration: {min: 0.2, max: 1},
                delay: 0.2,
                overwrite: 'auto'
            }
        }
    });

    let custom = gsap.timeline({
        scrollTrigger: {
            start: "bottom bottom",
            end: "+=100",
            scrub: 1,
        }
    });

    let language = gsap.timeline({
        scrollTrigger: {
            start: "bottom bottom",
            end: "+=20",
            scrub: 1,
        }
    });

    let nav1 = gsap.timeline({
        scrollTrigger: {
            start: "bottom bottom",
            end: "+=20",
            scrub: 1
        }
    });

    let about = document.getElementById('about-page')
    
    let header = gsap.timeline({
        scrollTrigger: {
            trigger: '.header-parent',
            clearProps: 'all',
            duration: 1, x:100,
        }
    });

    let nav2 = gsap.timeline({
        scrollTrigger: {
            trigger: 'about',
            start: "bottom bottom",
            end: "+=100",
            scrub: 1,
        }
    });

    let contact = document.getElementById('contact-page')

    let nav3 = gsap.timeline({
        scrollTrigger: {
            trigger: 'contact',
            start: "bottom bottom",
            end: "+=100",
            scrub: 1
        }
    });

    let scroll_icon = document.getElementById('scroll-icon')

    let scroll = gsap.timeline({
        scrollTrigger: {
            trigger: 'scroll_icon',
            start: "bottom bottom",
            end: "+=100",
            scrub: 1
        }
    });

    language.addLabel('language').to('#language', {opacity:0})
    language.addLabel('language').to('#language', {x:-100})


    const homeBtn = document.getElementById('home-btn')  
    const projectsBtn = document.getElementById('projects-btn')  
    const aboutBtn = document.getElementById('about-btn')  
    const contactBtn = document.getElementById('contact-btn')
    
    homeBtn.addEventListener('click', () => {
        gsap.to(window, {duration: 1, scrollTo:"#home-page"});
    })
    projectsBtn.addEventListener('click', () => {
        gsap.to(window, {duration: 1, scrollTo:"#projects-page"});
    })
    aboutBtn.addEventListener('click', () => {
        gsap.to(window, {duration: 1, scrollTo:"#about-page"});
    })
    contactBtn.addEventListener('click', () => {
        gsap.to(window, {duration: 1, scrollTo:"#contact-page"});
    })
    
    let body = document.getElementsByTagName('body')[0];
    let nav_button = document.getElementById('nav-button')
    
    
    body.addEventListener('click' , (e)=> {
        if (nav_button.getAttribute('aria-expanded') == 'true') {
            e.preventDefault()
            nav_button.click();
        }
    })

})