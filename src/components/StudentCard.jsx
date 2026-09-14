import React from 'react'

function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

export default StudentCard;