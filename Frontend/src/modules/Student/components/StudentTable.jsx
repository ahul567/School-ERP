import React from "react";

function StudentTable({
    students,
    onVidew,
    onEdit,
    onDelete
}){
  return (
    <div className="student-table-wrapper">
        <table className="student-table">
            <thead>
               <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Admission No.</th>
                <th>Name</th>
                <th>Class</th>
                <th>Selection</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Actions</th>
                </tr> 
            </thead>
            <tbody>
                
            </tbody>
    </div>
  )     
}