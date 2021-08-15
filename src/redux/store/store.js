import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../reducers/contacts-reducers'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
