import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css'
const Analytics = ({ homes }) => {
  homes = [
    { id: 1, name: "Sunnydale Home", visits: 120, donations: 2000, totalDonationsNeeded: 7000 },
    { id: 2, name: "Rivendell Shelter", visits: 75, donations: 3000, totalDonationsNeeded: 8000 },
    { id: 3, name: "Hogwarts Orphanage", visits: 180, donations: 1000, totalDonationsNeeded: 5000 }
  ];

  const data = {
    labels: homes.map(home => home.name),
    datasets: [
      {
        label: 'Visits',
        data: homes.map(home => home.visits),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Donations Needed',
        data: homes.map(home => home.totalDonationsNeeded - home.donations),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }
    ]
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Analytics</h3>
      <Bar data={data} />
    </div>
  );
}

export default Analytics;
