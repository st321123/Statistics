"use client"
import { RecoilRoot } from "recoil";
import { SearchCard } from "./SearchCard";

export   function Card({logg,userName,setData,setUserName,setLogg}:any){
  
    // https://alfa-leetcode-api.onrender.com/shubham_tewari/Contest
    return(
    <RecoilRoot>
    <div>
     <SearchCard userName={userName} logg ={logg} setLogg={setLogg} setData={setData} setUserName = {setUserName} />
    </div>
    </RecoilRoot>)

}
