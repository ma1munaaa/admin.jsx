import React from 'react';

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
