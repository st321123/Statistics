"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TableDemo() {
  const [invoices, setInvoices]: any = useState([]);
  const [userName, setUserName]: any = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const router = useRouter();

  useEffect(() => {
    const calll = async () => {
      try {
        const dat: any = localStorage.getItem("userStats");
        const data = JSON.parse(dat);
        const userName = localStorage.getItem("user");
        setUserName(userName);

        
        setInvoices(data.recentSubmissions);
      } catch {
        toast.error("Internal Server error, Please reload...");
      }
    };
    calll();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = invoices.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Recent Submissions
      </h1>
      <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <TableCaption className="text-gray-500">
          A list of your recent submissions.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[150px] px-4 py-2">Date</TableHead>
            <TableHead className="px-4 py-2">Title</TableHead>
            <TableHead className="px-4 py-2">Status</TableHead>
            <TableHead className="text-right px-4 py-2">Language</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.length > 0 ? (
            currentItems.map((invoice: any) => (
              <TableRow key={invoice.timestamp} className="hover:bg-gray-50">
                <TableCell className="px-4 py-2">
                  {new Date(invoice.timestamp * 1000).toLocaleDateString()}
                </TableCell>
                <TableCell className="px-4 py-2 font-medium">
                  {invoice.title}
                </TableCell>
                <TableCell className="px-4 py-2">{invoice.statusDisplay}</TableCell>
                <TableCell className="text-right px-4 py-2">{invoice.lang}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center text-gray-500 py-4"
              >
                No submissions found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 space-y-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        <span className="text-sm">
          Page <span className="font-semibold">{currentPage}</span> of{" "}
          <span className="font-semibold">{totalPages}</span>
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2"
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
