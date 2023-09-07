import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ShowContact = () => {
    const [contacts, setContacts] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/contacts`)
        .then(res => res.json())
        .then(data => {
            setContacts(data)
        })
    },[contacts])

    // console.log(contacts);
    return (
        <div className=' w-full p-2 sm:p-4 md:p-8 lg:p-10 xl:p-12'>
        <h3 className='text-2xl font-semibold'>Messages </h3>

        <hr className='w-full h-1 my-2 bg-gray-700' />

        <div className="overflow-x-auto">
            <table className="table bg-slate-100 rounded-none">
                {/* head */}
                <thead className='bg-blue-600 text-white'>
                <tr>
                    <th> # </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>

                    {
                        contacts.slice(0,20).map((contact, i)=> (
                            <tr key={contact._id}>
                            <td>
                            <label>
                                {i+1}
                            </label>
                            </td>
                         
                            <td>
                            <div className="font-bold">{contact.name}</div>
                            </td>
                            <td> {contact.email} </td>
                            <td>
                            <div className="font-bold">{contact.message}</div>
                            </td>
                          
                        </tr>

                        ))
                    }            
                </tbody>
                
            </table>
        </div>
        
    </div>
    );
};

export default ShowContact;