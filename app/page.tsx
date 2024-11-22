"use client"
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

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
  }, []);

  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar userName={userName} logg ={logg} setLogg={setLogg} setData={setData} setUserName = {setUserName}/>

      {/* Main Content */}
      <main className="flex-grow justify-center flex items-center">
        <Card userName={userName} logg ={logg} setLogg={setLogg} setData={setData} setUserName = {setUserName}/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
