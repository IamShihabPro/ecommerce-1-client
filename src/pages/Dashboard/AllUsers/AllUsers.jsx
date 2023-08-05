import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserSecret, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {data: users = [], refetch, isLoading} = useQuery(['users'], async()=>{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        return res.json()
    })

    const handleDelete = (user) =>{
        console.log(user);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`,{
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
              })
            }
          })
    }


    return (
        <div className='w-8/12 p-2 sm:p-4 md:p-8 lg:p-10 xl:p-12'>
            <h3 className='text-2xl font-semibold'>Total Users: { users.length} </h3>

            <hr className='w-full h-1 my-2 bg-gray-700' />

            <div className="overflow-x-auto">
                <table className="table bg-slate-100 rounded-none">
                    {/* head */}
                    <thead className='bg-blue-600 text-white'>
                    <tr>
                        <th> # </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i)=> (
                                <tr key={user._id}>
                                <td>
                                <label>
                                    {i+1}
                                </label>
                                </td>
                             
                                <td>
                                <div className="font-bold">{user.name}</div>
                                </td>
                                <td> {user.email} </td>
                                
                                <td>
                                    {
                                        user.role === 'admin' ?  <button  className="btn btn-ghost rounded-sm btn-sm bg-green-600 text-white hover:bg-green-600"> <FaUserSecret></FaUserSecret> </button> :
                                        <button  className="btn btn-ghost rounded-sm btn-sm bg-blue-600 text-white hover:bg-blue-600"> <FaUsers></FaUsers> </button>
                                    }
                                   
                                </td>
                                <td>
                                    <button onClick={()=> handleDelete(user)} className="btn btn-ghost rounded-sm btn-sm bg-red-600 text-white hover:bg-red-600"> <FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>

                            ))
                        }


                    {/* row 1 */}
                
                    </tbody>
                    
                </table>
            </div>
            
        </div>
    );
};

export default AllUsers;