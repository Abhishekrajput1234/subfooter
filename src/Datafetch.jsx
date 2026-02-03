import { useEffect, useState } from "react"

export default function Datafetch(){
    const[data,setData]=useState([])

    const fetchdata=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
       .then((data)=>setData(data))
       //.then((data)=>{console.log(data)})
        .catch((err)=>{
            console.log("error",err)
        })
    }

    useEffect(()=>{

        fetchdata();

    },[])


    return(<>

    <table className="border">
        <thead>
        <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        </tr>
        </thead>
        <tbody>
            {
                data.map((user)=>{
                    return(
        <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        </tr>
        )
                })
}
        </tbody>
    </table>
 
    </>)
}