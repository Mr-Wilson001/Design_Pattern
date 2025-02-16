# Design_Pattern

## Telephone Package

This project demonstrates a simple telephone package with observer pattern implementation.

### Classes

#### Telephone

- `addPhoneNumber(name, phoneNumber)`: Adds a contact with the given name and phone number.
- `removePhoneNumber(phoneNumber)`: Removes the contact with the given phone number.
- `dialPhoneNumber(phoneNumber)`: Dials the contact with the given phone number and notifies observers.
- `getContacts()`: Returns all contacts.
- `addObserver(observer)`: Adds an observer.
- `removeObserver(observer)`: Removes an observer.
- `notifyObservers(phoneNumber)`: Notifies all observers with the given phone number.

#### Observer

- `notify(phoneNumber)`: Method to be called by the `Telephone` class to notify the observer.

### Usage

1. Create an instance of `Telephone`.
2. Create instances of `Observer`.
3. Add observers to the `Telephone`.
4. Use the `addPhoneNumber` method to add contacts.
5. Use the `dialPhoneNumber` method to dial a contact.
6. Save the contacts to a file.