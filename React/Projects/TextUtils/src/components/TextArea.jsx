import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#001627",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            value={text}
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#022947",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>

          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpperClick}
          >
            Convert to Uppercase
          </button>

          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowerClick}
          >
            Convert to Lowercase
          </button>

          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#001627",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text : "Enter text to preview it here"}</p>
      </div>
    </>
  );
}
