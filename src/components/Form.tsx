import React from "react";

export default function Form() {
  return (
    <div className="d-flex justify-content-center">
      <div className="contact-form">
        <h5 className="fw-700 text-center mb-20">FREE COUNSLING</h5>
        <span className="fw-600">Name</span>
        <input className="form-input mb-20 mt-10" />
        <span className="fw-600">Email id</span>
        <input className="form-input mb-20 mt-10" />
        <span className="fw-600">Phone Number</span>
        <input className="form-input mb-20 mt-10" />
        <span className="fw-600">Message</span>
        <textarea className="form-input mb-20 mt-10" rows={5} />
        <button className="button">Submit</button>
      </div>
    </div>
  );
}
