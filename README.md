# Contact Management System

A REST API for managing personal and professional contacts using Node.js, Express.js, MongoDB, and Mongoose.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Project Features

- Create a new contact
- View all contacts
- View a contact by Contact ID
- Update an existing contact
- Delete a contact
- Validate phone numbers
- Validate email addresses
- Prevent duplicate Contact IDs
- Prevent duplicate email addresses
- MongoDB database integration

## Project Structure

```text
my-project/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── src/
    ├── app.js
    ├── models/
    │   └── Contact.js
    └── routes/
        └── contacts.js