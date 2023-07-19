import React, { useState } from "react";
import logo from "./img/logo.png";
import google from "./img/google.png";
import links from "./img/links.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [emoil, setEmoil] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emoil,
        password,
        name,
        username
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data) 
      localStorage.setItem("token", data.accessToken);
      navigate("/");
    }
  }

  return (
    <div className="bg-[#EFEFEF] py-[50px]">
      <div className="w-[40%] md:w-full mx-auto">
        <div className="bg-[white] py-[30px] md:w-[55%] xl:w-[32%] m-auto">
          <div className="w-[80%] mx-auto">
            <div>
              <img className="m-auto" src={logo} alt="" />
            </div>
            <p className="text-center text-[#8E8E8E] text-[20px]">
              {" "}
              Sign up to see photos and videos of your friends.{" "}
            </p>
            <div className="relative flex items-center mt-[10px]">
              <div className="absolute sm:left-4 md:left-[40px]">
                <img src={google} alt="" />
              </div>
              <button className="bg-[#EFEFEF] border-2 w-[100%] py-[5px] rounded-[20px] ">
                {" "}
                Continue with google{" "}
              </button>
            </div>
            <p className="text-center mt-[15px]"> or </p>
            <div className="mt-[15px]">
              <form
                action=""
                className="flex flex-col gap-y-5"
                onSubmit={handleSubmit}
              >
                <input
                  value={emoil}
                  onChange={(event) => setEmoil(event.target.value)}
                  placeholder="Email"
                  className="pl-[20px] outline-none  w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]"
                  required
                  type="text"
                />

                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Full name"
                  className="pl-[20px]  outline-none w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]"
                  required
                  type="text"
                />
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Username"
                  className=" outline-none pl-[20px] w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]"
                  required
                  type="text"
                />
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className=" outline-none pl-[20px] w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]"
                  required
                  type="text"
                />
                 {password.length>0 && password.length<6? <span className="text-[red]">Password is too short</span>: null}

                <button
                  type="submit"
                  className="w-[100%] py-[8px] rounded-[5px] bg-[#0095F6] text-[white]"
                >
                  {" "}
                  Sign Up{" "}
                </button>
              </form>
              <div></div>

              <p className="text-center text-[#8E8E8E] mt-[30px]">
                {" "}
                By signing up, you agree to our Terms, Data Policy and Cookies
                Policy.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[white] py-[30px] md:w-[55%]  xl:w-[32%] m-auto mt-[20px]">
          <div className="flex justify-center gap-[5px]">
            <p> You don’t have an account? </p>
            <p className="text-[#0095F6] font-bold"> Join </p>
          </div>
        </div>
        <p className="text-center mt-[20px] font-bold">
          {" "}
          Download the application.{" "}
        </p>
        <div>
          <img className="m-auto mt-[20px]" src={links} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
