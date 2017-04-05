var path = require('path'),
    db_models = require('./db_models'),
    Sequelize = require('sequelize');

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
