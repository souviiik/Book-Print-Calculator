import React, { useState } from "react";

export default function InputForm({ handleFieldValues }) {
  const [formValues, setFormValues] = useState({
    startPage: 1,
    endPage: 1,
  });

  const { startPage, endPage } = formValues;

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: +e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFieldValues(startPage, endPage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control">
        <label>Start page number: </label>
        <input
          className="input"
          name="startPage"
          type="number"
          value={startPage}
          onChange={handleChange}
        />
      </div>
      <div className="control">
        <label>End page number: </label>
        <input
          className="input"
          name="endPage"
          type="number"
          value={endPage}
          onChange={handleChange}
        />
      </div>
      <div className="py-3">
        <input className="button is-link" type="submit" value="Calculate" />
      </div>
    </form>
  );
}
