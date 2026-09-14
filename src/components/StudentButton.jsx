function StudentButton(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <button onClick={props.sayHello}>
        Say Hello
      </button>
    </div>
  );
}

export default StudentButton;