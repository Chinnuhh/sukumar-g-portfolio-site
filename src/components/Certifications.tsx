
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "ITIL® Foundation",
      status: "In Progress",
      description: "IT Service Management best practices and framework"
    },
    {
      name: "Microsoft Azure Fundamentals",
      status: "Planned",
      description: "Core Azure services, solutions, and management tools"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Certifications</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-slate-900">{cert.name}</h3>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-2">Status: {cert.status}</p>
                <p className="text-slate-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
