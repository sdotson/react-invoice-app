var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    Sequelize = require('sequelize'),
    _ = require('lodash');


sequelize = new Sequelize('sqlite://' + path.join(__dirname, 'invoices.sqlite'), {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'invoices.sqlite')
});

Customer = sequelize.define('customers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
});

Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  }
});

Invoice = sequelize.define('invoices', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: Sequelize.INTEGER
  },
  discount: {
    type: Sequelize.DECIMAL
  },
  total: {
    type: Sequelize.DECIMAL
  }
});

InvoiceItem = sequelize.define('invoice_items', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  invoice_id: {
    type: Sequelize.INTEGER
  },
  product_id: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.DECIMAL
  }
});

sequelize.sync().then(function() {
  Customer.create({
    name: "Mark Benson",
    address: "353 Rochester St, Rialto FL 43250",
    phone: "555-534-2342"
  });

  Customer.create({
    name: "Bob Smith",
    address: "215 Market St, Dansville CA 94325",
    phone: "555-534-2342"
  });

  Customer.create({
    name: "John Draper",
    address: "890 Main St, Fontana IL 31450",
    phone: "555-534-2342"
  });

  Product.create({
    name: "Parachute Pants",
    price: 29.99
  });

  Product.create({
    name: "Phone Holder",
    price: 9.99
  });

  Product.create({
    name: "Pet Rock",
    price: 5.99
  });

  Product.create({
    name: "Egg Timer",
    price: 15.99
  });

  Product.create({
    name: "Neon Green Hat",
    price: 21.99
  });

}).catch(function(e) {
  console.log("ERROR SYNCING WITH DB", e);
});

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