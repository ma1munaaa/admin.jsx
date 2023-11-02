import React, { useState } from 'react';
import Analytics from './components/Analytics';
import ChildrenHomeForm from './components/ChildrenHomeForm';
import ChildrenHomeList from './components/ChildrenHomeList';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const initialHomes = [
    { id: 1, name: 'Green Valley Home', location: 'Springfield', visits: 20, donations: 1500 },
    { id: 2, name: 'Sunny Meadows Orphanage', location: 'Shelbyville', visits: 50, donations: 2200 },
    { id: 3, name: 'Mountain Top Shelter', location: 'Ogdenville', visits: 15, donations: 800 },
  ];

  const initialUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  const [homes, setHomes] = useState(initialHomes);
  const [users, setUsers] = useState(initialUsers);

   const addHome = (name, location) => {
    setHomes([...homes, { id: Date.now(), name, location, visits: 0, donations: 0 }]);
   };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const deleteHome = (id) => {
    setHomes(homes.filter(home => home.id !== id));
  };

  const addUser = (name) => {
    setUsers([...users, { id: Date.now(), name }]);
  };

  return (
    <Router>
      <div className="font-roboto">
        <Routes>
          <Route path="/" element={<UserForm onAddUser={addUser} />} />
          <Route path="/users" element={<UserList users={users} onDeleteUser={deleteUser} />} />
          <Route path="/add-home" element={<ChildrenHomeForm onAdd={addHome} />} />
          <Route path="/homes" element={<ChildrenHomeList homes={homes} onDelete={deleteHome} />} />
          <Route path="/analytics" element={<Analytics homes={homes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;