document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#purple-div", {duration: 1, x: -1000});
    gsap.from("#face", {duration: 1, opacity: 0});
    gsap.from("#face", {clearProps: 'all', duration: 1, x:100});
    TweenLite.from('#face', {y:20, ease:Linear.easeNone});
    console.log("hej")

    let refreshCount = 1;
    let currentHour = getHours;
    localStorage.setItem('refreshCount', refreshCount); 
    let test = localStorage.getItem('refreshCount')
    console.log(test)
    console.log(currentHour)
})
