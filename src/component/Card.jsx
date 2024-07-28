import React from 'react';
import './card.css';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import contact from "../assets/image/contact.png"
import { useNavigate } from 'react-router-dom';

const Card = ({formData}) => {

  const navigation = useNavigate();

  const buttonHandle=()=>{

     navigation('/')

  }

  return (
    <div className="custom-card" onClick={buttonHandle}>
      <IconButton className="close-buttons" aria-label="close">
        <CloseIcon />
      </IconButton>
      <img
        src={contact}
        alt="contact"
        className="card-image"
      />
      <p className="card-text"> Dear {formData.name} Your Data Has Been Submited Sucessfully.....  </p>
    </div>
  );
};

export default Card;
