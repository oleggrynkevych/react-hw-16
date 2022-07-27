import React, {useState, useEffect} from 'react';
import './Search.css';
import Contact from '../Contact/Contact.jsx';
import {contacts} from '../Contacts.js';

export function Search(){
    const [contactList, setContactList] = useState(contacts);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
		setContactList(filteredContacts());
	}, [searchText])

    const filteredContacts = () => {
        return contactList.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.phone}`.toLowerCase().includes(searchText));
    }

    return(
        <div className="wrapper">
        <input
            type='text'
            placeholder='Search...'
            className='search-input'
            onChange={(event) => setSearchText(event.target.value.toLowerCase())}
            value={searchText}
        />

        {contactList.map((contact, index) => { return <Contact contact={contact} key={index} /> })}

        </div>
    );
}