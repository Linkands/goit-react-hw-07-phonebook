import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  addContact,
  removeContact,
  changeFilter,
} from '../actions/contacts-actions'

const items = createReducer([], {
  [addContact]: (state, actions) => {
    const checkName = state
      .map((contact) => contact.name)
      .includes(actions.payload.name)
    const checkNumber = state
      .map((contact) => contact.number)
      .includes(actions.payload.number)

    if (checkName) {
      alert(`${actions.payload.name} is already in contacts`)
    } else if (checkNumber) {
      alert(`Number ${actions.payload.number} is already in contacts`)
    } else [...state, actions.payload]
  },
  [removeContact]: (state, actions) => [
    state.filter(({ id }) => id !== actions.payload),
  ],
})

const filter = createReducer('', {
  [changeFilter]: (_, actions) => actions.payload,
})

export default combineReducers({
  items,
  filter,
})
