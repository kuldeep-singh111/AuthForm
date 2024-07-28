# AuthForm Intern Project

AuthForm is a multi-step form built using React and Matarial UI,  CSS, designed with animations and validations. The form captures Personal Information, Address Information, and displays a Confirmation step with the data entered by the user. The project also utilizes local storage to ensure data persistence even after a page reload.

## LInK ---    https://66a5f9624a43fcf1dc0e7274--iridescent-lolly-7c281b.netlify.app/

## Features

- **Multi-Step Form**: The form is divided into three steps for a better user experience.
- **Data Persistence**: Uses local storage to save the form data, preventing data loss on page reload.
- **Form Validation**: Ensures that all required fields are filled out before proceeding to the next step.
- **Responsive Design**: The form is designed to be responsive, providing an optimal viewing experience across different devices.
- **Animations**: Smooth transitions and animations enhance the user experience.

## Steps

### Step 1: Personal Information

In this step, the user is required to enter their personal information, such as name, email, and phone number.

### Step 2: Address Information

This step collects the user's address details, including Address Line 1, Address Line 2, City, State, and Zip Code.

### Step 3: Confirmation

The final step displays the information entered in the first and second steps for the user to review and confirm.


## Usage

1. **Personal Information**: Enter your personal details and click "Next" to proceed to the Address Information step.
2. **Address Information**: Fill in your address details and click "Next" to proceed to the Confirmation step.
3. **Confirmation**: Review the information you have entered. If everything is correct, submit the form.

## Project Structure

ReactIntern/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   ├── components/
│   │   ├── Step1.jsx
│   │   ├── Step2.jsx
│   │   ├── Step3.jsx
│   │   ├──MultiStep.jsx 
│   │   ├──Card.Jsx
│   │   ├── styles/
│   │   │   ├── step1.css
│   │   │   ├── step2.css
│   │   │   ├── step3.css
│   │   │   ├── Card.css
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
