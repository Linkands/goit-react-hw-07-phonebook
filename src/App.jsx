import React, { useState, useRef, useEffect } from 'react'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, deleteContact } from './redux/slices/items'
import { changeFilter } from './redux/slices/filter'

function App() {
  const contactsItems = useSelector((state) => state.items)
  const filterItems = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const mounted = useRef(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    localStorage.setItem('contacts', JSON.stringify(contactsItems))
  }, [contactsItems])

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
        dispatch(changeFilter(value))
        break

      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const randomId = uuidv4()
    dispatch(addContact({ id: randomId, name, number }))
    localStorage.setItem('contacts', JSON.stringify(contactsItems))
    eraseInputs()
  }

  const eraseInputs = () => {
    setName('')
    setNumber('')
  }

  const removeContact = (id) => {
    dispatch(deleteContact(id))
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
      <Filter filter={filterItems} onChange={handleChange}></Filter>
      <Contacts
        contactsData={visibleContacts()}
        onDeleteContact={removeContact}
      ></Contacts>
    </div>
  )
}

export default App
