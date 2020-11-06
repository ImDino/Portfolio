document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#home-text", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});




    let header = document.getElementsByClassName('header')[0];
    // console.log(header)
    let tl2 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: header,
            // pin: true,   // pin the trigger element while active
            start: "bottom bottom", // when the top of the trigger hits the top of the viewport
            end: "+=100", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                // ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                overwrite: 'auto'
            }
        }
    });


    let custom = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            // trigger: header,
            // pin: true,   // pin the trigger element while active
            start: "bottom bottom", // when the top of the trigger hits the top of the viewport
            end: "+=100", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // snap: {
            //     snapTo: "labels", // snap to the closest label in the timeline
            //     duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            //     // ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
            //     overwrite: 'auto'
            // }
            // onToggle: self => console.log('hej')
        }
    });
    
    let language = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            // trigger: header,
            // pin: true,   // pin the trigger element while active
            start: "top middle", // when the top of the trigger hits the top of the viewport
            end: "+=100", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // snap: {
            //     snapTo: "labels", // snap to the closest label in the timeline
            //     duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            //     // ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
            //     overwrite: 'auto'
            // }
            // onToggle: self => console.log('language')
        }
    });

    language.addLabel('language').to('#language', {opacity:0})
    language.addLabel('language').to('#language', {x:-100})

    // tl.addLabel("start")
    // .from("#projects-page", {scale: 0.3, autoAlpha: 0})
    // .from("#projects-page2", {scale: 0.3, autoAlpha: 0})
    // .addLabel("color")
    
    // tl.addLabel("start")
    
    // tl2.addLabel("start")
    //     .to("#projects-page", {y: -100})
    //     .to(header, {y: -100})
    // .to(header, {opacity: 0})
    

    let nav_button = document.getElementById('nav-button');
    console.log(nav_button)




        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);
        
        const button = document.querySelector(".toggle-page");
        const page1 = document.querySelector(".page1");
        // const page2 = document.querySelector(".page2");
        
        
        /**
         * Reset page.
         * => Kills existing scroll trigger.
         */
        const resetPage = () => {
          console.log("💣 Reset page");
          
          console.log("Killing triggers");
          ScrollTrigger.getAll().forEach(st => st.kill());
        };
        
        /**
         * Initialize the page.
         * Creates the scroll trigger.
         */
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
        
        /**
         * Scroll to center of given element.
         */
        const scrollToElementCenter = (el) => {
          console.log("scroll to element center");
        
          // Calculate offset to put the element in the center.
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
        
        /**
         * Add event listener to toggle between pages
         * via button.
         */
        
        // button.addEventListener("click", () => {
        //   page1.classList.toggle("page--visible");
        //   page2.classList.toggle("page--visible");
        
        //   resetPage();
        
        //   // Init page that is now active.
        //   if (page1.classList.contains("page--visible")) {
        //     initPage(page1);
        //   } else if (page2.classList.contains("page--visible")) {
        //     initPage(page2);
        //   }
        // });
        
        /**
         * Init page on load.
         */
        (function () {
          initPage(page1);
        })();


    
    
    
    
    
    
    
    
    
    
    
        // localStorage.clear()

    /*:::::::START:::::::::
    ::: Refresh Counter :::
    :::::::::::::::::::::*/

    // if(localStorage.getItem('refreshCount') == null) {
    //     localStorage.setItem('refreshCount', 1);
    // } else {
    //     let  localRefreshCount = localStorage.getItem('refreshCount')
    //     localRefreshCount++;
    //     localStorage.setItem('refreshCount', localRefreshCount);
    // }
    // if (parseInt(localStorage.getItem('refreshCount')) > 10) {
    //     localStorage.setItem('refreshCount', 1);
    // }
    // console.log('RefreshCount: '+localStorage.getItem('refreshCount'))

    
    /*::::::::END::::::::::
    ::: Refresh Counter :::
    :::::::::::::::::::::*/
})


