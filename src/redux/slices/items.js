// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   items: [],
// }

// export const contactsSlice = createSlice({
//   name: 'items',
//   initialState: initialState.items,
//   reducers: {
//     addContact: (state, { payload }) => {
//       const checkContact = state.find((contact) =>
//         contact.name.includes(payload.name),
//       )
//       if (checkContact) {
//         alert(`${payload.name} is already in contacts`)
//         return
//       }
//       return [...state, payload]
//     },
//     deleteContact: (state, { payload }) =>
//       state.filter(({ id }) => id !== payload),
//   },
// })

// export const { addContact, deleteContact } = contactsSlice.actions
// export const contactsReducer = contactsSlice.reducer
