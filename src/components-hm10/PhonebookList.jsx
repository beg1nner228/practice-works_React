import { IoMdContact } from "react-icons/io";

export default function PhonebookList({ contacts, onDelete }) {
  
  if (contacts.length === 0) {
    return <p>No contacts in the phonebook.</p>;
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <ul className="phonebook-list">
        {contacts.map((contact) => (
          <li key={contact.id ?? contact.name} className="phonebook-list-item">
            <IoMdContact size={50} />
            <div><strong>{contact.name}</strong> {contact.phone}</div>
            <button className="delete-btn" onClick={() => onDelete(contact)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

