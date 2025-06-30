
const AboutMe = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I am a dedicated ICT Systems Analyst with over 3 years of experience in enterprise IT environments, 
            currently contributing to Anglo American's technology infrastructure. My expertise spans across 
            Microsoft 365 ecosystem, Azure Active Directory (Entra ID), Windows Server administration, and 
            VMware virtualization technologies.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            My approach centers on systematic problem-solving and continuous optimization of IT systems. 
            I have successfully led initiatives in decommissioning legacy software, implementing multi-factor 
            authentication, and streamlining access management processes across enterprise environments.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I'm passionate about mentoring technical teams, delivering efficient IT service solutions, and 
            staying current with emerging technologies. My experience includes network administration, 
            system integration, and working with various enterprise tools including ServiceNow, Intune, 
            and Cisco DNAC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
