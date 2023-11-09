import React, { useEffect, useRef } from 'react';

export const AddContacts = ({
    handleFormSubmit,
    handleNameChange,
    handleNumberChange,
    name,
    number,
}) => {
    const nameInputRef = useRef(null);
    const numberInputRef = useRef(null);

    // Встановлення фокусу на елементі введення імені після кожного рендерингу
    useEffect(() => {
        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, []);

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Phonebook</h1>
            <div className="contacts">
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                    ref={nameInputRef}
                />
                <input
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                    placeholder="Number"
                    ref={numberInputRef}
                />
            </div>
            <button type="submit" className="btn-add">
                Add contact
            </button>
        </form>
    );
};

