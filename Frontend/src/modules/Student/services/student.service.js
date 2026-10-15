const API_URL = "http://localhost:5000/api/student";

// GET: All students
export const getStudents = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Unable to fetch students");
    }

    return data.data;
};

// GET: Student by ID
export const getStudentById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Unable to fetch student");
    }

    return data.data;
};

// POST: Create student
export const createStudent = async (student) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Unable to create student");
    }

    return data.data;
};

// PUT: Update student
export const updateStudentById = async (id, student) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Unable to update student");
    }

    return data.data;
};

// DELETE: Delete student
export const deleteStudent = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Unable to delete student");
    }

    return data;
};

// Compatibility aliases for existing imports
export const getstudentById = getStudentById;
export const updateStudent = updateStudentById;
export const deleStudent = deleteStudent;