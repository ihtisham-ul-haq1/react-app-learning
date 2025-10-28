
import React from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import {userSchema} from "../schemas/userSchema.jsx";
import "./RegistrationStyle.css"

export const RegistrationPage = ()=> {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      date: "",
      gender: "",
      ageGroup: [],
      weekday: "",
    },
    validationSchema: userSchema,
    onSubmit: (values, { resetForm }) => {
      const data = {
        ...values,
        createdAt: new Date().toISOString(),
      };
      console.log("✅ Saved Data:", JSON.stringify(data, null, 2));
      alert("Data saved successfully!");
      resetForm();
    },
  });

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center text-success mb-4">User Registration</h3>

        <form onSubmit={formik.handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${
                formik.touched.name && formik.errors.name ? "is-invalid" : ""
              }`}
              {...formik.getFieldProps("name")}
              placeholder="Enter your name"
            />
            <div className="invalid-feedback">{formik.errors.name}</div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`input-field ${
                formik.touched.email && formik.errors.email ? "input-error" : ""
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="example@email.com"
            />
            <div className="invalid-feedback">{formik.errors.email}</div>
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className={`form-control ${
                formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
              }`}
              {...formik.getFieldProps("phone")}
              placeholder="03xxxxxxxxx"
            />
            <div className="invalid-feedback">{formik.errors.phone}</div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("password")}
              placeholder="Enter password"
            />
            <div className="invalid-feedback">{formik.errors.password}</div>
          </div>

          {/* Date */}
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="date"
              className={`form-control ${
                formik.touched.date && formik.errors.date ? "is-invalid" : ""
              }`}
              {...formik.getFieldProps("date")}
            />
            <div className="invalid-feedback">{formik.errors.date}</div>
          </div>

          {/* Gender (Radio) */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              {["Male", "Female", "Other"].map((g) => (
                <div className="form-check form-check-inline" key={g}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    id={g}
                    onChange={formik.handleChange}
                    checked={formik.values.gender === g}
                    className="form-check-input"
                  />
                  <label htmlFor={g} className="form-check-label">{g}</label>
                </div>
              ))}
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-danger small">{formik.errors.gender}</div>
            )}
          </div>

          {/* Age Group (Checkboxes) */}
          <div className="mb-3">
            <label className="form-label">Age Group</label>
            <div>
              {["Child", "Teen", "Adult"].map((group) => (
                <div className="form-check form-check-inline" key={group}>
                  <input
                    type="checkbox"
                    name="ageGroup"
                    value={group}
                    id={group}
                    onChange={formik.handleChange}
                    checked={formik.values.ageGroup.includes(group)}
                    className="form-check-input"
                  />
                  <label htmlFor={group} className="form-check-label">
                    {group}
                  </label>
                </div>
              ))}
            </div>
            {formik.touched.ageGroup && formik.errors.ageGroup && (
              <div className="text-danger small">{formik.errors.ageGroup}</div>
            )}
          </div>

          {/* Weekday (Dropdown) */}
          <div className="mb-3">
            <label className="form-label">Preferred Weekday</label>
            <select
              name="weekday"
              className={`form-select ${
                formik.touched.weekday && formik.errors.weekday
                  ? "is-invalid"
                  : ""
              }`}
              {...formik.getFieldProps("weekday")}
            >
              <option value="">Select a weekday</option>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{formik.errors.weekday}</div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Save Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

