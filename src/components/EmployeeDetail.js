import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/EmployeeDetails.css"

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/api/v1/emp/employees/${employeeId}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee details:', error);
        setLoading(false);
      }
    };

    const employeeId = window.location.pathname.split('/').pop();
    

    fetchEmployeeDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Employee Details</h1>
      {loading ? (
        <p>Loading employee details...</p>
      ) : (
        <div>
          {employee ? (
            <div>
              <p>Name: {employee.first_name} {employee.last_name}</p>
              <p>Email: {employee.email}</p>
              <p>Gender: {employee.gender}</p>
              <p>Salary: ${employee.salary}</p>
            </div>
          ) : (
            <p>No employee details found</p>
          )}
        </div>
      )}
      <button onClick={() => navigate('/employees')}>Back</button>
    </div>
  );
};

export default EmployeeDetail;
