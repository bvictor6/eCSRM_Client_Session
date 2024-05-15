'use client'
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Home = () => {
  const [data, setData] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    // Fetch data from an external API using useEffect - GET with payload
    fetch('https://jsonplaceholder.typicode.com/photos',{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify(jsonData),
        //body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>External API Data {JSON.stringify(session)}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.url}</td>
              {/* Add more table cells for other data properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
