"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DropdownMenuDemo } from "../DropDown/DropDown";

export function Navbar() {
  const userName = typeof window !== "undefined" ? localStorage.getItem("user") : "";
  const imgLInk:any = localStorage.getItem("imgLink");
  const logg = JSON.parse(imgLInk);
  const  dat:any  = localStorage.getItem("userStats");
  const data = JSON.parse(dat);
   const router = useRouter();
  useEffect(() => {
    if (!userName) {
      router.push("/");
    }
  }, [userName, router]);
  const url = `https://leetcode.com/u/${userName}/`;
  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section - Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-300 font-medium">
            Home
          </Link>
          <Link
            href="/components/Table"
            className="hover:text-gray-300 font-medium"
          >
            Submissions
          </Link>
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
            </div> 
       {/* <DropdownMenuDemo /> */}
      </div>
    </nav>
  );
}
