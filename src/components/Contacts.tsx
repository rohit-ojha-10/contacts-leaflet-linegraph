import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CreateContactModal from "./CreateContactModal";
import { ContactsTable } from "./ContactsTable";
interface contact {
  name: string | undefined;
  number: string | undefined;
}
export default function Contacts() {
  console.log("in contacts");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contacts, setContacts] = useState<Array<contact>>([]);
  console.log(contacts);
  return (
    <div className="inline">
      <Sidebar />
      <button
        className="absolute top-2 px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Create Contact
      </button>
      <ContactsTable contacts={contacts} setContacts={setContacts} />
      {showModal && (
        <CreateContactModal
          setOpenModal={setShowModal}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}
    </div>
  );
}
