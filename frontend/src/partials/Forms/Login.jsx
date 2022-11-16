import React, { useState, useEffect } from "react";
import axios from "axios";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault()
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      // console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={loginHandler} className="bg-white flex item-center justify-center flex-col py-0 px-[50px] h-full text-center">
        <h1 className="font-bold my-px text-3xl">Sign in</h1>
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
        <a className="text-[#333] font-sm no-underline my-4 mx-0">Forgot your password?</a>
        <button type="submit" className="rounded-loginBtn border-1 border-solid border-btnBorder bg-loginBtn text-white text-xs font-bold py-3 px-11 tracking-[1px] uppercase active:scale-95 focus:outline-none">Sign In</button>
      </form>
    </>
  );
};

export default Login;
