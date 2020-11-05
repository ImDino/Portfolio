document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#purple-div", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});
    console.log("hej")


    let localRefreshCount;
    
    console.log(localRefreshCount);
    if(localStorage.getItem('refreshCount') == undefined) {
        localStorage.setItem('refreshCount', 1);
        localRefreshCount = 1;
    } else {
        localRefreshCount++;
    }
    console.log(localRefreshCount);
    
    
    let localStorageHour = localStorage.getItem('currentHour')
    localRefreshCount = localStorage.getItem('refreshCount');
    let today = new Date();
    let currentHour = today.getHours();

    if (currentHour != localStorageHour) {
        localStorage.setItem('currentHour', ); 
        localStorage.setItem('refreshCount', refreshCount);
    }

})
