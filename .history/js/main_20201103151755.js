document.addEventListener('DOMContentLoaded', () => {
    let purple_div = document.querySelector('purple-div')
    gsap.to(purple_div, {duration: 1, opacity: 0.3});
})
