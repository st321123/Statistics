"use client"
// import {  useEffect, useState} from "react"
import axios from "axios"
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"






export  function SearchCard({logg,userName,setData,setUserName,setLogg}:any) {

  
 

    const  datresponse = async()=>
      {   
          
          try{
          const data = await axios.get(`https://alfa-leetcode-api.onrender.com/userProfile/${userName}`);
          const userLink = await axios.get(`https://alfa-leetcode-api.onrender.com/${userName}`);
          
            
          localStorage.setItem("userStats", JSON.stringify(data.data));
          localStorage.setItem("imgLink", JSON.stringify(userLink.data));
          

          
          if(Object.keys(data.data).length != 0 && data.data.errors === undefined)
          {
            toast.success("User found ");
            setUserName(userName);
            localStorage.setItem("user",userName);
            const imgLInk:any = localStorage.getItem("imgLink");
            const logg = JSON.parse(imgLInk);
            const  dat:any  = localStorage.getItem("userStats");
            const data = JSON.parse(dat);
            // setSubmissions(data.data.recentSubmissions)
           
            setData(data);
            setLogg(logg);
          }
          else
          {
            toast.error("No user found ");
            localStorage.removeItem("user");
            localStorage.removeItem("userStats");
            localStorage.removeItem("imgLink");
           
          }
         
          }
          catch(err)
          {
              toast.error("Internal server error")
              setData({});
          
              
          }
       
        
      }
  
     
    // if(loading)
    // {
    //   return <div>Loading.... </div>
    // }
    
  return (
    <div>
      
    <Card className="w-[350px] flex flex-col">
      <CardHeader>
        <CardTitle>Type user name for details</CardTitle>
        <CardDescription>Find your new stats in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User name</Label>
              <Input id="name" placeholder="Name of website" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Wesbite Name</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Leetcode</SelectItem>
                  {/* <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={datresponse}>Search</Button>
      </CardFooter>
      <Toaster />
    </Card>
    
    
      </div>
  )
}
