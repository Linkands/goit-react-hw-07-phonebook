import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'http://localhost:3000'

async function getContacts() {
  const contacts = await axios.get(`/contacts`)
  return contacts.data
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await getContacts()
    return contacts
  },
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact) => {
    await axios.post(`/contacts`, newContact)
    return await getContacts()
  },
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    await axios.delete(`/contacts/${id}`)
    return await getContacts()
  },
)
