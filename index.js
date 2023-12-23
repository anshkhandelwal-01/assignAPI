const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const expressEjsLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('./assets'));

app.use(expressEjsLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/', require('./routes'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});