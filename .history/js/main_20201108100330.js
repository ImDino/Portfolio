document.addEventListener('DOMContentLoaded', () => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    gsap.from("#home-text", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});
    
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 1}); }, 1000);
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 0}); }, 2000);
    
    let language = gsap.timeline({
        scrollTrigger: {
            start: "bottom bottom",
            end: "+=20",
            scrub: 1,
        }
    });
    
    language.addLabel('language').to('#language', {opacity:0})
    language.addLabel('language').to('#language', {x:-100})

    let about = document.getElementById('about-page')
    let contact = document.getElementById('contact-page')
    
    let projectsHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects-header',
            clearProps: 'all',
            duration: 1.5, x:100,
        }
    });

    projectsHeader.addLabel('header').from('.header-parent', {opacity:0 , y:20})
    
    let apiHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '#api-header',
            clearProps: 'all',
            duration: 1.5, x:100,
        }
    });

    apiHeader.addLabel('header').from('#api-header', {opacity:0 , y:20})
    
    let apiPicture = gsap.timeline({
        scrollTrigger: {
            trigger: '#api-picture',
            clearProps: 'all',
            duration: 1.5, x:100,
        }
    });

    apiPicture.addLabel('header').from('#api-picture', {opacity:0 , y:20})
    
    let apiText = gsap.timeline({
        scrollTrigger: {
            trigger: '.api-text',
            clearProps: 'all',
            duration: 1.5, x:100,
        }
    });

    apiText.addLabel('header').from('.api-text', {opacity:0 , y:20})
    
    let moreSoon = gsap.timeline({
        scrollTrigger: {
            trigger: '#more-coming-soon',
            clearProps: 'all',
            duration: 1, x:100,
        }
    });

    moreSoon.addLabel('header').from('#more-coming-soon', {opacity:0 , y:20})
    

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