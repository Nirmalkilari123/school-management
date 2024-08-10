
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TeacherList.css'
const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teachers');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className='teach'>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
