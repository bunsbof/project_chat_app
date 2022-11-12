import React, { useState, useEffect } from "react";
import axios from "axios";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";
import {useToast} from '@chakra-ui/react'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false)
  const toast = useToast();

  const postPic = (pics) => {
    setLoading(true)
    if(pic === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
    }
  };

  const registerHandler = () => {};
  return (
    <>
      <form onSubmit={registerHandler}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a className="social">
            <TfiFacebook />
          </a>
          <a className="social">
            <TfiGoogle />
          </a>
          <a className="social">
            <TfiLinkedin />
          </a>
        </div>
        <input
          value={pic}
          id="file"
          type="file"
          appcept="image/*"
          onChange={(e) => setPassword(e.target.files[0])}
        />
        <label htmlFor="file" className="forfile">
          Choose a Photo
        </label>
        <input
          value={username}
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={confirmPassword}
          type="password"
          placeholder="Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
