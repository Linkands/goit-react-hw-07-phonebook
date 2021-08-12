import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  addContact,
  deleteContact,
  changeFilter,
} from '../actions/contacts-actions'
// import * as contactsActions from '../actions/contacts-actions'
import { fetchContacts } from '../operations/contacts-operations'

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (_, action) => action.payload,
  [deleteContact.fulfilled]: (_, action) => action.payload,
})

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.fulfilled]: () => null,
})

const filter = createReducer('', {
  [changeFilter]: (_, actions) => actions.payload,
})

export default combineReducers({
  items,
  isLoading,
  filter,
  error,
})
