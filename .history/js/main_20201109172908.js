document.addEventListener('DOMContentLoaded', () => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    gsap.from("#home-text", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    gsap.from("#face", {clearProps: 'all', duration: 1, scale:0});
    gsap.to("#face", {clearProps: 'all', duration: 1, scale:1,
    onComplete:function(){
        document.getElementById('home-page').classList.add('overflowHidden');
    }}); 
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});
    
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 1}); }, 1000);
    setTimeout(function(){ gsap.to('.mouse', {duration: 1, opacity: 0}); }, 2000);
    
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