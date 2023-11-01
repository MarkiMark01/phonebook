import React, { useState, useEffect, useRef } from 'react';
import './App.css';

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
      <h1>Phonebook</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h2>Name</h2>
          <input type="text" value={name} onChange={handleNameChange} />
          {/* <input type="text" value={name} onChange={handleNameChange} ref={searchRef} /> */}
          <h2>Number</h2>
          <input type="text" value={number} onChange={handleNumberChange} />
        </div>
        <button type="submit">Add contact</button>
      </form>
      <div>
        <h2>Filter</h2>
        <input type="text" value={filter} onChange={handleFilterChange} />
      </div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map((contact, id) => (
          <li key={id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
