const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  extname: '.hbs',
  partialsDir: ['client/dist/shared/']
});

app.use(express.static('client/dist'));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'client/dist');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'home',
    items: [
      { name: 'Jake', age: 31 },
      { name: 'Jason', age: 35 }
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about',
    name: 'Zhon',
    age: 40
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
