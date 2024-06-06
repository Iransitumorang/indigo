import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [dataApi, setDataApi] = useState([]);

  // Menggunakan Fetch API
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(res => {
  //       setDataApi(res);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // Menggunakan Axios
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setDataApi(res.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App" style={{ background: 'green', borderRadius: '10px' }}>
      <h2 align="center" style={{ paddingTop: '25px' }}>Creative Indigo</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {dataApi.map((item, index) => {
          return (
            <div key={index} style={{ background: 'grey', margin: '20px', padding: '15px', width: '20%', borderRadius: '10px', boxShadow: '10px 10px', fontFamily: 'sans-serif' }}>
              <div>ID : {item.id} </div>
              <div style={{ margin: '5px auto' }}>Name: {item.name} </div>
              <div>Username: {item.username} </div>
              <div style={{ margin: '5px auto' }}>Email : {item.email} </div>
              <div>City : {item.address.city} </div>
              <div style={{ margin: '5px auto' }}>Website : {item.website} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
