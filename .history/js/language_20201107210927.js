let lang = {
    eng: {
        landingPage: 'developer'
    },
    swe: {
        landingPage: 'utvecklare'
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    
    let allElements = document.body.getElementsByTagName("*");
    
    for (let element of allElements) {
        console.log(element.id)
        if (element.id in lang) {
            console.log('hej')
            //console.log(element.id)
        }
    }
});