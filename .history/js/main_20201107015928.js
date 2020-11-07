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



        const button = document.querySelector(".toggle-page");
        const page1 = document.querySelector(".page1");

        const resetPage = () => {
          console.log("💣 Reset page");

          console.log("Killing triggers");
          ScrollTrigger.getAll().forEach(st => st.kill());
        };

        const initPage = (activePage) => {
          const teasers = activePage.querySelectorAll(".teaser--animated");

          gsap.utils.toArray(teasers).forEach((teaser, i) => {
            ScrollTrigger.create({
              markers: true,
              trigger: teaser,
              start: "top center",
              end: "bottom center",
              toggleClass: "teaser--in-view",
              onEnter: () => scrollToElementCenter(teaser)
            });
          });
        };

        const scrollToElementCenter = (el) => {
          console.log("scroll to element center");

          const offsetY = (window.innerHeight - el.offsetHeight) / 2;

          gsap.to(window, {
            duration: 1,
            scale: 0.5,
            scrollTo: {
              y: el,
              offsetY: offsetY,
              autoKill: false
            }
          });
        };

        (function () {
          initPage(page1);
        })();





        let body = document.getElementsByTagName('body')[0];
        let nav_button = document.getElementById('nav-button')
        
        
        body.addEventListener('click' ,myFunction)

        function myFunction() {
            if (nav_button.classList.contains('collapsed')) {
                console.log('hej')
            }
            // document.getElementById("nav-button").click(); // Click on the checkbox
        }



})