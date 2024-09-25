import React from 'react'
import { IoHome } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';

function HomeIcon() {
    const navigate = useNavigate();
    const location = useLocation();
    if(location.pathname === "/") return;
  return (
    <IoHome className="absolute z-50 text-[#f2f2f2] left-7 top-5 cursor-pointer hover:text-[#edecec]" onClick={() => navigate("/")}/>
  )
}

export default HomeIcon
