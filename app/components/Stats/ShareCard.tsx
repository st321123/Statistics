"use client"
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { StatsCard } from "./StatsCard";
import { Button } from "@/components/ui/button";

export default function ShareCard() {
  const router = useRouter();
  const [stats, setStats]: any = useState({});
  const [copied, setCopied] = useState(false);

  const userName = typeof window !== "undefined" ? localStorage.getItem("user") : "";
  const imgLInk:any = localStorage.getItem("imgLink");
  const logg = JSON.parse(imgLInk);
  const  dat:any  = localStorage.getItem("userStats");
  const data = JSON.parse(dat);
  


  // Redirect if no username
  useEffect(() => {
    if (!userName) {
      router.push("/");
    }
  }, [userName, router]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
       
      
        
        setStats(data);
      } catch (error) {
        toast.error("Failed to fetch stats. Try again!");
      }
    };

    fetchStats();
  }, [userName]);

  // Animation for card
  const cardSpring = useSpring({
    transform: "scale(1)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    from: { transform: "scale(0.95)", boxShadow: "0 0px 0px rgba(0, 0, 0, 0)" },
    config: { tension: 200, friction: 15 },
  });

  // Animation for stats
  const statSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 170, friction: 20 },
  });

  // Share logic
  const handleShare = async () => {
    const shareData = {
      title: `${userName}'s LeetCode Stats`,
      text: `Check out my LeetCode progress!\n\nRanking: ${stats.ranking}\nTotal Solved: ${stats.totalSolved}\nStreak: ${stats.streak}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Stats shared successfully!");
      } catch (error) {
        toast.error("Share cancelled.");
      }
    } else {
      navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <animated.div
        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
        style={cardSpring}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{userName || "User Stats"}</h3>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <span role="img" aria-label="share">
              🔗
            </span>
          </Button>
        </div>

        {/* Stats Section */}
        <animated.div style={statSpring}>
          <div className="flex flex-col items-center mb-4">
            <Avatar className="w-20 h-20 rounded-full overflow-hidden">
              <AvatarImage
                src={logg.avatar}
                alt="User Avatar"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500">Ranking:</p>
              <p className="text-lg font-semibold text-gray-900">{stats.ranking || "N/A"}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <StatsCard marks={stats.easySolved} totalMarks={stats.totalEasy} level="easy" />
            <StatsCard marks={stats.mediumSolved} totalMarks={stats.totalMedium} level="medium" />
            <StatsCard marks={stats.hardSolved} totalMarks={stats.totalHard} level="hard" />
          </div>
        </animated.div>

        {/* Footer Section */}
        <div className="mt-6">
          <Button className="w-full" onClick={handleShare}>
            Share Your Stats
          </Button>
        </div>
      </animated.div>
    </div>
  );
}
