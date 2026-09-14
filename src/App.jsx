/*
Example 1 - Basic Props

import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>My Students</h1>

      <Student name="Lokesh" />
      <Student name="Ram" />
      <Student name="Sita" />
    </div>
  );
}

export default App;
*/


// Example 2 - Multiple Props

import "./App.css";
import StudentInfo from "./components/StudentInfo";
import StudentMarks from "./components/StudentMarks";
import StudentStatus from "./components/StudentStatus";
import StudentSubjects from "./components/StudentSubjects";
import StudentDetails from "./components/StudentDetails";
import StudentButton from "./components/StudentButton";
import MessageBox from "./components/MessageBox";
import StudentProfile from "./components/StudentProfile";
import UserStatus from "./components/UserStatus";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <StudentInfo name="Lokesh" age={22} course="React" />
      <StudentInfo name="Ram" age={21} course="JavaScript" />
      <StudentInfo name="Sita" age={23} course="HTML & CSS" />


      {/* Example 3-Number Props */}
      <h1>Student Marks</h1>

      <StudentMarks name = "Lokesh" marks={85} />
      <StudentMarks name = "Ram" marks= {75} />
      <StudentMarks name = "Sita" marks= {90} />

      {/* Example 4-Boolean Props (true / false). */}
      <h1>Student Status</h1>

      <StudentStatus name="Lokesh" isStudent={true} />
      <StudentStatus name="Ram" isStudent={false} />


      {/* Example 5-Array Props */}
      <h1>Student Subjects</h1>

      <StudentSubjects 
      name= "Lokesh"
      subjects= {["HTML", "CSS", "JavaScript", "React"]} />


      {/* Example 6-Object Props */}
      <h1>Student Details</h1>

      <StudentDetails
       student={{
       name: "Lokesh",
       age: 22,
       course: "React"
      }}/>


      {/* Example 7: Function Props */}
      <h1>Function Props</h1>

      <StudentButton
      name="Lokesh"
      sayHello={() => alert("Hello Lokesh!")}/>


      {/* Example 8-Children Props */}
      <h1>Children Props</h1>

      <MessageBox>
        <h2>Hello Lokesh!</h2>
        <p>I am learning Children Props.</p>
      </MessageBox>


      {/* Example 9: Destructuring Props */}
      <h1>Destructurin Props</h1>

      <StudentProfile
      name = "Lokesh"
      age = {22}
      course = "React" />


      {/* Example 10: Conditional Props */}
      <h1>Conditional Props</h1>

      <UserStatus name="Lokesh" isOnline={true} />
      <UserStatus name="Ram" isOnline={false} />



      {/* Props Practice Project */}
      <h1>Student Profile Cards</h1>

      <StudentCard 
      name = "Lokesh"
      age={22}
      course = "React"
      marks = {90} />

      <StudentCard 
      name = "Ram"
      age={21}
      course = "JavaScript"
      marks = {80} />

      <StudentCard 
      name = "Sita"
      age={20}
      course = "HTML & CSS"
      marks = {85} />
    </div>
  );
}

export default App;
