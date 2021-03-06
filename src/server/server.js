const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

const catalogJSONPath = path.resolve(__dirname, './db/products.json');
const cartJSONPath = path.resolve(__dirname, './db/userCart.json');

app.use(express.json()); // Даем знать приложению, что работаем с json'ом
app.use('/', express.static(path.resolve(__dirname, '../public')));

app.get('/api/products', (req, res) => {
  fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/cart', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.post('/api/cart', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const cart = JSON.parse(data);
      cart.contents.push(req.body);
      fs.writeFile(cartJSONPath, JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
});

app.put('/api/cart/:id', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const cart = JSON.parse(data);
      const find = cart.contents.find(el => el.id_product === +req.params.id);
      find.quantity += req.body.quantity;
      fs.writeFile(cartJSONPath, JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
});

app.delete('/api/cart/:id', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const cart = JSON.parse(data);
      const find = cart.contents.find(el => el.id_product === +req.params.id);
      cart.contents.splice(cart.contents.indexOf(find), 1);
      fs.writeFile(cartJSONPath, JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
});

app.delete('/api/allCart', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const cart = JSON.parse(data);
      cart.contents = [];
      fs.writeFile(cartJSONPath, JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
});

const port = 8888;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
