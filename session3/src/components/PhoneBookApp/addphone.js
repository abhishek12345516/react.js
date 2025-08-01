import { useState } from "react";

function AddPhone({addContact}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const handler = () => {
        addContact({name,phone,id: Date.now()});
        setName('');
        setPhone('');
    }
    return ( 
        <div>
            <h3 className="text-bg-info p-2 text-center">Update Contact</h3>
            <div className="form-group mt-2">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your Name" 
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
             <div className="form-group mt-2">
                <label>Phone</label>
                <input type="Phone" className="form-control" placeholder="Enter your Phone"
                value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button className="btn btn-secondary w-100 mt-2"
            onClick={handler}>Add Contact</button>
        </div>
      
     );
}

export default AddPhone;