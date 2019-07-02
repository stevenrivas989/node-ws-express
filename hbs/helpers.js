const hbs = require('hbs')

//Helpers
hbs.registerHelper('getAnio',()=>new Date().getFullYear())
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((p,i) => {
        palabras[i]= p.charAt(0).toUpperCase()+p.slice(1).toLowerCase();
    });

    return palabras.join(' ')
})
