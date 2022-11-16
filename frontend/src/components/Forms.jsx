import React, { useState } from "react";
import "../partials/Forms/style.css";
import { Login, Register } from "../partials/Forms";

const Forms = () => {
  const [form, setForm] = useState(true);
  return (
    <div className="flex items-center flex-col">
      <h2 className="text-center ">
        Weekly Coding Challenge #1: Sign in/up Form
      </h2>
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
              <h1 className="font-bold my-px text-3xl">Welcome Back!</h1>
              <p className="text-[14px]  font-thin leading-5 tracking-[0.5px] mt-[20px] mx-0 mb-[30px]">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="rounded-loginBtn border-1 border-solid border-ghost bg-transparent text-white text-xs font-bold py-3 px-11 tracking-[1px] uppercase active:scale-95 focus:outline-none"
                id="signIn"
                onClick={() => setForm((prev) => !prev)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-bold my-px text-3xl">Hello, Friend!</h1>
              <p className="text-[14px]  font-thin leading-5 tracking-[0.5px] mt-[20px] mx-0 mb-[30px]">
                Enter your personal details and start journey with us
              </p>
              <button
                className="rounded-loginBtn border-1 border-solid border-ghost bg-transparent text-white text-xs font-bold py-3 px-11 tracking-[1px] uppercase active:scale-95 focus:outline-none"
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
