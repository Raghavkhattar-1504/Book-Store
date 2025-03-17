import { useState } from "react";
import education from "../assets/education.svg";
import { User, ShoppingCart, Search, Wallet, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);

  const getTokenData = () => {
    try {
      const token = localStorage.getItem("token");
      return token ? JSON.parse(token) : {};
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      return {}; 
    }
  };

  const tokenData = getTokenData();
  const isLoggedIn = !!tokenData.name;

  return (
    <div className="sticky top-0 left-0 w-full z-500">
      <div className="w-full h-[60px] bg-[#A03037] flex items-center justify-center">
        <div className="flex items-center justify-between w-[70%] max-[450px]:w-full h-full gap-[10px]">
          <div className="flex w-[60%] justify-between">
            <div className="flex gap-3 items-center max-[500px]:!ml-2 cursor-pointer">
              <img src={education} alt="Bookstore Logo" />
              <h3 className="text-white text-[20px] max-[500px]:!mr-3">
                Bookstore
              </h3>
            </div>
            <div className="w-[75%] sm:w-[60%] lg:w-[75%] h-[40px] flex items-center gap-2 rounded-[3px] !pl-[5px] bg-white max-[500px]:hidden">
              <Search className="text-gray-500 w-4 h-4 !ml-1" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none px-2 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex h-full">
            <div
              className="m-[10px] w-[80px] max-[500px]:w-[60px] border-x-2 border-[#801F28] flex flex-col justify-center items-center cursor-pointer"
              onClick={() => setDropDown(!dropdown)}
            >
              <User className="text-white mx-[20px]" />
              <h6 className="text-[#FFFFFF] text-[12px]">Profile</h6>
            </div>
            <div className="m-[10px] w-[80px] max-[500px]:w-[60px] border-r-2 border-[#801F28] flex flex-col justify-center items-center cursor-pointer">
              <ShoppingCart className="text-white" />
              <h6 className="text-[#FFFFFF] text-[12px]">Cart</h6>
            </div>
          </div>
        </div>
      </div>

      {dropdown && (
        <div className="absolute top-[60px] right-10 bg-white shadow-md rounded-md p-4 w-[200px]">
          {isLoggedIn ? (
            <>
              <p className="text-[#0A0102] text-[18px]">Welcome, {tokenData.name}</p>
              <div className="w-full border border-gray-300 my-2"></div>
              <NavLink to="/profile" className="flex gap-2 text-gray-700 py-2 hover:bg-gray-100 px-3 rounded-md">
                <User className="h-5 w-5" />
                Profile
              </NavLink>
              <NavLink to="/wishlist" className="flex gap-2 text-gray-700 py-2 hover:bg-gray-100 px-3 rounded-md">
                <Heart className="h-5 w-5" />
                My Wishlist
              </NavLink>
              <NavLink to="/myorder" className="flex gap-2 text-gray-700 py-2 hover:bg-gray-100 px-3 rounded-md">
                <Wallet className="h-5 w-5" />
                My Orders
              </NavLink>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setDropDown(!dropdown);
                }}
                className="w-full mt-3 py-2 text-white bg-[#A03037] rounded-md hover:bg-[#B03A42] transition duration-300 "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <p className="text-[#0A0102] text-[18px]">Welcome, Guest</p>
              <p className="text-[#878787] text-[12px]">To access account and manage orders</p>
              <NavLink to={"/"}>
                <button className="w-full mt-2 py-2 text-[#A03037] border border-[#A03037] rounded-md hover:bg-[#B03A42] hover:text-white duration-300">
                  Login/Signup
                </button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
