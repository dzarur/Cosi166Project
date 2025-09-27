    
export default function StudentMode({teacherQuestion}){

    return(
        <div className="student-mode">

            <h3>Student Mode</h3>
            {teacherQuestion ? (<div> <p>{teacherQuestion}</p></div>) : (<div>No question asked yet.</div>)}
        </div>

    );
}