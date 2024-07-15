import * as fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from "../utils/createFakeContact.js";
import { getAllContacts } from "./getAllContacts.js";

const generateContacts = async (number) => {
  const newContacts = [];
  const existingContacts = await getAllContacts();

  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const allContacts = [...existingContacts, ...newContacts]

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, undefined, 2));
  } catch (error) {
    console.error("Error writing contacts to file:", error);
  }
};

generateContacts(5);
