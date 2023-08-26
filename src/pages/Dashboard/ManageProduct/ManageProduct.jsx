import React from 'react';
import { FaTrash, FaRegEdit } from 'react-icons/fa';

import useProduct from '../../../hooks/useProduct';
import Swal from 'sweetalert2';

const ManageProduct = () => {
    const [products, refetch, isLoading] = useProduct()
    // console.log(products);

    const handleDelete = (product) =>{
        console.log(product);
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
              fetch(`${import.meta.env.VITE_API_URL}/products/${product._id}`,{
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
        <div>
            <h2 className='text-2xl font-medium text-center mb-4'>Manage All Product: {products.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-blue-600 text-white'>
                    <tr>
                        <th> #</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price </th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody className='bg-slate-200'>

                    {/* row 1 */}
                    {
                        products.map((product, i) => (
                            <tr key={product._id} className='shadow-sm'>
                            <th> {i + 1} </th>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask rounded-sm w-12 h-12">
                                    <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                      
                            </div>
                            </td>
                            <td className='font-medium'>
                            {product.category}
                            </td>
                            <td className='font-medium'>$ {product.price}</td>
                            <th>
                            <button className="btn btn-sm rounded-sm bg-green-600 text-white hover:bg-green-500"> <FaRegEdit></FaRegEdit> </button>
                            </th>
                            <th>
                            <button onClick={()=> handleDelete(product)} className="btn btn-sm rounded-sm bg-red-600 text-white hover:bg-red-500"> <FaTrash></FaTrash> </button>
                            </th>
                        </tr>
                        ))
                    }
             
                    </tbody>
                    
                </table>
            </div>
            
        </div>
    );
};

export default ManageProduct;