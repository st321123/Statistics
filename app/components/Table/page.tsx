"use client"
import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { TableDemo } from "./Table";

export default function Tables  ()
{
  const [data,setData]:any = useState({});
  const [logg,setLogg]:any = useState({});
  const [userName,setUserName]:any = useState("");


  useEffect(() => {
  
    const userNames = typeof window !== "undefined" ? localStorage.getItem("user") : "";
    const imgLInk:any = localStorage.getItem("imgLink");
    const logg = JSON.parse(imgLInk);
    const  dat:any  = localStorage.getItem("userStats");
    const data = JSON.parse(dat);

   
    
    setUserName(userNames);
    setData(data);
    setLogg(logg);
  }, []);

  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar userName={userName} logg ={logg} setLogg={setLogg} setData={setData} setUserName = {setUserName}/>

    {/* Main Content */}
    <main className="flex-grow">
    <TableDemo />
    </main>

    {/* Footer */}
    <Footer />
  </div>
 
  )
}