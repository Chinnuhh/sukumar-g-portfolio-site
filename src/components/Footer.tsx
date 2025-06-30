
import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Sukumar Gajulapalli</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            ICT Systems Analyst specializing in enterprise IT solutions, 
            system optimization, and technical leadership.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <a 
              href="mailto:sukumar.gajulapalli@gmail.com"
              className="flex items-center text-slate-300 hover:text-blue-300 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              sukumar.gajulapalli@gmail.com
            </a>
            <a 
              href="tel:+61449985699"
              className="flex items-center text-slate-300 hover:text-blue-300 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              +61 449 985 699
            </a>
            <a 
              href="https://au.linkedin.com/in/sukumarreddygajulapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-300 hover:text-blue-300 transition-colors"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Sukumar Gajulapalli. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
