import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'
import { Link, useNavigate } from "react-router-dom";


const ChildrenHomeForm = ({ homes, onAdd, onDelete, onUpdate }) => {
  const [homeName, setHomeName] = useState('');
  const [homeLocation, setHomeLocation] = useState('');
  const [homeId, setHomeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHomes, setFilteredHomes] = useState(homes);

  useEffect(() => {
    setFilteredHomes(
      homes.filter(home => 
        home.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        home.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [homes, searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(homeId === null) {
      onAdd(homeName, homeLocation);
    } else {
      onUpdate(homeId, homeName, homeLocation);
    }
    setHomeName('');
    setHomeLocation('');
    setHomeId(null);
  };


  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input 
          type="text"
          value={homeName} 
          onChange={(e) => setHomeName(e.target.value)} 
          placeholder="Enter Children's Home Name"
          className="p-2 border rounded"
        />
        <input 
          type="text"
          value={homeLocation} 
          onChange={(e) => setHomeLocation(e.target.value)} 
          placeholder="Enter Children's Home Location"
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {homeId === null ? 'Add Home' : 'Update Home'}
        </button>
      </form>
      
      <input 
        type="text"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by Name or Location"
        className="p-2 border rounded mb-4 w-full"
      />

      <ul>
        {filteredHomes.map(home => (
          <li key={home.id} className="flex justify-between items-center mb-2">
            <span>{home.name} - {home.location}</span>
            <div className="flex gap-2">
              <button 
                onClick={() => { 
                  setHomeName(home.name); 
                  setHomeLocation(home.location);
                  setHomeId(home.id);
                }}
                className="bg-yellow-500 text-white p-1 rounded"
              >
                Edit
              </button>
              <button 
                onClick={() => onDelete(home.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildrenHomeForm;
