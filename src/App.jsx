import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import * as contactsOperations from './redux/operations/contacts-operations'
import * as contactsActions from './redux/actions/contacts-actions'

function App() {
  const contactsItems = useSelector((state) => state.contacts.items)
  const filterItems = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      case 'filter':
        dispatch(contactsActions.changeFilter(value))
        break

      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const randomId = uuidv4()
    if (
      contactsItems.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      return alert(`${name} already exists in your contacts`)
    }
    dispatch(contactsOperations.addContact({ id: randomId, name, number }))
    eraseInputs()
  }

  const eraseInputs = () => {
    setName('')
    setNumber('')
  }

  const removeContact = (id) => {
    dispatch(contactsOperations.deleteContact(id))
  }

  const visibleContacts = () => {
    const normalizedFilter = filterItems.toLowerCase()
    return contactsItems.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  return (
    <div>
      <Phonebook
        onSubmit={handleSubmit}
        onChange={handleChange}
        name={name}
        number={number}
      ></Phonebook>
      {contactsItems.length > 0 && (
        <>
          <Filter filter={filterItems} onChange={handleChange}></Filter>
          <Contacts
            contactsData={visibleContacts()}
            onDeleteContact={removeContact}
          ></Contacts>
        </>
      )}
    </div>
  )
}

export default App
