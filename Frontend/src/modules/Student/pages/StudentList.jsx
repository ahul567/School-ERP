import React, {
    useEffect,
    useState
} from "react";

import { useNavigate } from "react-router-dom";

import StudentTable
    from "../components/StudentTable";

import {
    getStudents,
    deleteStudent
} from "../services/student.service";

import "./student.css";


function StudentList() {

    const navigate = useNavigate();


    const [students, setStudents] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");


    // LOAD STUDENTS
    const loadStudents = async () => {

        try {

            setLoading(true);

            setError("");

            const data =
                await getStudents();

            setStudents(data);

        } catch (error) {

            setError(
                error.message
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        loadStudents();

    }, []);


    // SEARCH
    const filteredStudents =
        students.filter((student) => {

            const name =
                `${student.firstName || ""} ${
                    student.middleName || ""
                } ${
                    student.lastName || ""
                }`.toLowerCase();

            const admission =
                (
                    student.admissionNumber || ""
                ).toLowerCase();

            const searchValue =
                search.toLowerCase();

            return (
                name.includes(searchValue) ||
                admission.includes(searchValue)
            );

        });


    // DELETE
    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this student?"
            );

        if (!confirmDelete) {
            return;
        }


        try {

            await deleteStudent(id);

            await loadStudents();

        } catch (error) {

            alert(
                error.message
            );

        }
    };


    // VIEW
    const handleView = (id) => {

        navigate(
            `/students/${id}`
        );

    };


    // EDIT
    const handleEdit = (id) => {

        navigate(
            `/students/${id}/edit`
        );

    };


    // ADD
    const handleAddStudent = () => {

        navigate(
            "/students/create"
        );

    };


    // LOADING
    if (loading) {

        return (
            <div className="student-page">

                <div className="student-loading">

                    Loading students...

                </div>

            </div>
        );
    }


    return (

        <div className="student-page">


            {/* HEADER */}

            <div className="student-page-header">

                <div>

                    <h1>
                        Students
                    </h1>

                </div>


                <div className="student-breadcrumb">

                    <span>
                        Dashboard
                    </span>

                    <span>
                        /
                    </span>

                    <span>
                        Students
                    </span>

                </div>

            </div>


            {/* CONTENT */}

            <div className="student-card">


                {/* TOP */}

                <div className="student-card-top">

                    <button
                        type="button"
                        className="add-student-btn"
                        onClick={
                            handleAddStudent
                        }
                    >
                        + Add a student
                    </button>


                    <div className="student-export-buttons">

                        <button>
                            Copy
                        </button>

                        <button>
                            Excel
                        </button>

                        <button>
                            CSV
                        </button>

                        <button>
                            PDF
                        </button>

                    </div>


                    <div className="student-search">

                        <label>
                            Search:
                        </label>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                            placeholder="Search"
                        />

                    </div>

                </div>


                {/* ERROR */}

                {error && (

                    <div className="student-error">

                        {error}

                    </div>

                )}


                {/* TABLE */}

                <StudentTable
                    students={
                        filteredStudents
                    }
                    onView={
                        handleView
                    }
                    onEdit={
                        handleEdit
                    }
                    onDelete={
                        handleDelete
                    }
                />


                {/* FOOTER */}

                <div className="student-table-footer">

                    <span>

                        Showing{" "}
                        {filteredStudents.length}{" "}
                        of{" "}
                        {students.length}{" "}
                        entries

                    </span>


                    <div className="student-pagination">

                        <button>
                            Previous
                        </button>

                        <button className="active-page">
                            1
                        </button>

                        <button>
                            Next
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default StudentList;