document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#home-text", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});


    gsap.from("#home-page", {
        scrollTrigger: "#home-page", // start the animation when ".box" enters the viewport (once)
        y: 500
    });


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
