import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await getAllContacts();
    
    if (allContacts.length === 0){
      return
    }
    allContacts.splice(-1, 1)
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));
  } catch (error) {
    console.error("Error in delete", error);
    throw error;
  }
};

removeLastContact();
