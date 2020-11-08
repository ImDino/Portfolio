let lang = {
    eng: {
        landingPage: 'developer'
    },
    swe: {
        landingPage: 'utvecklare'
    },
}




document.addEventListener('DOMContentLoaded', ()=> {
    let langSetting = 'eng';    
    let allElements = document.body.getElementsByTagName("*");
    
    for (let element of allElements) {
        if (element.id in lang[langSetting]) {
            element.innerHTML = lang[langSetting][element.id]
            //console.log(element.id)
        }
    }

    loader.style.display = 'none';
});