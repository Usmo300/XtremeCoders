const express =  require ('express');
const exphbs = require ('express-handlebars');
const app = express ();

app.use(express.static('public'));
app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
}));
app.set('view engine', 'handlebars');
app.get('/',function(req, res){
res.render('home');

});

app.listen(3000);