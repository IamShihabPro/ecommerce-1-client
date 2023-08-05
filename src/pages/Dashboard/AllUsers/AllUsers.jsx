import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserSecret } from 'react-icons/fa';

const AllUsers = () => {
    const {data: users = [], refetch, isLoading} = useQuery(['users'], async()=>{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        return res.json()
    })
    return (
        <div>
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
                            users.map((data, i)=> (
                                <tr key={data._id}>
                                <td>
                                <label>
                                    {i+1}
                                </label>
                                </td>
                             
                                <td>
                                <div className="font-bold">{data.name}</div>
                                </td>
                                <td> {data.email} </td>
                                
                                <td>
                                    <button  className="btn btn-ghost rounded-sm btn-sm bg-green-600 text-white hover:bg-green-600"> <FaUserSecret></FaUserSecret> </button>
                                </td>
                                <td>
                                    <button  className="btn btn-ghost rounded-sm btn-sm bg-red-600 text-white hover:bg-red-600"> <FaTrashAlt></FaTrashAlt> </button>
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