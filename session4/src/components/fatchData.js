import { useState } from "react";

function FetchData() {  // Also fixed the component name spelling from FatchData to FetchData
    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users'); // ✅ fixed 'fatch' to 'fetch'
            const json = await resp.json();
            setUsers(json);
        } catch (error) {
            console.log(error);
        }
    };

    return ( 
        <div>
           
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
             <button className="btn btn-primary" onClick={getData}>Get Data</button>
        </div>
    );
}

export default FetchData;
