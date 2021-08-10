import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'
import { contactsReducer } from '../slices/items'
import { filterReducer } from '../slices/filter'
// import items from '../slices/items'

// const rootReducer = {
//   items,
// }
const contacts = localStorage.getItem('contacts')
const parsedContacts = JSON.parse(contacts)

function initializeStorage() {
  if (!parsedContacts) {
    return []
  } else {
    return parsedContacts
  }
}

export const store = configureStore({
  reducer: {
    items: contactsReducer,
    filter: filterReducer,
  },
  preloadedState: {
    items: initializeStorage(),
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// console.log(localStorage.getItem('contact'))
