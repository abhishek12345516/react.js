import { useState } from "react";
import AddPhone from "./addphone";
import UpdatePhone from "./updatePhone";
function PhoneList() {
  const [contacts, setContacts] = useState([]);
  const [selected,setSelected] = useState(null)
  const addContact = (data) => {
    setContacts([...contacts, data]);
  };
  const updateContact = (data) => {
      const index = contacts.findIndex((item) => item.id == data.id);
      contacts[index] = data;
      setContacts([...contacts]);
  }
  return (
    <div>
      <h1 className="text-bg-warning p-2 text-center">PhoneBook</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Opration</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <tr>
                <td>
                    <button className="btn btn-success float-end ms-2"
                    onClick={() => setSelected(item)}>Update</button>
                  <button className="btn btn-danger float-end">X</button>
                </td>
                
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col">
          <AddPhone addContact={addContact}/>
        </div>
        <div className="col">
          {selected && <UpdatePhone selected={selected} setSelected={setSelected} updateContact={updateContact}/>}
        </div>
      </div>
    </div>
  );
}

export default PhoneList;
