import React, { useState } from 'react';

export default function Test() {
  const [users, setUsers] = useState(false);

  const showUser = async () => {
    let response = await fetch('http://localhost:6060/api/users/');
    let data = await response.json();
    setUsers(data);
  };

  return (
    <>
      <h1>test</h1>
      {users ? <h1>User Information</h1> : <h1>Show User Information</h1>}
      <br></br>
      {typeof users !== 'object' ? (
        <button onClick={showUser}>전체</button>
      ) : (
        users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.username}</h1>
              <h1>{user.age}</h1>
              <h1>{user.information}</h1>
              <br></br>
            </div>
          );
        })
      )}
    </>
  );
}
