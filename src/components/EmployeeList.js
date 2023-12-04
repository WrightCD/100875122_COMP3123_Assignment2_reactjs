import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/EmployeeList.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8090/api/v1/emp/employees'
      );
      console.log('API Response:', response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employee list:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, firstName, lastName) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${firstName} ${lastName} permanently?`
    );
  
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8090/api/v1/emp/employees?eid=${id}`);
        fetchData();
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  return (
    <div id="emplist">
      <Navbar />
      <h1>Employee List</h1>
      <button onClick={() => navigate('/employees/add')}>Create</button>
      {employees.length > 0 ? (
        <div id="employee-list">
          {employees.map((employee) => (
            <div key={employee._id} className="employee-box">
              <p>Name: {employee.first_name} {employee.last_name}</p>
              <p>Email:<br/> {employee.email}</p>
              <p>Gender: {employee.gender}</p>
              <p>Salary: ${employee.salary}</p>
              <div className="actions">
                <button onClick={() => navigate(`/employees/${employee._id}`)}>Details</button>
                <button onClick={() => navigate(`/employees/${employee._id}/edit`)}>Edit</button>
                <button onClick={() => handleDelete(employee._id, employee.first_name, employee.last_name)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
};

export default EmployeeList;
