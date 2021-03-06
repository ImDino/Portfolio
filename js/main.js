document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    
    // landing page animations to the text and vector face
    gsap.from("#home-text", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    gsap.from("#face", {clearProps: 'all', duration: 1, scale:0.5});
    gsap.to("#face", {
        clearProps: 'all', duration: 1, scale:1, onComplete:function(){ 
            document.getElementById('home-page').classList.add('overflowHidden');
        }
    });
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});
    
    //scroll icon
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 1}); }, 1000);
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 0}); }, 2000);
    

    // animating the rest of the pages at first sight
    let about = document.getElementById('about-page')
    let contact = document.getElementById('contact-page')
    
    let projectsHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects-header',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    projectsHeader.addLabel('header').from('#projects-header', {opacity:0 , y:50})
    
    let apiHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '#api-header',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    apiHeader.addLabel('header').from('#api-header', {opacity:0 , y:50})
    
    let apiPicture = gsap.timeline({
        scrollTrigger: {
            trigger: '#api-picture',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    apiPicture.addLabel('header').from('#api-picture', {opacity:0 , y:50})
    
    let apiText = gsap.timeline({
        scrollTrigger: {
            trigger: '.api-text',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    apiText.addLabel('header').from('.api-text', {opacity:0 , y:50})
    
    let yatzyHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '#yatzy-header',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    yatzyHeader.addLabel('header').from('#yatzy-header', {opacity:0 , y:50})
    
    let yatzyPicture = gsap.timeline({
        scrollTrigger: {
            trigger: '#yatzy-picture',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    yatzyPicture.addLabel('header').from('#yatzy-picture', {opacity:0 , y:50})
    
    let yatzyText = gsap.timeline({
        scrollTrigger: {
            trigger: '.yatzy-text',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    yatzyText.addLabel('header').from('.yatzy-text', {opacity:0 , y:50})
    
    let moreSoon = gsap.timeline({
        scrollTrigger: {
            trigger: '#more-coming-soon',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    moreSoon.addLabel('header').from('#more-coming-soon', {opacity:0 , y:50})
    
    let aboutHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '#about-header',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    aboutHeader.addLabel('header').from('#about-header', {opacity:0 , y:50})
    
    let aboutText = gsap.timeline({
        scrollTrigger: {
            trigger: '#about-text',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    aboutHeader.addLabel('header').from('#about-text', {opacity:0 , y:50})
    
    let contactHeader = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact-header',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    contactHeader.addLabel('header').from('#contact-header', {opacity:0 , y:50})
    
    let contactText = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact-text',
            start: 'top 80%',
            clearProps: 'all',
            duration: 1.5
        }
    });

    contactHeader.addLabel('header').from('#contact-text', {opacity:0 , y:50})
    
    const navbar = document.getElementById('navbar');
    const homeBtn = document.getElementById('home-btn')  
    const projectsBtn = document.getElementById('projects-btn')  
    const aboutBtn = document.getElementById('about-btn')  
    const contactBtn = document.getElementById('contact-btn')
    
    gsap.to(".navbar", {
        scrollTrigger: {    
            onUpdate: self => {
                if (self.direction == 1 && $(window).width() > 993) {
                    navbar.classList.remove('scrolled-up');
                    navbar.classList.add('scrolled-down');
                } else if ($(window).width() > 993){
                    navbar.classList.remove('scrolled-down');
                    navbar.classList.add('scrolled-up');
                }
            }
        }
    });

    
    if ($(window).width() > 990){
        gsap.to(".navbar", {
            scrollTrigger: {
                trigger: '#navbar',
                start: 'top 0%',
                toggleActions: "play none reverse none",
                duration: 0
            },
        
        boxShadow:"0px 6px 25px -7px rgba(0,0,0,0.32)"
        });
    }
    
    homeBtn.addEventListener('click', () => {
        gsap.to(window, {scrollTo:"#home-page"});
    })
    projectsBtn.addEventListener('click', () => {
        gsap.to(window, {scrollTo:"#projects-page"});
    })
    aboutBtn.addEventListener('click', () => {
        gsap.to(window, {scrollTo:"#about-page"});
    })
    contactBtn.addEventListener('click', () => {
        gsap.to(window, {scrollTo:"#contact-page"});
    })

    // when nav-bar is toggled open (mobile), clicking outside will cancel default action and close the menu
    let body = document.getElementsByTagName('body')[0];
    let nav_button = document.getElementById('nav-button')

    body.addEventListener('click' , (e)=> {
        if (nav_button.getAttribute('aria-expanded') == 'true') {
            e.preventDefault()
            nav_button.click();
        }
    })
})