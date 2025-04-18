import React from 'react'
import { Stack,useMediaQuery } from '@mui/material';
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const _300 = useMediaQuery("(min-width:300px)");
  return (
  <>
    <Stack flexDirection={'row'} 
    maxWidth={"100%"} 
    justifyContent={"space-around"} 
    alignItems={"center"}> 
     <FiArrowLeft size={_300 ? 32 :  24} className='image-icon' color='black' />
      <Link to={"/"} className='link'  >
      <GoHome size={_300 ? 32 :  24} color='black' className='image-icon'/>
      </Link>
      <Link to={"/search"} className='link' >
      <IoIosSearch size={_300 ? 32 :  24} color='black' className='image-icon'/>
      </Link>
      
    
      <CiHeart size={_300 ? 32 :  24} color='black' className='image-icon'/>
      <Link to={'/profile/threads/1'} className='link'>
      <RxAvatar size={_300 ? 32 :  24} color='black' className='image-icon'/>
      </Link>
      
      
    </Stack>
  </>
  )
}

export default NavBar
