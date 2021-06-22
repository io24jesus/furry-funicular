const express = require('express');
const plantilla = require('express-handlebars');
const path = require('path');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);


// configuración de handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', plantilla({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');


app.get('/', (req, res) => {
    res.render('index');
});


// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});