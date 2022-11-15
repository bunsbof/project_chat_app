import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const postDetails = (pics) => {
    setLoading(true);
    console.log(pics);
    if (pics === undefined) {
      toast({
        title: "Please select an Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "do28v4lkm");
      fetch("https://api.cloudinary.com/v1_1/do28v4lkm/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select an Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setLoading(false);
      return;
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      toast({
        title: "Registration Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setLoading(false);
    }
  };

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
          id="file"
          type="file"
          appcept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
          className="bg-[#eee] border-none py-[12px] px-[15px] my-[8px] mx-0 w-[100%]"
        />
        <label htmlFor="file" className="forfile">
          Choose a Photo
        </label>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          className="bg-[#eee] border-none py-[12px] px-[15px] my-[8px] mx-0 w-[100%]"

        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#eee] border-none py-[12px] px-[15px] my-[8px] mx-0 w-[100%]"

        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#eee] border-none py-[12px] px-[15px] my-[8px] mx-0 w-[100%]"

        />
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-[#eee] border-none py-[12px] px-[15px] my-[8px] mx-0 w-[100%]"

        />
        <button type="submit" className="rounded-[20px] border-solid border-2 border-[#ff4b2b] bg-[#ff4b2b] text-[#ffffff] text-12 font-bold py-[12px] px-[45px] tracking-[1px] uppercase ease-in duration-300 active:scale-[0.95]">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
