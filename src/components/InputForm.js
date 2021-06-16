import React, { useState } from "react";

export default function InputForm({ handleFieldValues }) {
  const [formValues, setFormValues] = useState({
    startPage: 1,
    endPage: 1,
    pageCount: 16,
  });

  const { startPage, endPage, pageCount } = formValues;

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: +e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`formValues`, formValues);
    handleFieldValues(startPage, endPage, pageCount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control mb-5">
        <label>Start page number: </label>
        <input
          className="input"
          name="startPage"
          type="number"
          value={startPage}
          onChange={handleChange}
        />
      </div>
      <div className="control mb-5">
        <label>End page number: </label>
        <input
          className="input"
          name="endPage"
          type="number"
          value={endPage}
          onChange={handleChange}
        />
      </div>
      <div className="control mb-5">
        <label style={{ lineHeight: "34px" }}>
          Number of pages per signature:{" "}
        </label>
        <div className="select">
          <select name="pageCount" onChange={handleChange}>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
      <div className="py-3">
        <input className="button is-link" type="submit" value="Calculate" />
      </div>
    </form>
  );
}
