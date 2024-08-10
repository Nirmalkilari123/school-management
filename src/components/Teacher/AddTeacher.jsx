import React, { useState } from 'react';
import axios from 'axios';

const AddTeacher = () => {
  const [name, setName] = useState('');

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/teachers', { name });
      setName('');
      alert('Teacher added successfully');
    } catch (error) {
      console.error('Error adding teacher', error);
    }
  };

  return (
    <div className='teach'>
      <h2> Add Teacher</h2>
      <form onSubmit={handleAddTeacher}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default AddTeacher;
