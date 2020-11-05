document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#home-text", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});



    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: "#projects-page",
            pin: true,   // pin the trigger element while active
            start: "top bottom", // when the top of the trigger hits the top of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
          }
        }
    });
    tl.addLabel("start")
    .from("#projects-page", {scale: 0.3, rotation:45, autoAlpha: 0})
    .addLabel("color")
    .from("#projects-page", {backgroundColor: "#28a92b"})
    .addLabel("spin")
    .to("#projects-page", {rotation: 360})
    .addLabel("end");

    // localStorage.clear()

    /*:::::::START:::::::::
    ::: Refresh Counter :::
    :::::::::::::::::::::*/

    if(localStorage.getItem('refreshCount') == null) {
        localStorage.setItem('refreshCount', 1);
    } else {
        let  localRefreshCount = localStorage.getItem('refreshCount')
        localRefreshCount++;
        localStorage.setItem('refreshCount', localRefreshCount);
    }
    if (parseInt(localStorage.getItem('refreshCount')) > 10) {
        localStorage.setItem('refreshCount', 1);
    }
    console.log('RefreshCount: '+localStorage.getItem('refreshCount'))

    
    /*::::::::END::::::::::
    ::: Refresh Counter :::
    :::::::::::::::::::::*/
})
