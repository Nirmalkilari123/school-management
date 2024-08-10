import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [name, setName] = useState('');

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', { name });
      setName('');
      alert('Student added successfully');
    } catch (error) {
      console.error('Error adding student', error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleAddStudent}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
