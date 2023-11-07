export const AddContacts = ({
    handleFormSubmit,
    handleNameChange,
    handleNumberChange,
    name,
    number }) => {

    return (
        <form onSubmit={handleFormSubmit} >
            <h1>Phonebook</h1>
            <div className="contacts">

                <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />

                <input type="text" value={number} onChange={handleNumberChange} placeholder="Number" />
            </div>
            <button type="submit" className="btn-add">Add contact</button>
        </form>
    );
}
