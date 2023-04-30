import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="user-list">
      {listOfUsers.map(user => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;
