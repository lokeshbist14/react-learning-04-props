    function StudentStatus(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      {props.isStudent ? (
        <p>This person is a student.</p>
      ) : (
        <p>This person is not a student.</p>
      )}
    </div>
  );
}

export default StudentStatus;