let lang = {
    eng: {
        landingPage: 'developer'
    },
    swe: {
        landingPage: 'utvecklare'
    },
    landingPage: 'utvecklare'
}

document.addEventListener('DOMContentLoaded', ()=> {
    
    let allElements = document.body.getElementsByTagName("*");
    
    for (let element of allElements) {
        
        if (element.id in lang) {
            console.log('hej')
            //console.log(element.id)
        }
    }
});