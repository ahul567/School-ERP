const API_URL = "http://localhost:5000/api/students";

export const getStudents = async()=>{
    const response = await fetch(API_URL);

    const data = await response.json();

    if(!response.ok){
        throw new Error(
            data.message || "Unable to fetch students"
        );
    }
    return data.data;
};

export const getstudentByTd = async(id) => {
    const response = await fetch(
        `${API_URL}/${id}`
    );
    const data = await response.json();
    if(!response.ok){
        throw new Error(
            data.message || "Unable to fetch student"
        );
    }
    return data.data;
};

export const updateStudentById = async(id)=>{
     const response = await fetch(
        `${API_URL}/${id}`,
        {
            method:"PUT".
            "Content-Type":"application/json"
        },
        body: JSON.stringify(student);
     )
     
    const data = await response.json();

        if(!response.ok){
            throw new Error(

                data.message || "Unable to update student"

            );

        
        }
            return data.data;
        };

export const deleStudent = async(id) =>{
    const response = await fetch(
        `${API_URL}/${id}`,

        {
            method:"DELETE"
        }
    );

    const data = await response.json();
       if(!response.ok){
        throw new Error(
            data.message || "Unable to delete student"
        );
       }
    return data;
}





    