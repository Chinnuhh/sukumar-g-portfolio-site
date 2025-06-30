
import { Shield, Users, Server } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Legacy Software Decommissioning",
      description: "Led the security-focused decommissioning of legacy software from 600+ devices across the enterprise, improving system security posture and reducing attack surface.",
      icon: Shield,
      technologies: ["Windows Server", "Security Assessment", "System Migration"]
    },
    {
      title: "MFA & Access Management Implementation",
      description: "Implemented comprehensive Multi-Factor Authentication and streamlined access management using Azure AD (Entra ID), enhancing organizational security while improving user experience.",
      icon: Users,
      technologies: ["Azure AD (Entra ID)", "MFA", "Access Management", "Security Policies"]
    },
    {
      title: "Enterprise System Optimization",
      description: "Conducted systematic optimization of enterprise IT systems, resulting in improved performance, reduced downtime, and enhanced user productivity across multiple departments.",
      icon: Server,
      technologies: ["VMware", "System Administration", "Performance Tuning", "ServiceNow"]
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Key Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
