import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [dataApi, setDataApi] = useState([]);

  // Menggunakan Axios
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setDataApi(res.data);
      })
  }, []); 
  
  return (
    <div className="App" style={{background: 'green', borderRadius: '10px'}}>
      <h2 align="center" style={{paddingTop: '25px'}}>Creative Indigo</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {dataApi.map((data, index) => {
          return(
            <div key={index} style={{ background: 'grey', margin: '20px', padding: '15px', width: '20%', borderRadius: '10px', boxShadow: '10px 10px', fontFamily: 'sans-serif'}}>
              <div>ID : {data.id} </div> 
              <div style={{margin: '5px auto'}}>Name: {data.name} </div> 
              <div>Username: {data.username} </div> 
              <div style={{margin: '5px auto'}}>Email : {data.email} </div> 
              <div>City : {data.address.city} </div> 
              <div style={{margin: '5px auto'}}>Website : {data.website} </div> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
