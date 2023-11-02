import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'

const UserForm = ({ users, onAddUser, onDeleteUser }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(userName);
    setUserName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          placeholder="Enter User Name" 
        />
        <button type="submit">Add User</button>
      </form>
      
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => onDeleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;
