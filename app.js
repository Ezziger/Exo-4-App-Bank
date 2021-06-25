const express = require('express'),
      app = express(),
      path = require('path'),
      LocalStorage = require('node-localstorage').LocalStorage;
      localStorage = new LocalStorage('./localStorage');

      
      
      /* EJS - MOTEUR DE TEMPLATING
      *******************************************************************/
     app.set('view engine', 'ejs');
     app.use(express.static(path.join(__dirname, 'public')));
     
     
     
     /* BASE DE DONNEES CUSTOMERS
     *******************************************************************/
    const customersList = [
      {
        lastName: "SPECIMEN",
        firstName: "Christophe",
        credit : [
          { 
            salaire : 1200
          },
          {
            prime : 500
          },
        ],
        debit : [
          {
            EDF : 50
          },
          {
            Eau : 65
          }
        ],
      },
      {
        lastName: "DUPONT",
        firstName: "Francoise",
        credit : [
          {
            salaire : 2200
          },
          {
            prime : 1500
          },
        ],
        debit : [
          {
            telephone : 55
          },
          {
            internet : 30
          }
        ],    }
      ]

// LOCAL STORAGE

      localStorage.setItem('customer', JSON.stringify(customersList));
      console.log(localStorage.getItem('customer'));
      


/* CONTROLLERS
*******************************************************************/

// GET Page '/'
app.get('/', (req, res) => {
    res.render('index')
})

//GET Page '/customer'
app.get('/customer/:id', (req, res) => {
    res.render('customer')
})


/* LOCALHOST:3002
*******************************************************************/
app.listen(3002, () => console.log('Server started on port 3002'));