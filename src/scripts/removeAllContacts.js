import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeAllContacts = async () => {
try {
  const allContacts = await getAllContacts();

  allContacts.splice(0, allContacts.length)
  await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));
} catch (error) {
  console.error("Error in delete", error);
  throw error;
}
};

removeAllContacts();
