"use client"
import { useEffect, useState } from "react";
import { animated } from "react-spring";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { StatsCard } from "./StatsCard";


export default function ShareCard() {

  const [data,setData]:any = useState({});
  const [logg,setLogg]:any = useState({});
  const [userName,setUserName]:any = useState("");
  const router = useRouter();

 
 

 

  
  useEffect(() => {
  
    const userNames = typeof window !== "undefined" ? localStorage.getItem("user") : "";
 
    const imgLInk:any = localStorage.getItem("imgLink");
    const logg = JSON.parse(imgLInk);
    const  dat:any  = localStorage.getItem("userStats");
    const data = JSON.parse(dat);
    setUserName(userNames);
    setData(data);
    setLogg(logg);
  }, [userName]);

  

  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {data && 
      <animated.div
        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
      
      >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{userName || "User Stats"}</h3>
          
        </div>

        {/* Stats Section */}
        <animated.div >
          <div className="flex flex-col items-center mb-4">
          {logg &&  <Avatar className="w-20 h-20 rounded-full overflow-hidden">
              <AvatarImage
                src={logg.avatar}
                alt="User Avatar"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
              }
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500">Ranking:</p>
              <p className="text-lg font-semibold text-gray-900">{data.ranking || "N/A"}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <StatsCard marks={data.easySolved} totalMarks={data.totalEasy} level="easy" />
            <StatsCard marks={data.mediumSolved} totalMarks={data.totalMedium} level="medium" />
            <StatsCard marks={data.hardSolved} totalMarks={data.totalHard} level="hard" />
          </div>
        </animated.div>

       
      </animated.div>
}
    </div> 
            
  );
}
