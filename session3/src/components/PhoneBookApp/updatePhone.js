import { useState } from "react";

function UpdatePhone({selected,setSelected,updateContact}) {
      const [name, setName] = useState(selected.name);
        const [phone, setPhone] = useState(selected.phone);
        const handler = () => {
            updateContact({id:selected.id,name,phone});
            alert('Contact Updated Successfully');
            setSelected(null);
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
                value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <button className="btn btn-secondary w-50 mt-2" onClick={handler}>Update Contact</button>
            <button className="btn btn-secondary w-50 mt-2"
            onClick={()=>setSelected(null)}>Cancel</button>
        </div>
     );
}

export default UpdatePhone;