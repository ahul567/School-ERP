import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/student.service";
import "./student.css";

const getToday = () => new Date().toISOString().slice(0, 10);

const initialFormData = {
    admissionNumber: "",
    admissionDate: getToday(),
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    nationality: "Indian",
    religion: "",
    category: "",
    phone: "",
    alternatePhone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    rollNumber: "",
    status: "Active"
};

function StudentCreate() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialFormData);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        const payload = { ...formData };

        // Optional date fields ko empty string ke roop mein na bhejein
        if (!payload.admissionDate) {
            delete payload.admissionDate;
        }

        // Empty blood group enum validation error se bachne ke liye
        if (!payload.bloodGroup) {
            delete payload.bloodGroup;
        }

        try {
            setSaving(true);

            await createStudent(payload);

            window.alert("Student created successfully!");
            navigate("/students");
        } catch (err) {
            setError(err.message || "Unable to create student.");
        } finally {
            setSaving(false);
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setError("");
    };

    return (
        <div className="student-page student-create-page">
            {/* Page Header */}
            <div className="student-page-header">
                <div>
                    <h1>Add Student</h1>

                    <div className="student-breadcrumb">
                        <span
                            className="student-breadcrumb-link"
                            onClick={() => navigate("/students")}
                        >
                            Students
                        </span>
                        <span>/</span>
                        <span>Add Student</span>
                    </div>
                </div>

                <button
                    type="button"
                    className="student-back-btn"
                    onClick={() => navigate("/students")}
                >
                    ← Back to Students
                </button>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
                <div className="student-create-card">
                    <div className="student-create-card-header">
                        <h2>Student Information</h2>
                        <p>
                            Fields marked with * are required.
                        </p>
                    </div>

                    {error && (
                        <div className="student-form-error" role="alert">
                            {error}
                        </div>
                    )}

                    {/* Admission Details */}
                    <div className="student-form-section">
                        <h3>Admission Details</h3>

                        <div className="student-form-grid">
                            <div className="student-form-group">
                                <label htmlFor="admissionNumber">
                                    Admission Number *
                                </label>
                                <input
                                    id="admissionNumber"
                                    name="admissionNumber"
                                    value={formData.admissionNumber}
                                    onChange={handleChange}
                                    placeholder="Enter admission number"
                                    required
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="admissionDate">
                                    Admission Date
                                </label>
                                <input
                                    id="admissionDate"
                                    type="date"
                                    name="admissionDate"
                                    value={formData.admissionDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="rollNumber">
                                    Roll Number
                                </label>
                                <input
                                    id="rollNumber"
                                    name="rollNumber"
                                    value={formData.rollNumber}
                                    onChange={handleChange}
                                    placeholder="Enter roll number"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="status">Status</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Graduated">Graduated</option>
                                    <option value="Transferred">Transferred</option>
                                    <option value="Left">Left</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="student-form-section">
                        <h3>Personal Details</h3>

                        <div className="student-form-grid">
                            <div className="student-form-group">
                                <label htmlFor="firstName">
                                    First Name *
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter first name"
                                    required
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="middleName">
                                    Middle Name
                                </label>
                                <input
                                    id="middleName"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    placeholder="Enter middle name"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter last name"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="dateOfBirth">
                                    Date of Birth *
                                </label>
                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    max={getToday()}
                                    required
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="gender">Gender *</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="bloodGroup">
                                    Blood Group
                                </label>
                                <select
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                >
                                    <option value="">Select blood group</option>
                                    {[
                                        "A+", "A-", "B+", "B-",
                                        "AB+", "AB-", "O+", "O-"
                                    ].map((group) => (
                                        <option key={group} value={group}>
                                            {group}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="nationality">
                                    Nationality
                                </label>
                                <input
                                    id="nationality"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="religion">Religion</label>
                                <input
                                    id="religion"
                                    name="religion"
                                    value={formData.religion}
                                    onChange={handleChange}
                                    placeholder="Enter religion"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="category">Category</label>
                                <input
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    placeholder="Enter category"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="student-form-section">
                        <h3>Contact Details</h3>

                        <div className="student-form-grid">
                            <div className="student-form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="alternatePhone">
                                    Alternate Phone
                                </label>
                                <input
                                    id="alternatePhone"
                                    type="tel"
                                    name="alternatePhone"
                                    value={formData.alternatePhone}
                                    onChange={handleChange}
                                    placeholder="Enter alternate number"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div className="student-form-group student-full-width">
                                <label htmlFor="address">Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter full address"
                                    rows={3}
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Enter city"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="Enter state"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="postalCode">
                                    Postal Code
                                </label>
                                <input
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    placeholder="Enter postal code"
                                />
                            </div>

                            <div className="student-form-group">
                                <label htmlFor="country">Country</label>
                                <input
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="student-form-actions">
                        <button
                            type="button"
                            className="student-reset-btn"
                            onClick={handleReset}
                            disabled={saving}
                        >
                            Reset
                        </button>

                        <button
                            type="button"
                            className="student-cancel-btn"
                            onClick={() => navigate("/students")}
                            disabled={saving}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="student-save-btn"
                            disabled={saving}
                        >
                            {saving ? "Saving..." : "Save Student"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default StudentCreate;