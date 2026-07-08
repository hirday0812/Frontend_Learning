import React, { useState } from "react";

export default function About(props) {
  const [styles, setStyles] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#001627",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>About TextUtils</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#001627",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                What I Learnt
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#001627",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <strong>This is my first React Project.</strong>
                I learnt the basics of react, components, props, state and usestate, bootstrap, features like dark mode using logic building.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#001627",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                About Me
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#001627",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <strong>I am Hirday Singh from IILM University currently pursuing Btech CSE and trying my hands on programming and web development</strong><br />
                
                My Github link : <code>https://github.com/hirday0812</code> <br />
                My LinkedIn : <code>www.linkedin.com/in/hirday-singh</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
