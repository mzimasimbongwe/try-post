import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make a GET request to your backend API
    axios.get('http://localhost:3001/getusers')
      .then((response) => {
        setUsers(response.data); // Set the fetched data in the state
      })
      .catch((err) => {
        setError(err.message); // Handle errors by setting an error state
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>First Mongo</h2>
      {error ? (
        <p>Error: {error}</p> // Display an error message if there's an issue
      ) : (
        <div>
          {users.map(user => (
            <div key={user._id}>
              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
