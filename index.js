// Create a telephone package
class Telephone {
    constructor() {
        this.contacts = [];
        this.observers = [];
    }

    // Method to add a phone number
    addPhoneNumber(name, phoneNumber) {
        this.contacts.push({ name, phoneNumber });
    }

    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(contact => contact.phoneNumber !== phoneNumber);
        if (this.contacts.length < initialLength) {
            console.log(`Contact with phone number ${phoneNumber} removed`);
        } else {
            console.log(`Contact with phone number ${phoneNumber} not found`);
        }
    }

    // Method to dial a phone number
    dialPhoneNumber(phoneNumber) {
        const contact = this.contacts.find(contact => contact.phoneNumber === phoneNumber);
        if (contact) {
            console.log(`Now Dialing ${phoneNumber}...`);
            this.notifyObservers(phoneNumber);
        } else {
            console.log(`Contact with phone number ${phoneNumber} not found`);
        }
    }

    // Method to get all contacts
    getContacts() {
        return this.contacts;
    }

    // Method to add observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Method to remove observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify observers
    notifyObservers(observer) {
        this.observers.forEach(observer => observer());
    }   
}

// Create observer class
class Observer {
    constructor(name) {
        this.name = name;
    }

    // Method to be called by the telephone class to notify the observer
    notify(phoneNumber) {
        if (this.name === 'PrintPhoneNumber') {
            console.log(`Phone number: ${phoneNumber}`);
        } else if (this.name === 'PrintDialingMessage') {
            console.log(`Now Dialing ${phoneNumber}`);
        }
    }
}

// Create an instance of Telephone
const telephone = new Telephone();

// Create instances of Observer
const printPhoneNumberObserver = new Observer('PrintPhoneNumber');
const printDialingMessageObserver = new Observer('PrintDialingMessage');

// Add observers to the telephone
telephone.addObserver(printPhoneNumberObserver.notify.bind(printPhoneNumberObserver));
telephone.addObserver(printDialingMessageObserver.notify.bind(printDialingMessageObserver));

// Use the addPhoneNumber method to add contacts
telephone.addPhoneNumber('Amaka Divine', '08012345678');
telephone.addPhoneNumber('Chisom Blessing', '08087654321');

// Dial a contact
telephone.dialPhoneNumber('08012345678');

// Save the contacts to a file
import fs from 'fs';
import inquirer from 'inquirer';

// Create JSON file for phonebook
    fs.writeFileSync('phonebook.json', JSON.stringify(telephone.getContacts()));
   
