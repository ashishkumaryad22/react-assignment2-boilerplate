import React, { useState } from "react";
import NewsService from "../../services/News.service";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem("loggedIn", false);
  const history = useHistory();

  const userNameChangeHandler = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(userName);
    console.log(password);
    const userData = {
      username: userName,
      password: password,
    };

    NewsService.login(userData)
      .then((res) => {
        // console.log(res.data.token);
        localStorage.setItem("token", res.data.token);

        NewsService.auth(res.data.token)
          .then((res) => {
            console.log(res.data.isAuthenticated);
            localStorage.setItem("loggedIn", true);
            history.replace("/general");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container my-3">
        <form>
          <div className=" mb-3">
            <label className="form-label">User Name:</label>
            <input
              type="userName"
              className="form-control"
              id="userName"
              placeholder="Enter Your User Name"
              value={userName}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              Log-In
            </button>
            <button type="reset" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
