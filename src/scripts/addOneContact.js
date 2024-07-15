import * as fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from "./getAllContacts.js";

export const addOneContact = async () => {
  const existingContacts = await getAllContacts();
  const newContact = [createFakeContact()];  

  const allContacts = [...existingContacts, ...newContact]

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, undefined, 2));
  } catch (error) {
    console.error("Error writing contacts to file:", error);
  }
};

addOneContact();
