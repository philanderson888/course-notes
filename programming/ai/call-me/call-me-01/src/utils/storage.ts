import { Contact } from '../types';

const CONTACTS_KEY = 'contacts';

export const getContacts = (userId: string): Contact[] => {
  const contacts = localStorage.getItem(CONTACTS_KEY);
  if (!contacts) return [];
  
  const allContacts: Contact[] = JSON.parse(contacts);
  return allContacts.filter(contact => contact.userId === userId);
};

export const saveContact = (contact: Contact): void => {
  const contacts = getContacts(contact.userId);
  contacts.push(contact);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
};

export const updateContact = (contact: Contact): void => {
  const contacts = getContacts(contact.userId);
  const index = contacts.findIndex(c => c.id === contact.id);
  if (index !== -1) {
    contacts[index] = contact;
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }
};

export const deleteContact = (contactId: string, userId: string): void => {
  const contacts = getContacts(userId);
  const filteredContacts = contacts.filter(c => c.id !== contactId);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(filteredContacts));
};

export const getRandomContact = (userId: string): Contact | null => {
  const contacts = getContacts(userId);
  if (contacts.length === 0) return null;

  const now = new Date();
  const eligibleContacts = contacts.filter(contact => {
    if (!contact.lastContactDate) return true;
    
    const lastContact = new Date(contact.lastContactDate);
    const daysSinceLastContact = Math.floor((now.getTime() - lastContact.getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceLastContact >= contact.contactFrequencyDays;
  });

  if (eligibleContacts.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * eligibleContacts.length);
  return eligibleContacts[randomIndex];
};