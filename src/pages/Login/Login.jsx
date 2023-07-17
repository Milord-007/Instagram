import React, { useEffect, useState } from "react";
import phones from "./img/phones.png";
import tel from "./img/tel.png";
import tel1 from "./img/tel1.png";
import tel2 from "./img/tel2.png";
import tel3 from "./img/tel3.png";
import logo from "./img/logo.png";
import google from "./img/google.png";
import links from "./img/links.png";

const Login = () => {
  const [emoil, setEmoil] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");

  setTimeout(() => {
    let arr = [tel, tel1, tel2, tel3];
    let a = Math.floor(Math.random() * arr.length);
     console.log(arr[a]);
     setPic(arr[a])
  
  }, 1000)
  return (
    <div className="bg-[#EFEFEF] py-[50px] dark:bg-[#000]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-1  gap-6 w-[80%] mx-auto">
          <div className="md:hidden lg:block relative">
            <img src={phones} alt="" className="md:hidden" />

            
          
            
            
            
            
            <img
              src={pic}
              alt=""
              className="absolute top-[28px] right-[124px] md:hidden"
            />
          </div>
          <div className="sm:w-[100%] dark:bg-[#000] ">
            <div className="bg-[white] py-[30px] m-auto dark:bg-[#262626] dark:text-white">
              <div className="w-[80%] m-auto">
                <div>
                  <img className="m-auto " src={logo} alt=""  />
                </div>
                {/* <p className='text-center text-[#8E8E8E] text-[20px]'> Sign up to see photos and videos of your friends. </p> */}
                <div className="mt-[15px]">
                  <div>
                    <input
                      value={emoil}
                      onChange={(event) => setEmoil(event.target.value)}
                      placeholder="Username, or mail"
                      className="outline-none pl-[20px] dark:bg-[#000] dark:border-none w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]"
                      type="text"
                    />
                  </div>
                  <div className="mt-[10px]">
                    <input
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Password"
                      className="outline-none dark:bg-[#000] dark:border-none  pl-[20px] w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]"
                      type="text"
                    />
                  </div>
                  <div className="mt-[20px]">
                    {(password.trim().length && emoil.trim().length) === 0 ? (
                      <button
                        disabled
                        className="w-[100%] py-[8px] rounded-[5px] dark:bg-[#323232] dark:border-none disabled:bg-stone-400 text-[white]"
                      >
                        {" "}
                        Sign Up{" "}
                      </button>
                    ) : (
                      <button className="w-[100%] py-[8px] rounded-[5px] bg-[#0095F6] text-[white]">
                        {" "}
                        Sign Up{" "}
                      </button>
                    )}
                  </div>
                  <p className="text-center mt-[15px]"> or </p>
                  <div className="relative flex items-center mt-[10px]">
                    <div className="absolute left-3  ">
                      <img src={google} alt="" />
                    </div>
                    <button className="bg-[#EFEFEF] dark:bg-[#000] dark:border-none border-2 w-[100%] py-[5px] rounded-[20px] ">
                      {" "}
                      Continue with google{" "}
                    </button>
                  </div>
                  <p className="text-[#0095F6] text-center mt-[20px]">
                    {" "}
                    You forgot the password?{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[white] dark:bg-[#262626] dark:text-white py-[30px] m-auto mt-[20px]">
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
      </div>
    </div>
  );
};

export default Login;
