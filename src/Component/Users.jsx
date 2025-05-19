import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initalUsers = useLoaderData();
    const [users,setUsers] = useState(initalUsers);
    // console.log(initalUsers)

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                 fetch(`http://localhost:3000/users/${_id}`,{
                    method:"DELETE"
                 })
                 .then(res => res.json())
                 .then(data => {
                    // console.log('data after delte',data)
                    if(data.deletedCount){
                        const remaingUser = users.filter(user => user._id !== _id)

                       
                        setUsers(remaingUser)

                         Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                    }
                   
                 })

                
            }
        });
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    {

                        users.map((user, index) => <tbody key={user._id}>

                            <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img className='w-20 h-20'
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.phone}
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">V</button>
                                    <button className="btn btn-ghost btn-xs">E</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">D</button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Users;