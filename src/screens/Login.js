import React, { useEffect, useState } from "react";

import {
  // connect,
  useDispatch,
} from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/logo-white.svg";

import { userInfo } from "../redux/AuthSlice";
import { Button } from "antd";

export const Login = () => {
  const dispatch = useDispatch();

  const [isLoad, setisLoad] = useState(true);

  const [userCred, setUserCred] = useState({
    email: "admin.gvb@yopmail.com",
    password: "123456",
  });

  useEffect(() => {
    setTimeout(() => {
      setisLoad(false);
    }, 500);

    document.body.classList.remove("theme-cyan");
    document.body.classList.remove("theme-purple");
    document.body.classList.remove("theme-blue");
    document.body.classList.remove("theme-green");
    document.body.classList.remove("theme-orange");
    document.body.classList.remove("theme-blush");
  }, []);

  const handleChange = (event) => {
    setUserCred({ ...userCred, [event.target.name]: event.target.value });
  };

  const hadnleSubmit = (event) => {
    event.preventDefault();

    dispatch(userInfo(userCred));
  };

  return (
    <div className="theme-cyan">
      <div
        className="page-loader-wrapper"
        style={{ display: isLoad ? "block" : "none" }}
      >
        <div className="loader">
          <div className="m-t-30">
            <img
              src={require("../assets/images/logo-icon.svg")}
              width="48"
              height="48"
              alt="Lucid"
            />
          </div>
          <p>Please wait...</p>
        </div>
      </div>
      <div className="hide-border">
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="top">
                <img
                  src={Logo}
                  alt="Lucid"
                  style={{ height: "40px", margin: "10px" }}
                />
              </div>
              <div className="card">
                <div className="header">
                  <p className="lead">Login to your account</p>
                </div>
                <div className="body">
                  <div className="form-auth-small" action="index.html">
                    <div className="form-group">
                      <label htmlFor="email" className="control-label sr-only">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="signin-email"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={userCred.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="control-label sr-only"
                      >
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="signin-password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={userCred.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group clearfix">
                      <label className="fancy-checkbox element-left">
                        <input type="checkbox" />
                        <span>Remember me</span>
                      </label>
                    </div>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      href="mypage"
                    >
                      Login
                    </a>
                    <div className="bottom">
                      <span className="helper-text m-b-10">
                        <i className="fa fa-lock"></i>{" "}
                        <a href={`${process.env.PUBLIC_URL}/forgotpassword`}>
                          Forgot password?
                        </a>
                      </span>
                      <span>
                        Don't have an account?{" "}
                        <a href="registration">Register</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
