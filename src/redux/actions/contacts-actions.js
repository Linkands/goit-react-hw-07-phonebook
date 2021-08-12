import { createAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}))
export const deleteContact = createAction('contacts/delete')
export const changeFilter = createAction('contacts/changeFilter')

// pending
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
)
// fulfilled
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
)
// rejected
export const fetchContactsError = createAction('contacts/fetchContactsError')

const contactsActions = {
  addContact,
  deleteContact,
  changeFilter,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
}

export default contactsActions
