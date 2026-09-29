import React,{
    useEffect,
    useSTATE
} from "react";

import StudentTable from "./StudentTable";

import {
    getStudents,
    deleteStudent    
}   from "../services/student.service";


import './student.css';


function StudentList(){
    const navigate = usenavigate();

    const [students, setStudents] = useState([]);

    const [search,setsearch] = useState("");

    const [error,setError] = useState("");

    const loadStudents = async() => {
        try{
            setLoading(true);
            setErrors("");
            const data = await getStudents();
            setStudents(data);
        } catch(error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        loadStudents();
    },[]);

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



const handleDelete = = async(id) => {
    const confirmDelete = window.confirm(
        "Are you sure want to delete student?"
    );

    if(!confirmDelete){
        return;
    }

    try{
        await delete(id);
        await loadStudents();
    } catch(error) {

        alert(
            error.message
        )
    }
};






