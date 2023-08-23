import React, { useState } from "react";
import Contacts from "./Contacts";
interface contact {
  name: string | undefined;
  number: string | undefined;
}
interface modalProps {
  id: number;
  setOpenModal: (isOpen: boolean) => void;
  contacts: Array<contact>;
  setContacts: React.Dispatch<React.SetStateAction<Array<contact>>>; // Add the setContacts prop
}
export default function Modal(props: modalProps) {
  const { setOpenModal, setContacts, contacts, id } = props;
  let curr_name: string | undefined = contacts.find(
    (contact, ind) => ind === id
  )?.name;
  let curr_number: string | undefined = contacts.find(
    (contact, ind) => ind === id
  )?.number;
  const [name, setName] = useState<string | undefined>(curr_name);
  const [number, setNumber] = useState<string | undefined>(curr_number);
  const handleEditContact = () => {
    const new_array = contacts.map((contact, ind) => {
      if (id === ind) {
        contact.name = name;
        contact.number = number;
      }
      return contact;
    });
    setContacts(new_array);
    setOpenModal(false);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-5xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Contact</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setOpenModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Number"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleEditContact}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
