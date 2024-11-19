const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/success', (req, res) => {

    const data = req.body;

    console.log(data);
    res.render('confirmation', {details : data});

    /* 

    [Object: null prototype] {
  fname: 'Kiabusb',
  lname: 'BFbuf',
  email: 'pinheads206@gmail.com',
  method: 'delivery',
  toppings: [ 'pepperoni', 'olives', 'sausage', 'artichokes' ],
  size: 'small',
  comment: 'wkqofjasojf',
  discount: 'on'
    
    
    
    */
});
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});