import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3'
import Card from "./Card";

const MultiStep = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

// console.log(formData.name)

  return (
    <Router>
      <div className="multi-step-form">
        <Routes>
          <Route path="/step1" element={<Step1 formData={formData} setFormData={setFormData} />} />
          <Route path="/step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
          <Route path="/step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
          <Route path="/" element={<Navigate to="/step1" />} />
          <Route path='/card' element={ <Card formData={formData} />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default MultiStep;
