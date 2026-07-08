import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("Enter text here");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          onChange={handleOnChange}
          value={text}
          rows="8"
        ></textarea>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpperClick}
        >
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}
