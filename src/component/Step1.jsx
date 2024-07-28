import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step1.css';

const Step1 = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = '* Please Enter Your Name';
    if (!formData.email) newErrors.email = '* Please Enter Your Email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone) newErrors.phone = '* Please Enter Your Phone-Number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate('/step2');
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <div id="form-container">
      <div id="form-sidebar">
        <ul id="form-steps">
          <li id="form-step1" className="active">
            <div className="step-circle">1</div>
            <span>YOUR INFO</span>
          </li>
          <li id="form-step2">
            <div className="step-circle">2</div>
            <span>ADD INFO</span>
          </li>
          <li id="form-step3">
            <div className="step-circle">3</div>
            <span>CONFIRMATION</span>
          </li>
        </ul>
      </div>
      <div id="form-content">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
          <label>
            Name
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder='e.g.. Kuldeep Singh'
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <div id="error-name" className="error">{errors.name}</div>}
          </label>
          <label>
            Email Address
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder='e.g.. Software@gmail.com'
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <div id="error-email" className="error">{errors.email}</div>}
          </label>
          <label>
            Phone Number
            <input
              type="text"
              value={formData.phone}
              onChange={handlePhoneInput}
              placeholder='e.g.. +91 9783587013'
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <div id="error-phone" className="error">{errors.phone}</div>}
          </label>
          <button type="button" onClick={handleNext}>Next Step</button>
        </form>
      </div>
    </div>
  );
};

export default Step1;
