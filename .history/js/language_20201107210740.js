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
        if (lang.includes('developer')) {
            console.log('hej')
            //console.log(element.id)
        }
    }
});