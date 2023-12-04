import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './css/EmployeeForm.css';
import Navbar from './Navbar';

const EmployeeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      gender: 'Male',
      salary: '',
    });
  
    useEffect(() => {
      if (id) {
        const fetchEmployee = async () => {
          try {
            const response = await axios.get(`http://localhost:8090/api/v1/emp/employees/${id}`);
            setFormData(response.data);
          } catch (error) {
            console.error("Error fetching employee details:", error);
          }
        };
  
        fetchEmployee();
      }
    }, [id]);
  
    useEffect(() => {
      if (id) {
        setTitle("Edit an Employee");
      } else {
        setTitle("Create an Employee");
      }
    }, [formData, id]);
  
    const [title, setTitle] = useState("Create an Employee");
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if (id) {
          // For editing an employee
          await axios.put(`http://localhost:8090/api/v1/emp/employees/${id}`, formData);
        } else {
          // For Creation
          await axios.post(`http://localhost:8090/api/v1/emp/employees`, formData);
        }
        navigate('/employees');
      } catch (error) {
        console.error("Error submitting employee form:", error);
      }
    };

  return (
    <div className='employee-form-container'>
      <Navbar />
        <h1>{title}</h1>
        <form onSubmit={handleSubmit} className="employee-form">
        <label>
            First Name:
            <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        </label>
        <label>
            Last Name:
            <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
        </label>
        <label>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
        </label>
        <label>
            Salary:
            <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        </form>
        <button onClick={() => navigate('/employees')}>Back</button>
    </div>
  );
};

export default EmployeeForm;
