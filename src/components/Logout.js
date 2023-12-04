import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');


    const timeoutId = setTimeout(() => {
      navigate('/login');
    }, 3000);


    return () => clearTimeout(timeoutId);
  }, [navigate]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className='logout-container'>
      <h2>Logout</h2>
      <p>You have been successfully logged out.</p>
      <button onClick={handleLoginClick}>Go to Login</button>
    </div>
  );
};

export default Logout;
