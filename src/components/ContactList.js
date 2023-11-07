export const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul className="contacts-list">
                {filteredContacts.map((contact, id) => (
                    <li key={id} className="list">
                        {contact.name}: {contact.number}
                        <button type="button" onClick={() => deleteContact(id)} className="btn-delete">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}