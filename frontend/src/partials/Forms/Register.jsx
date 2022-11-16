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
      <form
        onSubmit={registerHandler}
        className="bg-white flex item-center justify-center flex-col py-0 px-[50px] h-full text-center"
      >
        <h1 className="font-bold my-px text-3xl">Create Account</h1>
        <div className="my-5 mx-0 flex flex-row items-center justify-around">
          <a className="text-[#333] font-sm no-underline border-1 border-solid border-socialBtn rounded-circle inline-flex justify-center items-center my-0 mx-1.4 h-10 w-10">
            <TfiFacebook />
          </a>
          <a className="text-[#333] font-sm no-underline border-1 border-solid border-socialBtn rounded-circle inline-flex justify-center items-center my-0 mx-1.4 h-10 w-10">
            <TfiGoogle />
          </a>
          <a className="text-[#333] font-sm no-underline border-1 border-solid border-socialBtn rounded-circle inline-flex justify-center items-center my-0 mx-1.4 h-10 w-10">
            <TfiLinkedin />
          </a>
        </div>
        <input
          id="file"
          type="file"
          appcept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="file" className="forfile">
          Choose a Photo
        </label>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-loginBtn border-1 border-solid border-btnBorder bg-loginBtn text-white text-xs font-bold py-3 px-11 tracking-[1px] uppercase active:scale-95 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Register;
