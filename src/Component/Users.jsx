import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const initalUsers = useLoaderData();
    const [users] =useState(initalUsers);
    console.log(initalUsers)
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
    
        users.map((user,index) => <tbody key={user._id}>
     
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
          <button className="btn btn-ghost btn-xs">D</button>
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