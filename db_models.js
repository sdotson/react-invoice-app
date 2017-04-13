var path = require('path'),
    Sequelize = require('sequelize');

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
    type: Sequelize.TEXT
  },
  total: {
    type: Sequelize.TEXT
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
