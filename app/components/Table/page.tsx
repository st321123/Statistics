
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { TableDemo } from "./Table";

export default function  ()
{
   
    
   return (
    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main className="flex-grow">
    <TableDemo />
    </main>

    {/* Footer */}
    <Footer />
  </div>
 
  )
}