import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import StudentList from './components/studentList/StudentList';
import TeacherList from './components/TeacherList/TeacherList';
import AddStudent from './components/student/AddStudent';
import AddTeacher from './components/Teacher/AddTeacher';
import Home from './pages/Home/Home';
import './App.css'
import SignUp from './components/SignUp/SignUp';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path="/students" element={<StudentList />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
