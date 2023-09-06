import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ContactForm = () => {
    const {theme} = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
   <div className='pt-10'>
         <h3 className={`text-2xl mb-3 text-center font-medium mt-4 px-2 ${theme === 'dark' ? 'text-white' : 'text-black'} `}>Contact</h3>
         <form className="max-w-md mx-auto p-6 bg-gray-900 drop-shadow-xl">
      <div className="mb-4">
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
      </div>
      <div className="mb-4">
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
      </div>
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

export default ContactForm;