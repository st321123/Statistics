import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow justify-center flex items-center">
        <Card />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
