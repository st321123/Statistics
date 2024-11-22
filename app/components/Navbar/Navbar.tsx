"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { DropdownMenuDemo } from "../DropDown/DropDown";

export function Navbar({logg,userName,setData,setUserName,setLogg}:any) {
  
   const router = useRouter();
  const url = `https://leetcode.com/u/${userName}/`;
  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section - Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-300 font-medium">
            Home
          </Link>
          {logg &&   <Link
            href="/components/Table"
            className="hover:text-gray-300 font-medium"
          >
            Submissions
          </Link>
}
          {logg &&    <Link
            href="/components/Stats"
            className="hover:text-gray-300 font-medium"
          >
            Card
          </Link>}
        </div>
        <div  className="hover:text-gray-300 font-medium flex justify-center items-center">
          
          <div className="mr-2 ">
            <a href = {url}
              target="_blank"
            rel="noopener noreferrer" >
            {userName}
            </a>
          </div>
       
   
       {logg &&  <Avatar className="w-20 h-20 rounded-full overflow-hidden ml-4">
              <AvatarImage
                src={logg.avatar}
                alt="User Avatar"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>}
           {userName && <Button  className="hover:text-gray-300 font-medium ml-4" onClick= {()=>{
              localStorage.removeItem("user")
              localStorage.removeItem("imgLink")
              localStorage.removeItem("userStats")
              setData({})
              setLogg({})
              setUserName("")
              router.push("/")
            }}>
        Logout
       </Button> } 
            </div> 
       {/* <DropdownMenuDemo /> */}
       
      </div>
    </nav>
  );
}
