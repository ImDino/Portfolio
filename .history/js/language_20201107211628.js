let lang = {
    eng: {
        landingPage: 'developer'
    },
    swe: {
        
    },
}

document.addEventListener('DOMContentLoaded', ()=> {
    let langSetting = 'eng';    
    let allElements = document.body.getElementsByTagName("*");
    
    for (let element of allElements) {
        
        if (element.id in lang[langSetting]) {
            console.log('hej')
            //console.log(element.id)
        }
    }
});