import React, { useState } from "react";

export default function TeacherMode({ teacherMode, setTeacherMode, onSendQuestion }) {
  const [inputValue, setInputValue] = useState("");

  const handleToggle = () => {
    setTeacherMode(!teacherMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    onSendQuestion(trimmed);
    setInputValue("");
  };

  return (
    <div className="teacher-mode">
      <button className="teacherModeButton" onClick={handleToggle}>
        TeacherMode is {teacherMode ? "On" : "Off"}
      </button>

      {teacherMode && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter question here"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
