import { useState } from "react"

function AdminUsers() {

    const [allUsers, setAllUsers] = useState()

    async function getAllUsers(){
        const res = await fetch("http://localhost:3000/admin/users")
        const getRes = await res.text()
        console.log(getRes);
        
    }

    return (
        <div>
            <button onClick={getAllUsers}>get all users</button><br /><br />
            <button>add user</button>
        </div>
    )
}

export default AdminUsers