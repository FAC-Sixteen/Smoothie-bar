const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const home = require('./controllers/home')

const app = express();

app.set('port', process.env.PORT || 7000);
app.use(express.static(path.join(__dirname, '..','public')));

/*route handlers*/
app.get('/', home);

app.set('view', path.join(__dirname,'views'));
app.set('view engine','hbs');

app.engine(
    'hbs', 
    handelbars({
        extname:'hbs',
        layoutsDir:path.join(__dirname,'views','layouts'),
        partialsDir:path.join(__dirname,'views','partials'),
        defaultLayout:'main'
    })
);

module.exports = app;