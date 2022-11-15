import React, { useState } from "react";
import "../partials/Forms/style.css";
import { Login, Register } from "../partials/Forms";

const Forms = () => {
  const [form, setForm] = useState(true);
  return (
    <div className="flex items-center flex-col">
      <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
      <div
        className={form ? "container" : "container right-panel-active"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <Register />
        </div>
        <div className="form-container sign-in-container">
          <Login />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="rounded-[20px] border-solid border-2 border-[#ffffff] bg-transparent text-[#ffffff] text-12 font-bold py-[12px] px-[45px] tracking-[1px] uppercase ease-in duration-2000 active:scale-[0.95]"
                id="signIn"
                onClick={() => setForm((prev) => !prev)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="rounded-[20px] border-solid border-2 border-[#ffffff] bg-transparent text-[#ffffff] text-12 font-bold py-[12px] px-[45px] tracking-[1px] uppercase ease-in duration-300 active:scale-[0.95]"
                id="signUp"
                onClick={() => setForm((prev) => !prev)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
