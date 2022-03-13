const express = require('express');
const {addContact, 
       getAllContacts, 
       getContact,
       updateContact,
       deleteContact
      } = require('../controllers/ContactController');

const router = express.Router();

router.post('/contact', addContact);
router.get('/contacts/:id', getAllContacts);
router.get('/contact/:id', getContact);
router.put('/contact/:id', updateContact);
router.delete('/contact/:id', deleteContact);


module.exports = {
    routes: router
}