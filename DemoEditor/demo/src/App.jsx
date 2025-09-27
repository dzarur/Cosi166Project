import React, { useState } from "react";
import "./App.css";
import TeacherMode from "./components/TeacherMode";
import StudentMode from "./components/StudentMode";

function App() {
  const [teacherMode, setTeacherMode] = useState(false);


  return (
    <>
      <TeacherMode
        teacherMode={teacherMode}
        setTeacherMode={setTeacherMode}
      />

      {!teacherMode && ( <StudentMode />)}

      <hr />
    </>
  );
}

export default App;
