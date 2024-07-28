import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './step2.css';

const Step2 = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.address1) newErrors.address1 = '* Please Enter Your Address';
    if (!formData.city) newErrors.city = '* Please Enter Your City';
    if (!formData.state) newErrors.state = '* Please Enter Your State';
    if (!formData.zip) newErrors.zip = '* Please Enter Your Zip Code';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate('/step3');
    }
  };

  const handleBack = () => {
    navigate('/step1');
  };

  return (
    <div id="step-2-form-container">
      <div id="step-2-form-sidebar">
        <ul id="step-2-form-steps">
          <li className="active">
            <div className="step-circle">1</div>
            <span>YOUR INFO</span>
          </li>
          <li className="active">
            <div className="step-circle">2</div>
            <span>ADD INFO</span>
          </li>
          <li>
            <div className="step-circle">3</div>
            <span>CONFIRMATION</span>
          </li>
        </ul>
      </div>
      <div id="step-2-form-content">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
          <label htmlFor="address1">
            Address Line 1:
            <input
              id="address1"
              type="text"
              value={formData.address1}
              onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
              className={errors.address1 ? 'error' : ''}
              placeholder='e.g.. Jaipur, Rajasthan'
            />
            {errors.address1 && <div className="error">{errors.address1}</div>}
          </label>
          <label htmlFor="address2">
            Address Line 2:
            <input
              id="address2"
              type="text"
              value={formData.address2}
              onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
              placeholder='e.g.. Sikar, Jaipur, Rajasthan'
            />
          </label>
          <div id="step-2-city-state-container">
            <label htmlFor="city">
              City:
              <input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={errors.city ? 'error' : ''}
                placeholder='e.g.. Jaipur'
              />
              {errors.city && <div className="error">{errors.city}</div>}
            </label>
            <label htmlFor="state">
              State:
              <input
                id="state"
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className={errors.state ? 'error' : ''}
                placeholder='e.g.. Rajasthan'
              />
              {errors.state && <div className="error">{errors.state}</div>}
            </label>
          </div>
          <label htmlFor="zip">
            Zip Code:
            <input
              id="zip"
              type="text"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className={errors.zip ? 'error' : ''}
              placeholder='e.g.. 3389M916'
            />
            {errors.zip && <div className="error">{errors.zip}</div>}
          </label>
          <div id="step-2-button-container">
            <button type="button" className='btnB' onClick={handleBack}>Back</button>
            <button type="button" className='btnN' onClick={handleNext}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
