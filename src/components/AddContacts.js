export const AddContacts = ({
    handleFormSubmit,
    handleNameChange,
    handleNumberChange,
    name,
    number }) => {

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Phonebook</h1>
            <div>
                <h2>Name</h2>
                <input type="text" value={name} onChange={handleNameChange} />
                <h2>Number</h2>
                <input type="text" value={number} onChange={handleNumberChange} />
            </div>
            <button type="submit">Add contact</button>
        </form>
    );
}
