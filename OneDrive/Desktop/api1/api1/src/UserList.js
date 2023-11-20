// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Create this file for styling if it doesn't exist

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <div className="user-cards">
        {listOfUsers.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <div className="address">
              <p>Street: {user.address.street}</p>
              <p>City: {user.address.city}</p>
              <p>Zipcode: {user.address.zipcode}</p>
            </div>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

