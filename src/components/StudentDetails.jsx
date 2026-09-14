function StudentDetails(props) {
  return (
    <div>
      <h2>{props.student.name}</h2>
      <p>Age: {props.student.age}</p>
      <p>Course: {props.student.course}</p>
    </div>
  );
}

export default StudentDetails;