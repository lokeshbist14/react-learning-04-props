function StudentSubjects(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <p>Subjects:</p>

      <ul>
        {props.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentSubjects;