
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Cloud & Identity Management",
      skills: ["Microsoft 365", "Azure AD (Entra ID)", "Microsoft Intune", "Multi-Factor Authentication"]
    },
    {
      category: "Infrastructure & Virtualization",
      skills: ["Windows Server", "VMware", "DNS/DHCP", "System Administration"]
    },
    {
      category: "Networking & Security",
      skills: ["TCP/IP", "Cisco DNAC", "Network Administration", "Security Implementation"]
    },
    {
      category: "Service Management",
      skills: ["ServiceNow", "IT Service Delivery", "System Optimization", "Technical Support"]
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Skills & Tools</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
