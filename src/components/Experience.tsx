
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "ICT Systems Analyst",
      company: "Anglo American",
      period: "Aug 2023 – Present",
      location: "Brisbane, Australia",
      description: "Leading enterprise IT system administration and optimization initiatives. Managing Microsoft 365 ecosystem, Azure AD implementations, and security enhancements across the organization."
    },
    {
      title: "Systems Engineer (Contract)",
      company: "FirstPoint IT",
      period: "Feb 2023 – Aug 2023",
      location: "Brisbane, Australia",
      description: "Provided specialized systems engineering services focusing on infrastructure design, implementation, and maintenance. Worked with various enterprise clients on system optimization projects."
    },
    {
      title: "Software Consultant",
      company: "Centium Software",
      period: "Aug 2022 – Feb 2023",
      location: "Brisbane, Australia",
      description: "Delivered technical consulting services for software implementation and system integration projects. Collaborated with development teams on enterprise software solutions."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 pb-8 border-b border-slate-200 last:border-b-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-slate-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
