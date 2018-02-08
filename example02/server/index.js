const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();

app.use(express.static('client/dist'));
app.engine('html', es6Renderer);
app.set('views', 'client/dist');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('home', {
    locals: {
      title: 'Home!!!'
    }
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    locals: {
      title: 'About!!!'
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
