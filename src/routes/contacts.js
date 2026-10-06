const express = require('express');
const Contact = require('../models/Contact');


const router = express.Router();
router.post('/', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();

        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findOne({
            contactId: req.params.id
        });

        if (!contact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findOneAndUpdate(
            { contactId: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedContact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deletedContact = await Contact.findOneAndDelete({
            contactId: req.params.id
        });

        if (!deletedContact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            message: 'Contact deleted successfully',
            contact: deletedContact
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
module.exports = router;