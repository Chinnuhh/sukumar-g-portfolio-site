
import { Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Sukumar Gajulapalli
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-300 mb-6 font-medium">
          ICT Systems Analyst | Anglo American
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Brisbane, Australia • 3+ Years Experience in Enterprise IT Environments
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-300 text-blue-300 hover:bg-blue-600 hover:text-white"
            onClick={() => window.open('https://au.linkedin.com/in/sukumarreddygajulapalli', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
