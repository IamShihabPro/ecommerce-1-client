import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';



const Review = () => {
    const {theme} = useAuth()
    const [review, setReview] = useState(null)
    const [hover, setHover] = useState(null)
    const {user} = useAuth()

  const [formData, setFormData] = useState({
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     // name: '',
  //     // email: '',
  //     review,
  //     message: '',
  //   });
  // };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const reviews = {review, message, email: user?.email, name: user?.displayName, photo: user?.photoURL }
    console.log(reviews);


    fetch(`${import.meta.env.VITE_API_URL}/reviews`,{
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(reviews)
      
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Thank You For Your Review',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }) 
    
  }



  return (
   <div className='pt-10'>
        <h3 className={`text-2xl mb-3 text-center font-semibold mt-4 px-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} `}>Review</h3>
         <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-900 drop-shadow-xl">

          <div className='flex text-center items-center ml-16'>
            {
              [...Array(5)].map((star, i) => {
                const currentReview = i + 1 
                return(
                  <label key={i} className='flex'>
                    <input type="radio" name='review' className='hidden' value={currentReview} onClick={()=> setReview(currentReview) } />
                    <FaStar className='mx-1 cursor-pointer ' size={30}
                    color={currentReview <= (hover || review) ? '#ffc107' : '#e4e5e9'}
                    onMouseEnter={()=> setHover(currentReview)}
                    onMouseLeave={()=> setHover(null)}
                    ></FaStar>
                  </label>
                  ) 
              })
            }
            {/* <p>{review}</p> */}
          
          </div>

      {/* <div className="mb-4 mt-8">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white  leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div> */}
      {/* <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white  leading-tight focus:outline-none focus:shadow-outline "
          id="email"
          type="email"
          placeholder="Your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div> */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline resize-none"
          id="message"
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
   </div>
  );
};

export default Review;