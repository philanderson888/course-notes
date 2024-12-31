import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Contact } from '../types';
import { ContactForm } from '../components/ContactForm';
import { getContacts, saveContact, updateContact, deleteContact, getRandomContact } from '../utils/storage';
import { Phone, Edit, Trash2, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

export const Contacts: React.FC = () => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setContacts(getContacts(user.id));
    }
  }, [user]);

  const handleAddContact = (contactData: Omit<Contact, 'id'>) => {
    if (!user) return;
    
    const newContact: Contact = {
      ...contactData,
      id: crypto.randomUUID(),
      userId: user.id,
    };
    
    saveContact(newContact);
    setContacts(getContacts(user.id));
    setIsFormOpen(false);
    toast.success('Contact added successfully!');
  };

  const handleUpdateContact = (contactData: Omit<Contact, 'id'>) => {
    if (!editingContact || !user) return;
    
    const updatedContact: Contact = {
      ...contactData,
      id: editingContact.id,
      userId: user.id,
    };
    
    updateContact(updatedContact);
    setContacts(getContacts(user.id));
    setEditingContact(null);
    toast.success('Contact updated successfully!');
  };

  const handleDeleteContact = (contactId: string) => {
    if (!user) return;
    
    deleteContact(contactId, user.id);
    setContacts(getContacts(user.id));
    toast.success('Contact deleted successfully!');
  };

  const handleCallRandom = () => {
    if (!user) return;
    
    const randomContact = getRandomContact(user.id);
    if (randomContact) {
      toast.success(`Calling ${randomContact.firstName} at ${randomContact.phoneNumber}`);
    } else {
      toast.error('No contacts available to call!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Contacts</h2>
                  <div className="flex gap-4 ml-auto">
                    <button
                      onClick={handleCallRandom}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Random
                    </button>
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Add Contact
                    </button>
                  </div>
                </div>

                {isFormOpen && !editingContact && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Add New Contact</h3>
                    <ContactForm
                      onSubmit={handleAddContact}
                      buttonText="Add Contact"
                    />
                  </div>
                )}

                {editingContact && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Edit Contact</h3>
                    <ContactForm
                      onSubmit={handleUpdateContact}
                      initialValues={editingContact}
                      buttonText="Update Contact"
                    />
                    <button
                      onClick={() => setEditingContact(null)}
                      className="mt-2 text-sm text-gray-600 hover:text-gray-900"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h3 className="text-lg font-medium">{contact.firstName}</h3>
                        <a 
                          href={`tel:${contact.phoneNumber}`}
                          className="text-gray-600 hover:text-indigo-600"
                        >
                          {contact.phoneNumber}
                        </a>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingContact(contact)}
                          className="p-2 text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteContact(contact.id)}
                          className="p-2 text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};