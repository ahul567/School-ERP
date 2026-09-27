import React from "react";

function StudentTable({
    students,
    onView,
    onEdit,
    onDelete
}) {

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

                        <th>Section</th>

                        <th>Gender</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>


                <tbody>

                    {students.length === 0 ? (

                        <tr>

                            <td
                                colSpan="9"
                                className="no-data"
                            >
                                No students found
                            </td>

                        </tr>

                    ) : (

                        students.map(
                            (student, index) => (

                                <tr
                                    key={
                                        student._id
                                    }
                                >

                                    <td>
                                        {index + 1}
                                    </td>


                                    <td>

                                        {student.photo ? (

                                            <img
                                                src={
                                                    student.photo
                                                }
                                                alt={
                                                    student.firstName
                                                }
                                                className="student-photo"
                                            />

                                        ) : (

                                            <div className="student-photo-placeholder">
                                                {student.firstName
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </div>

                                        )}

                                    </td>


                                    <td>
                                        {
                                            student.admissionNumber
                                        }
                                    </td>


                                    <td>

                                        {
                                            student.firstName
                                        }{" "}

                                        {
                                            student.middleName
                                        }{" "}

                                        {
                                            student.lastName
                                        }

                                    </td>


                                    <td>
                                        {
                                            student.class
                                                ?.name || "-"
                                        }
                                    </td>


                                    <td>
                                        {
                                            student.section
                                                ?.name || "-"
                                        }
                                    </td>


                                    <td>
                                        {
                                            student.gender
                                        }
                                    </td>


                                    <td>

                                        <span
                                            className={
                                                student.status ===
                                                "Active"
                                                    ? "status-active"
                                                    : "status-inactive"
                                            }
                                        >
                                            {
                                                student.status
                                            }
                                        </span>

                                    </td>


                                    <td>

                                        <div className="student-actions">

                                            <button
                                                type="button"
                                                className="view-btn"
                                                onClick={() =>
                                                    onView(
                                                        student._id
                                                    )
                                                }
                                            >
                                                View
                                            </button>


                                            <button
                                                type="button"
                                                className="edit-btn"
                                                onClick={() =>
                                                    onEdit(
                                                        student._id
                                                    )
                                                }
                                            >
                                                Edit
                                            </button>


                                            <button
                                                type="button"
                                                className="delete-btn"
                                                onClick={() =>
                                                    onDelete(
                                                        student._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            )
                        )

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default StudentTable;