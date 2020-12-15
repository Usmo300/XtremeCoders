const express =  require ('express');
const exphbs = require ('express-handlebars');
const app = express ();

app.use(express.static('public'));
app.engine('hbs', exphbs({
 
    layoutsDir: __dirname + '/views/layouts', 
    partialsDir:__dirname + '/views/partials',
        

    extname: 'hbs'

}));
app.set('view engine', 'hbs');
app.get('/',function(req, res){
res.render('home');

});

app.listen(3000);

