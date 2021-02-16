import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";

const reducer = {
  contacts: contactsReducer,
};
const store = configureStore({
  reducer,
});

export default store;
