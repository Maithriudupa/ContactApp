'use strict';

const firebase = require('../db');
const Contact = require('../models/contacts');
const firestore = firebase.firestore();


const addContact = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('contacts').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllContacts = async (req, res, next) => {
    try {
        const uid = req.params.id;
        const contacts = await firestore.collection('contacts');
        const data = await contacts.get();
        const contactsArray = [];
        if(data.empty) {
            res.status(404).send('No contact record found');
        }else {
            data.forEach(doc => {
                if(( doc.data().Unique_id===uid)){
                  
               
                const contacts = new Contact(
                    doc.id,
                    doc.data().contactName,
                    doc.data().contactNumber,
                    doc.data().contactEmail,
                   
                   
                );
                contactsArray.push(contacts);
            }
            });
            res.send(contactsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const contact = await firestore.collection('contacts').doc(id);
        const data = await contact.get();
        if(!data.exists) {
            res.status(404).send('Contact with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const contact =  await firestore.collection('contacts').doc(id);
        await contact.update(data);
        res.send('Contact record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('contacts').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addContact,
    getAllContacts,
    getContact,
    updateContact,
    deleteContact
}