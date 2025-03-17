import { useState } from 'react';
import loginImg from '../assets/loginImg.png';
import { Input } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import {loginAPI} from '../utils/API'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validPassword = (password: string) => {
    return password.length >= 6;
  };

   const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    if (!validEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    if (!validPassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    try{
        const response = await loginAPI(email, password)
        console.log("Login Successful" , response);
        
        localStorage.setItem("token" , JSON.stringify({
          "token" : response.result.accessToken,
          name: email.split("@")[0]
        }))

       navigate("/home"); 
    }
    catch(err){
      console.log('Login Failed', err);
      throw err;
    }
  };

  return (
    <div className='h-screen w-full flex items-center justify-center bg-[#ADADAD]'>
      <div className='hidden md:flex bg-white w-[22rem] h-[24.4rem] rounded-l-[21px] flex-col justify-center items-center gap-[20px] drop-shadow-xl'>
        <img src={loginImg} alt="Online BookStore Application" className='h-[245px] w-[245px] rounded-[50%]' />
        <h2 className='font-[700] p-[25px] font-sans'>ONLINE BOOK SHOPPING</h2>
      </div>

      <div className='w-full md:w-[24.3rem] h-[26.5rem] bg-white rounded-[8px] drop-shadow-xl flex flex-col items-center justify-center'>
        <div className='flex flex-col w-[75%] h-[89%] items-center gap-5'>
          <div className='flex justify-between w-[100%]'>
            <div className='flex flex-col items-center'>
              <h2 className='text-[25px]'>LOGIN</h2>
              <div className='w-[22px] h-[5px] bg-[#A03037] rounded-[4px]'></div>
            </div>
            <NavLink to={'/signup'}>
              <h2 className='text-[25px] text-[#878787] cursor-pointer'>SIGNUP</h2>
            </NavLink>
          </div>

          <div className='flex flex-col gap-y-[16px] w-[100%] h-[100%]'>

            <div className='flex flex-col text-left w-[100%]'>
              <h6 className='text-[12px]'>Email Id</h6>
              <Input
                className='w-[100%]'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className='text-red-500 text-[12px]'>{emailError}</p>}
            </div>

            <div className='flex flex-col text-left w-[100%]'>
              <h6 className='text-[12px]'>Password</h6>
              <Input.Password
                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className='text-red-500 text-[12px]'>{passwordError}</p>}
              <h6 className='text-[12px] text-[#9D9D9D] text-right gap-y-[10px] cursor-pointer'>
                Forgot Password?
              </h6>
            </div>

            <button
              onClick={handleLogin}
              className='w-[100%] h-[40px] bg-[#A03037] text-white rounded-[3px] cursor-pointer hover:bg-[#801F28]'
            >
              Login
            </button>

            <div className='flex gap-x-[20px] justify-center items-center w-[100%]'>
              <div className='w-[30%] border border-[#ADADAD]-100 opacity-20'></div>
              <h2>OR</h2>
              <div className='w-[30%] border border-[#ADADAD]-100 opacity-20'></div>
            </div>

            <div className='flex gap-x-3 items-center justify-center'>
              <button className='bg-[#4266B2] text-white rounded-[3px] w-[45%] h-[40px] cursor-pointer hover:bg-[#365499]'>
                Facebook
              </button>
              <button className='bg-[#F5F5F5] text-black rounded-[3px] w-[45%] h-[40px] cursor-pointer hover:bg-[#E0E0E0]'>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
