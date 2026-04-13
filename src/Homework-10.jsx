import { useState } from 'react'
import PhonebookForm, { formStyle } from './components-hm10/PhonebookForm'
import PhonebookList from './components-hm10/PhonebookList'



function Homework_10() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const handleAddContact = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...contact, id: Date.now().toString() },
    ])
  }

  const handleDeleteContact = (contact) => {
    setContacts((prevContacts) => prevContacts.filter((c) => c.id !== contact.id))
  }

  return (
    <div>
      <h2 className='phonebook_title'>Phonebook</h2>
      <PhonebookForm onAddContact={handleAddContact} />
      <form onSubmit={(e) => e.preventDefault()} style={formStyle}>
        <label htmlFor="filter" className="AddNewContactLabel">Filter Contacts:</label>
        <input
          className="addNewContactInput"
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <PhonebookList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  )
}

export default Homework_10