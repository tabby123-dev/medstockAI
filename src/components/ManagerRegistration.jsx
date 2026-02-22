import React, { useState } from "react";
import "./ManagerRegistration.css";

function ManagerRegistration() {
    const [formData, setFormData] = useState({
        fullName: "",
        staffId: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("password do not match");
            return;
        }
        console.log("Form Submitted:", formData);
        alert("Manager account created successfuly");
    };

    return (
        <div className="registration-container">
            <div className="registration-card">
                <h2>ManagerRegistration</h2>
                <p className="subtitle">setup your administrative credentials</p>
                <form onSubmit={handleSubmit}>
                    <label>fullName</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <label>Staff ID</label>
                    <input
                        type="text"
                        name="staffId"
                        placeholder="Enter staff ID"
                        value={formData.staffId}
                        onChange={handleChange}
                        required
                    />
                    <label>email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label>confirmPassword</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <div className="responsibilities-box">
                        <h4>Manager Responsibilities</h4>
                        <ul>
                            <li>Oversight of inventory levels</li>
                            <li>Approval of staff procurement requests</li>
                            <li>Generation of monthly audit reports</li>
                        </ul>
                    </div>
                    <button type="submit" className="submit-btn">
                        Create Manager Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ManagerRegistration;
















