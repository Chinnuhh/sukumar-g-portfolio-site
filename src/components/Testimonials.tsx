
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Testimonials</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center">
            <Quote className="h-12 w-12 text-blue-300 mx-auto mb-6" />
            <p className="text-lg text-slate-600 italic mb-4">
              "Professional references and testimonials will be displayed here upon request."
            </p>
            <p className="text-slate-500">
              Available upon request for potential employers and collaborators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
