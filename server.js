const express = require('express')
const hbs = require('hbs')
const app = express();
require('./hbs/helpers')

const port = process.env.PORT || 3000


app.use(express.static(__dirname+'/public'));
 
//Express HBS
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');
 


app.get('/', (req, res)=> {
    res.render('home',{
        nombre:'steven rivas',
        anio:new Date().getFullYear()
    })
})

app.get('/about', (req, res)=> {
    res.render('about',{
        anio:new Date().getFullYear()
    })
})

app.listen(port,()=>{
    console.log(`Listen in port: ${port}`);
    
})
