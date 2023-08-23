import React, { useState } from "react";
import EditContactModal from "./EditContactModal";

interface contact {
  name: string | undefined;
  number: string | undefined;
}
interface contactProps {
  contacts: Array<contact>;
  setContacts: React.Dispatch<React.SetStateAction<Array<contact>>>;
}
export const ContactsTable = (props: contactProps) => {
  const { setContacts, contacts } = props;
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const handleDelete = (id: any) => {
    const new_array = contacts.map((contact, ind) => {
      console.log(id, ind);
      if (id == ind) {
        console.log("Deleted", id);
        return undefined;
      } else return contact;
    });
    const filtered_array = new_array.filter(
      (contact) => contact !== undefined
    ) as contact[];
    console.log(filtered_array);
    setContacts(filtered_array);
  };
  if (contacts && contacts.length)
    return (
      <>
        <div className="flex flex-col absolute top-12 right-96 px-4 py-2 ">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {contacts.map((contact, id) => (
                      <tr key={id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {id + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {contact.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {contact.number}
                        </td>
                        <td
                          onClick={() => {
                            setShowEditModal(true);
                            setId(id);
                          }}
                          className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-green-300 hover:text-green-700"
                        >
                          Edit
                        </td>
                        <td
                          onClick={() => handleDelete(id)}
                          className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-red-500 hover:text-red-700"
                        >
                          Delete
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {showEditModal && (
          <EditContactModal
            id={id}
            setOpenModal={setShowEditModal}
            contacts={contacts}
            setContacts={setContacts}
          />
        )}
      </>
    );
  else
    return (
      <div
        className="flex flex-col absolute top-24 right-96 items-center 500 text-sm font-semibold px-4 py-3"
        role="alert"
      >
        <img src={require("../images/error-404.png")} />
        <p>No Contacts to show , click on Create Contact to get started!</p>
      </div>
    );
};
