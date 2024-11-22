import { Skeleton } from "@/components/ui/skeleton"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"

export default function SkeletonDemo() {
  return (
    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main className="flex-grow">
    <div className="flex items-center space-x-4">
      
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    </main>

    {/* Footer */}
    <Footer />
  </div>
   
  )
}
