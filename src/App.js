import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { AddContacts } from './components/AddContacts';
import { Filter } from './components/Filter';
import { ContactList } from './components/ContactList';
import './components/styles.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  // const searchRef = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addContacts();
  };

  const addContacts = () => {
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with name ${name} already exists!`);
      return;
    }

    const newContact = { name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setNumber('');


    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
  };

  function getFilteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filteredContacts = getFilteredContacts();

  const deleteContact = (index) => {
    setContacts(prevContacts =>
      prevContacts.filter((_, i) => i !== index)
    );
    const updatedContacts = contacts.filter((_, i) => i !== index);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  }

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // useEffect(() => {
  //   searchRef.current.focus();
  // }, [])

  return (
    <div className="App">
      <div className='main-container'>
        <AddContacts
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          handleFormSubmit={handleFormSubmit}
          name={name}
          number={number}
        />
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <ContactList filteredContacts={filteredContacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default App;
