import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

export default function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);
  const [number, setNumber] = useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null);
  const handleFirstName = (event) => setFirstName(event.target.value);
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
  };
  const handleNewsLetterChange = (event) => setNewsletter(event.target.checked);

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalidNumber(null);
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number`);
    }
  };
  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        newsletter={newsletter}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleSubmit={handleSubmit}
        handleNewsLetterChange={handleNewsLetterChange}
        handleNumberChange={handleNumberChange}
        number={number}
      />
      <DisplayData
        firstName={firstName}
        lastName={lastName}
        isInvalidNumber={isInvalidNumber}
      />
    </div>
  );
}
