document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#purple-div", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});

    // localStorage.clear()
    
    
    console.log('LocalStorage RefreshCount: '+localStorage.getItem('refreshCount'));
    if(localStorage.getItem('refreshCount') == null) {
        localStorage.setItem('refreshCount', 1);
        let localRefreshCount = 1;
        console.log(localRefreshCount);
    } else {
        console.log(localStorage.getItem('refreshCount'));
        let localRefreshCount = localStorage.getItem('refreshCount')
        localRefreshCount++;
        console.log('refreshcount: '+localRefreshCount);
    }
    
    
    let localStorageHour = localStorage.getItem('currentHour')
    localRefreshCount = localStorage.getItem('refreshCount');
    let today = new Date();
    let currentHour = today.getHours();

    if (currentHour != localStorageHour) {
        localStorage.setItem('currentHour', ); 
        localStorage.setItem('refreshCount', refreshCount);
    }

})
