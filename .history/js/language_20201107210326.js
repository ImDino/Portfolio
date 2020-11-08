// let lang = {
//     eng: {
//         landingPage = 'developer'
//     },
//     swe: {
//         landingPage = 'utvecklare'
//     }
// }

document.addEventListener('DOMContentLoaded', ()=> {
    
    let allElements = document.body.getElementsByTagName("*");
    console.log(allElements);
    for (let element of allElements) {
        console.log(element.id)
    }
});