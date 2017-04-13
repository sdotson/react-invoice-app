var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    Sequelize = require('sequelize'),
    _ = require('lodash'),
    db_models = require('./db_models');

var app = module.exports = express();
app.set('port', process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// CUSTOMERS API

app.route('/api/customers')
  .get(function(req, res) {
    Customer.findAll().then(function(customers) {
      res.json(customers);
    })
  })
  .post(function(req, res) {
    var customer = Customer.build(_.pick(req.body, ['name', 'address', 'phone']));
    customer.save().then(function(customer){
      res.json(customer);
    });
  });

app.route('/api/customers/:customer_id')
  .get(function(req, res) {
    Customer.findById(req.params.customer_id).then(function(customer) {
      res.json(customer);
    });
  })
  .put(function(req, res) {
    Customer.findById(req.params.customer_id).then(function(customer) {
      customer.update(_.pick(req.body, ['name', 'address', 'phone'])).then(function(customer) {
        res.json(customer);
      });
    });
  })
  .delete(function(req, res) {
    Customer.findById(req.params.customer_id).then(function(customer) {
      customer.destroy().then(function(customer) {
        res.json(customer);
      });
    });
  });

// PRODUCTS API

app.route('/api/products')
  .get(function(req, res) {
    Product.findAll().then(function(products) {
      res.json(products);
    })
  })
  .post(function(req, res) {
    var product = Product.build(_.pick(req.body, ['name', 'price']));
    product.save().then(function(product){
      res.json(product);
    });
  });

app.route('/api/products/:product_id')
  .get(function(req, res) {
    Product.findById(req.params.product_id).then(function(product) {
      res.json(product);
    });
  })
  .put(function(req, res) {
    Product.findById(req.params.product_id).then(function(product) {
      product.update(_.pick(req.body, ['name', 'price'])).then(function(product) {
        res.json(product);
      });
    });
  })
  .delete(function(req, res) {
    Product.findById(req.params.product_id).then(function(product) {
      product.destroy().then(function(product) {
        res.json(product);
      });
    });
  });


// INVOICES API

app.route('/api/invoices')
  .get(function(req, res) {
    Invoice.findAll().then(function(invoices) {
      res.json(invoices);
    })
  })
  .post(function(req, res) {
    var invoice = Invoice.build(_.pick(req.body, ['customer_id', 'discount', 'total']));
    invoice.save().then(function(invoice){
      res.json(invoice);
    });
  });

app.route('/api/invoices/:invoice_id')
  .get(function(req, res) {
    Invoice.findById(req.params.invoice_id).then(function(invoice) {
      res.json(invoice);
    });
  })
  .put(function(req, res) {
    Invoice.findById(req.params.invoice_id).then(function(invoice) {
      invoice.update(_.pick(req.body, ['customer_id', 'discount', 'total'])).then(function(invoice) {
        console.log('------TEST--------');
        console.log(req.body);
        console.log(invoice.total, invoice.discount);
        console.log('------TEST--------');
        res.json(invoice);
      });
    });
  })
  .delete(function(req, res) {
    Invoice.findById(req.params.invoice_id).then(function(invoice) {
      invoice.destroy().then(function(invoice) {
        res.json(invoice);
      });
    });
  });


// INVOICE ITEMS API

app.route('/api/invoices/:invoice_id/items')
  .get(function(req, res) {
    InvoiceItem.findAll({where: { invoice_id: req.params.invoice_id }}).then(function(invoice_items) {
      res.json(invoice_items);
    })
  })
  .post(function(req, res) {
    var invoice_item = InvoiceItem.build(_.pick(req.body, ['product_id', 'quantity']));
    invoice_item.set('invoice_id', req.params.invoice_id);
    invoice_item.save().then(function(invoice_item){
      res.json(invoice_item);
    });
  });

app.route('/api/invoices/:invoice_id/items/:id')
  .get(function(req, res) {
    InvoiceItem.findById(req.params.id).then(function(invoice_item) {
      res.json(invoice_item);
    });
  })
  .put(function(req, res) {
    InvoiceItem.findById(req.params.id).then(function(invoice_item) {
      invoice_item.update(_.pick(req.body, ['product_id', 'quantity'])).then(function(invoice_item) {
        res.json(invoice_item);
      });
    });
  })
  .delete(function(req, res) {
    InvoiceItem.findById(req.params.id).then(function(invoice_item) {
      invoice_item.destroy().then(function(invoice_item) {
        res.json(invoice_item);
      });
    });
  });


// Redirect all non api requests to the index
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Starting express server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
