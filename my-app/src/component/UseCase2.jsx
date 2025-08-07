import { useEffect, useState } from "react";

function UseCase2() {
    const [users,setUsers]=useState([]);
    const fatcData = async () => {
       try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await resp.json();
        setUsers(data);
       } catch (error) {
        console.log(error);
       }
    }
    useEffect(() =>{
        fatcData();
    },[])
    return ( 
        <div>
            <h3 className="text-center bg-primary text-white p-3">Fetch Data Example</h3>
            <table className="table table-bordered table-striped table-hover" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>userName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                </tr>
                            )
                        })
                    }
                  </tbody>              
            </table>
        </div>
     );
}

export default UseCase2;