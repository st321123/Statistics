"use client"

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import ShareCard from "./ShareCard";
// import { TableDemo } from "./Table";

export default function  ()
{
   
    
   return (
      <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
  
      {/* Main Content */}
      <main className="flex-grow">
      <ShareCard />

      </main>
  
      {/* Footer */}
      <Footer />
    </div>
      
     
  )
}