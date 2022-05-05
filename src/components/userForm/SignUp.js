import React, { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const inputNameChangeHandler = (e) => {
    // const fName = e.target.value;

    console.log(e.target.value);
    setFullName(e.target.value);
  };
  const inputMobileNoChangeHandler = (e) => {
    console.log(e.target.value);
    setMobileNo(e.target.value);
  };
  const inputEmailChangeHandler = (e) => {
    console.log(e.target.value);
    setEmailId(e.target.value);
  };
  const inputPassword1ChangeHandler = (e) => {
    console.log(e.target.value);
    setPassword1(e.target.value);
  };
  const inputPassword2ChangeHandler = (e) => {
    console.log(e.target.value);
    setPassword2(e.target.value);
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Your Full Name"
            value={fullName}
            onChange={inputNameChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile No:</label>
          <input
            type="text"
            className="form-control"
            id="inputMobileNo"
            placeholder="Enter Your Mobile No"
            value={mobileNo}
            onChange={inputMobileNoChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address:</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter Your Email Id"
            value={emailId}
            onChange={inputEmailChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword1"
            placeholder="Enter Your Password"
            value={password1}
            onChange={inputPassword1ChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Confirm Your Password"
            value={password2}
            onChange={inputPassword2ChangeHandler}
          />
        </div>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <button type="submit" className="btn btn-primary">
            Sugn-Up
          </button>
          <button type="reset" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
