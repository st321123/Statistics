"use client";

import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar({ logg, userName, setData, setUserName, setLogg }: any) {
  const router = useRouter();
  const url = `https://leetcode.com/u/${userName}/`;

  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-4 text-sm">
          <Link href="/" className="hover:text-gray-300 font-medium">
            Home
          </Link>
          {logg && (
            <Link
              href="/components/Table"
              className="hover:text-gray-300 font-medium"
            >
              Submissions
            </Link>
          )}
          {logg && (
            <Link
              href="/components/Stats"
              className="hover:text-gray-300 font-medium"
            >
              Card
            </Link>
          )}
        </div>

        {/* User Avatar and Dropdown */}
        <div className="flex items-center">
          {logg && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                  <AvatarImage
                    src={logg.avatar}
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-700 text-white w-40">
                <DropdownMenuItem>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-sm hover:text-gray-300"
                  >
                    {userName}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    className="w-full text-left text-sm hover:text-gray-300"
                    onClick={() => {
                      localStorage.removeItem("user");
                      localStorage.removeItem("imgLink");
                      localStorage.removeItem("userStats");
                      setData({});
                      setLogg({});
                      setUserName("");
                      router.push("/");
                    }}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}
