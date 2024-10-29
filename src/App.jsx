import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

const App = () => {
    const [values, setValues] = useState({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      dob: "",
      address: "",
      gender: "",
      course: ""
    });

    const inputs = [
      { id: 1, name: "firstname", type: "text", placeholder: "Enter first name", errorMessage: "Username should be 3-16 characters and shouldn't include any special character!", label: "First Name", pattern: "^[A-Za-z ]{3,16}$", required: true },
      { id: 8, name: "lastname", type: "text", placeholder: "Enter last name", errorMessage: "Username should be 3-16 characters and shouldn't include any special character!", label: "Last Name", pattern: "^[A-Za-z ]{3,16}$", required: true },
      { id: 2, name: "phone", type: "tel", placeholder: "Enter your number", errorMessage: "Phone number should be 10 digits!", label: "Phone", pattern: "^[0-9]{10}$", required: true },
      { id: 3, name: "email", type: "email", placeholder: "Enter your email", errorMessage: "It should be a valid email address!", label: "Email", required: true },
      { id: 4, name: "dob", type: "date", placeholder: "Enter your date of birth", label: "Date of Birth" },
      { id: 5, name: "address", type: "text", placeholder: "Enter your address", label: "Address" },
      {
        id: 6,
        name: "gender", type: "select", label: "Gender",
        options: [
          { label: "Select Gender", value: "" },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ],
        required: true
      },
      {
        id: 7,
        name: "course", type: "select", label: "Course",
        options: [
          { label: "Select Course", value: "" },
          { label: "Mathematics", value: "mathematics" },
          { label: "Science", value: "science" },
          { label: "History", value: "history" },
          { label: "Literature", value: "literature" },
          { label: "Art", value: "art" }
        ],
        required: true
      }
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const message = `
        Successfully Registered!
        Name: ${values.firstname} ${values.lastname}
        Phone: ${values.phone}
        Email: ${values.email}
        Date of Birth: ${values.dob}
        Address: ${values.address}
        Gender: ${values.gender}
        Course: ${values.course}
      `;
    
      alert(message);
      console.log("Form submitted:", values);
    };

    const handleCancel = () => {
      setValues({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        dob: "",
        address: "",
        gender: "",
        course: ""
      });
    };

    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Student Register</h1>
          <div className="form-section">
            <div className="left-section">
              {inputs.slice(0, Math.ceil(inputs.length / 2)).map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
            <div className="right-section">
              {inputs.slice(Math.ceil(inputs.length / 2)).map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
          </div>
          <div className="button-container">
            <button className="btn" type="submit">Submit</button>
            <button type="button" onClick={handleCancel} className="btn1">Cancel</button>
          </div>
        </form>
      </div>
    );
};

export default App;
