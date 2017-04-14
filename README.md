# Background

This project began as part of a coding interview. The challenge was to create an invoice application given a set of framework-agnostic starter files. I decided to go with React. I thought the challenge was interesting enough that I continued working on it after the interview.

# Dependencies

- sqlite3
- node
- npm

# Getting Started

###### Seed database with data
`node seed_database`

###### Install npm dependencies
`npm install`

###### Run the node server
`npm start`

###### Viewing the application in your browser
`http://localhost:8000`

# SQLite Schema

## Customers

- id (integer)
- name (string)
- address (string)
- phone (string)


## Products

- id (integer)
- name (string)
- price (decimal)

## Invoices

- id (integer)
- customer_id (integer)
- discount (decimal)
- total (decimal)

## InvoiceItems

- id (integer)
- invoice_id (integer)
- product_id (integer)
- quantity (decimal)


# API Endpoints

## Customers
```
GET|POST          /api/customers
GET|PUT|DELETE    /api/customers/{id}
```

## Products
```
GET|POST          /api/products
GET|PUT|DELETE    /api/products/{id}
```
## Invoices
```
GET|POST          /api/invoices
GET|PUT|DELETE    /api/invoices/{id}
```

## InvoiceItems
```
GET|POST          /api/invoices/{id}/items
GET|PUT|DELETE    /api/invoices/{invoice_id}/items/{id}
```
