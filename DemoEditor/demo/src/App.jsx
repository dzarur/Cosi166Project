import React, { useState } from "react";
import "./App.css";
import TeacherMode from "./components/TeacherMode";
import CodeEditor from "./components/CodeEditor";
import StudentMode from "./components/StudentMode";
import MainNotes from "./components/mainNotes";
import Sidebar from "./components/sidebar";

function App() {
  const [teacherMode, setTeacherMode] = useState(false);
  const [teacherQuestion, setTeacherQuestion] = useState("");

  const handleSendQuestion = (question) => {
    setTeacherQuestion(question);
  };

  return (
    <>
      {/* <TeacherMode
        teacherMode={teacherMode}
        setTeacherMode={setTeacherMode}
        onSendQuestion={handleSendQuestion}  
      />

      {!teacherMode && ( <StudentMode teacherQuestion={teacherQuestion} />)}


      <hr />
      <CodeEditor /> */}

      <Sidebar/>
      <MainNotes />

      


    </>
  );
}

export default App;
