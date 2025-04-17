import React from "react";

function Form({
  firstName,
  lastName,
  newsletter,
  handleFirstName,
  handleLastName,
  handleNewsLetterChange,
  handleSubmit,
  number,
  handleNumberChange,
}) {
  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsLetterChange}
        checked={newsletter}
      />
      <input type="text" onChange={handleFirstName} value={firstName} />
      <input type="text" onChange={handleLastName} value={lastName} />
      <input type="number" value={number} onChange={handleNumberChange} />
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
