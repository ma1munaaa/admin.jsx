import React from 'react';
import 'tailwindcss/tailwind.css'


const ChildrenHomeList = ({ homes, onDelete }) => {
    return (
        <div className="max-w-md mx-auto my-8">
          <h3 className="text-2xl font-semibold mb-4">Children's Homes</h3>
          <ul>
            {homes.length > 0 ? (
              homes.map(home => (
                <li key={home.id} className="flex justify-between items-center bg-white p-4 mb-2 rounded-md shadow">
                  <span className="text-lg">{home.name}</span>
                  <button 
                    onClick={() => onDelete(home.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <li className="text-center text-gray-500">No homes available</li>
            )}
          </ul>
        </div>
      );
    }
    
    export default ChildrenHomeList;
    
    