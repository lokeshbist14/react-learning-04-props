import React from 'react'

function StudentMarks(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

export default StudentMarks;