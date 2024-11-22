"use client"
import { RecoilRoot } from "recoil";
import { SearchCard } from "./SearchCard";

export   function Card(){
  
    // https://alfa-leetcode-api.onrender.com/shubham_tewari/Contest
    return(
    <RecoilRoot>
    <div>
     <SearchCard />
    </div>
    </RecoilRoot>)

}