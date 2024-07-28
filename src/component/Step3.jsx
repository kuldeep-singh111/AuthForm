import React from 'react';
import { useNavigate } from 'react-router-dom';
import './step3.css';

const Step3 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/step2');
  };

  const handleSubmit = () => {
 
    setFormData({
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    });
    
   
    localStorage.removeItem('formData');
    
    navigate('/card');
  };

  return (
    <div id="form-container-step3">
      <div id="form-sidebar-step3">
        <ul id="form-steps-step3">
          <li className="active">
            <div className="step-circle">1</div>
            <span>YOUR INFO</span>
          </li>
          <li className="active">
            <div className="step-circle">2</div>
            <span>ADD INFO</span>
          </li>
          <li className="active">
            <div className="step-circle">3</div>
            <span>CONFIRMATION</span>
          </li>
        </ul>
      </div>
      <div id="form-content-step3">
        <h1>Confirmation</h1>
        <p>Please review your information before submitting.</p>
        <form>
          <label htmlFor="name-step3">
            Name:
            <input id="name-step3" type="text" value={formData.name} readOnly />
          </label>
          <div id="email-phone-container-step3">
            <label htmlFor="email-step3">
              Email:
              <input id="email-step3" type="text" value={formData.email} readOnly />
            </label>
            <label htmlFor="phone-step3">
              Phone:
              <input id="phone-step3" type="text" value={formData.phone} readOnly />
            </label>
          </div>
          <label htmlFor="address1-step3">
            Address Line 1:
            <input id="address1-step3" type="text" value={formData.address1} readOnly />
          </label>
          <label htmlFor="address2-step3">
            Address Line 2:
            <input id="address2-step3" type="text" value={formData.address2} readOnly />
          </label>
          <div id="city-state-container-step3">
            <label htmlFor="city-step3">
              City:
              <input id="city-step3" type="text" value={formData.city} readOnly />
            </label>
            <label htmlFor="state-step3">
              State:
              <input id="state-step3" type="text" value={formData.state} readOnly />
            </label>
          </div>
          <label htmlFor="zip-step3">
            Zip Code:
            <input id="zip-step3" type="text" value={formData.zip} readOnly />
          </label>
          <div id="button-container-step3">
            <button type="button" id="back-button-step3" onClick={handleBack}>Back</button>
            <button type="button" id="submit-button-step3" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;
