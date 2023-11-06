export const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <>
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
        </>
    )
}