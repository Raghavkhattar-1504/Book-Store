import  { useState } from "react";
import loginImg from "../assets/loginImg.png";
import { Input } from "antd";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const validFullName = (name : string) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name) && name.trim().length > 0;
  };

  const validEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validPassword = (password: string) => {
    return password.length >= 6;
  };

  const validMobileNumber = (number: string) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const handleSignup = () => {
    setErrors({
      fullName: "",
      email: "",
      password: "",
      mobileNumber: "",
    });

    let hasError:boolean = false;

    if (!validFullName(fullName)) {
      setErrors((prev) => ({
        ...prev,
        fullName: "Please enter a valid full name.",
      }));
      hasError = true;
    }

    if (!validEmail(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      hasError = true;
    }

    if (!validPassword(password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
      hasError = true;
    }

    if (!validMobileNumber(mobileNumber)) {
      setErrors((prev) => ({
        ...prev,
        mobileNumber: "Please enter a valid 10-digit mobile number.",
      }));
      hasError = true;
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#ADADAD]">
      <div className="hidden md:flex bg-white w-[22rem] h-[24.4rem] rounded-l-[21px] justify-center items-center flex-col gap-[20px] drop-shadow-xl">
        <img
          src={loginImg}
          alt="Online BookStore Application"
          className="h-[245px] w-[245px] rounded-[50%]"
        />
        <h2 className="font-[700] p-[25px] font-sans">ONLINE BOOK SHOPPING</h2>
      </div>

      <div className="w-full md:w-[24.3rem] h-[26.5rem] bg-white rounded-[8px] drop-shadow-xl flex flex-col items-center justify-center">
        <div className="flex flex-col w-[75%] h-[85%] items-center gap-5">
          <div className="flex justify-between w-[100%]">
            <NavLink to="/">
              <h2 className="text-[25px] text-[#878787] cursor-pointer">LOGIN</h2>
            </NavLink>
            <div className="flex flex-col items-center">
              <h2 className="text-[25px] cursor-pointer">SIGNUP</h2>
              <div className="w-[22px] h-[5px] bg-[#A03037] rounded-[4px]"></div>
            </div>
          </div>

          <div className="flex flex-col gap-y-[10px] w-[100%] h-[100%]">
            <div className="flex flex-col text-left w-[100%]">
              <h6
                className={`text-[12px] ${errors.fullName ? "text-red-500" : "text-black"}`}
              >
                {errors.fullName || "Full Name"}
              </h6>
              <Input
                className="w-[100%]"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-left w-[100%]">
              <h6
                className={`text-[12px] ${errors.email ? "text-red-500" : "text-black"}`}
              >
                {errors.email || "Email Id"}
              </h6>
              <Input
                className="w-[100%]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            <div className="flex flex-col text-left w-[100%]">
              <h6
                className={`text-[12px] ${errors.password ? "text-red-500" : "text-black"}`}
              >
                {errors.password || "Password"}
              </h6>
              <Input.Password
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-left w-[100%]">
              <h6
                className={`text-[12px] ${errors.mobileNumber ? "text-red-500" : "text-black"}`}
              >
                {errors.mobileNumber || "Mobile Number"}
              </h6>
              <Input
                className="w-[100%] gap-y-[10%]"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="gap-y-[10px] w-[100%] flex flex-col">
            <button
              className="w-[100%] h-[40px] bg-[#A03037] text-white rounded-[3px] cursor-pointer hover:bg-[#801F28]"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;