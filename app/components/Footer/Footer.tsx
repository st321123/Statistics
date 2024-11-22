export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shubham Tewari
          </p>
          <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/shubham-tewari-97336b24b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/st321123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 font-medium"
          >
            GitHub
          </a>
          <a
            href="https://portfolio-new-theta-ruddy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 font-medium"
          >
            Portfolio
          </a>
        </div>

        
        </div>
        
     
      </footer>
    );
  }
  