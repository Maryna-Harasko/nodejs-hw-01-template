import * as fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    let existingContacts = [];
  
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      existingContacts = JSON.parse(data);
    } catch (error) {
      console.error("Error reading contacts:", error);
    }
  
    return existingContacts;
};

console.log(await getAllContacts());
