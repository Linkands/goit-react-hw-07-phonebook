// import * as contactsActions from '../actions/contacts-actions'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'http://localhost:3000'

async function getContacts() {
  const contacts = await axios.get(`/contacts`)
  return contacts.data
}

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest())

//   try {
//     const contacts = await getContacts()
//     dispatch(contactsActions.fetchContactsSuccess(contacts))
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error))
//   }
// }

// export const addContact = () => async () => {
//   try {
//     const response = await axios.post('/contacts')
//   } catch (error) {}
// }

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
    const response = await axios.post(`contacts`, newContact)
  },
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    const response = await axios.delete(`/contacts/${id}`)
  },
)
