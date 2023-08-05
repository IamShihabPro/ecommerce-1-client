import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
const MyCart = () => {
    const [cart, refetch, isLoading] = useCart()
    console.log(cart);
    const total = cart.reduce((sum, item)=> item.price + sum, 0)

    const handleDelete = (item) =>{
        console.log(item);
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
              fetch(`${import.meta.env.VITE_API_URL}/carts/${item._id}`,{
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
        <div className='w-full p-2 sm:p-4 md:p-8 lg:p-10 xl:p-12'>
            <div className='font-semibold flex justify-between drop-shadow-sm'>
                
                <h3>Total Items: {cart.length}</h3>
                <h3>Total Price: ${total}</h3>
                <button className='btn bg-blue-600 text-white hover:bg-green-600 btn-sm'>Payment</button>
            </div>
            <hr className='w-full h-1 my-2 bg-gray-700' />

            <div className="overflow-x-auto">
                <table className="table bg-slate-100 rounded-none">
                    {/* head */}
                    <thead className='bg-blue-600 text-white'>
                    <tr>
                        <th> # </th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((data, i)=> (
                                <tr key={data._id}>
                                <td>
                                <label>
                                    {i+1}
                                </label>
                                </td>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask rounded w-12 h-12 ">
                                        <img src={data.image} alt={data.name}  />
                                    </div>
                                    </div>
                                    {/* <div>
                                    <div className="font-bold">{data.name}</div>
                                    </div> */}
                                </div>
                                </td>
                                <td>
                                <div className="font-bold">{data.name}</div>
                                </td>
                                <td> {data.category} </td>
                                <td>$ {data.price}</td>
                                <td>
                                <button onClick={()=> handleDelete(data)} className="btn btn-ghost rounded-sm btn-sm bg-red-600 text-white hover:bg-red-600"> <FaTrashAlt></FaTrashAlt> </button>
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

export default MyCart;