import React from 'react'

function UserStatus(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      {props.isOnline ? (
        <p>User is Online</p>
      ) : (
        <p>User is Offline</p>
      )}
    </div>
  );
}

export default UserStatus
