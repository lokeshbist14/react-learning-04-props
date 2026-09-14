import React from 'react'

function StudentProfile(props) {
    const {name, age, course} = props;

  return (
    <div>
    <h2>{name}</h2>  
    <p>Age: {age}</p>
    <p>Course: {course}</p>
    </div>
  );
}

export default StudentProfile;