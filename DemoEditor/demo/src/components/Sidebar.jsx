import React from "react";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sidebar_header">
        <h1>Class Notes</h1>
        <button>Add Note</button>
      </div>

      <div className="notes">
        <div className="note">
          <div className="note_title">
            <strong>Title</strong>
            <button>Delete Note</button>
          </div>

          <p>Note Preview</p>
          <small className="note_meta">
            last modofied [date]
          </small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
