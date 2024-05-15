'use client'
import React, { useState } from 'react';
{/** send form data to external api*/}
const jsonData = {
  "name": "Apple MacBook Pro 16",
  "data": {
     "year": 2019,
     "price": 1849.99,
     "CPU model": "Intel Core i9",
     "Hard disk size": "1 TB"
  }
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://api.restful-api.dev/objects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
      //body: JSON.stringify(formData),
    });
    console.log(response.status);
    if (!response.ok) {
      console.error('Error submitting data');
      return;
    }

    const data = await response.json();
    // Display results using data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" onChange={handleChange} />
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
