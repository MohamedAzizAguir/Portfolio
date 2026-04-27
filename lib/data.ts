export const portfolioData = {
  // Personal Info
  name: "Mohamed Aziz Aguir",
  title: "Cybersecurity Engineering Student",
  bio: "Cybersecurity engineering student specializing in SOC operations, SIEM engineering, Cyber Threat Intelligence (CTI), and DevSecOps, with strong hands-on project experience and industry internship at Capgemini Engineering.",
  email: "mohamedaziz.aguir@outlook.com",
  github: "https://github.com/Mohamed-Aziz-Aguir",
  linkedin: "https://www.linkedin.com/in/mohamedazizaguir/",
  location: "Tunisia",

  // Hero section
  hero: {
    headline: "Booting SOC Interface...",
    subheadline: "SOC | SIEM | CTI | DevSecOps",
    cta: "Explore Systems",
  },

  // Skills - Organized by category
  skills: [
    { 
      category: "SOC / SIEM", 
      items: ["Wazuh", "Splunk", "ELK Stack", "Log Analysis", "Threat Detection", "Incident Response"] 
    },
    { 
      category: "SOAR / Automation", 
      items: ["Shuffle", "Cortex", "Alert Enrichment", "Automated Response", "Workflow Orchestration"] 
    },
    { 
      category: "Threat Intelligence", 
      items: ["CVE Analysis", "IOC Extraction", "Threat Feeds", "Malware Analysis", "OSINT"] 
    },
    { 
      category: "DevSecOps", 
      items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "Security Automation", "Infrastructure Deployment"] 
    },
    { 
      category: "Tools & Platforms", 
      items: ["TheHive", "Velociraptor", "pfSense", "Elasticsearch", "Redis", "FastAPI"] 
    },
    { 
      category: "Programming", 
      items: ["Python", "Bash", "FastAPI", "JavaScript", "SQL"] 
    },
  ],

  // Real Projects from actual experience
  projects: [
    {
      id: 1,
      title: "SOC Architecture Deployment",
      category: "Academic Project",
      period: "Nov 2024 – Present",
      description: "Designed and deployed a full open-source SOC architecture focused on detection, monitoring, and incident response at ESPRIT.",
      technologies: ["Wazuh", "TheHive", "Cortex", "Shuffle", "Velociraptor", "Docker", "pfSense"],
      link: "https://github.com/Mohamed-Aziz-Aguir",
      highlights: [
        "Integrated SIEM with automated incident handling",
        "Built pfSense network segmentation (DMZ/LAN/SOC/Honeynet)",
        "Detection engineering & SOC workflows",
        "Scalable Docker deployment"
      ],
    },
    {
      id: 2,
      title: "Automated Incident Response (SOAR)",
      category: "Apprenticeship Project",
      period: "Jan 2025 – Mar 2025",
      description: "Developed automated response workflows for SIEM and EDR alerts with SOAR integration.",
      technologies: ["Shuffle", "Cortex", "Alert Automation", "Python"],
      link: "https://github.com/Mohamed-Aziz-Aguir",
      highlights: [
        "Built SOAR workflows using Shuffle",
        "Integrated Cortex analyzers for enrichment",
        "Automated IP blocking and alert tagging",
        "Security automation & response orchestration"
      ],
    },
    {
      id: 3,
      title: "Cyber Threat Intelligence Platform",
      category: "Internship – Capgemini Engineering",
      period: "Jun 2025 – Sep 2025",
      description: "Contributed to building a Cyber Threat Intelligence platform for SOC and intelligence teams.",
      technologies: ["FastAPI", "Elasticsearch", "Redis", "Python", "CVE Feeds", "IOC Storage"],
      link: "https://github.com/Mohamed-Aziz-Aguir",
      highlights: [
        "Automated threat ingestion (CVEs, exploits, threat feeds)",
        "Implemented classification and correlation pipelines",
        "Built IOC storage and search systems",
        "AI-assisted threat categorization"
      ],
    },
    {
      id: 4,
      title: "SOC Detection & SOAR Automation",
      category: "Personal Project",
      period: "2024 - 2025",
      description: "Built a detection and response automation pipeline integrating SIEM and SOAR.",
      technologies: ["Wazuh", "Shuffle", "Python", "Alert Triage"],
      link: "https://github.com/Mohamed-Aziz-Aguir/soc-detection-soar-automation",
      highlights: [
        "Wazuh SIEM integration",
        "Shuffle SOAR workflows",
        "Automated alert triage and enrichment",
        "Detection engineering & automation"
      ],
    },
  ],

  // Work Experience - Real progression
  experience: [
    {
      id: 1,
      title: "Internship - DevSecOps / CTI",
      company: "Capgemini Engineering",
      duration: "Jun 2025 - Sep 2025",
      description: "Contributing to CTI platform development with focus on threat data pipelines and SOC integration.",
      achievements: [
        "Building threat intelligence ingestion systems",
        "Implementing IOC correlation pipelines",
        "Integrating with SOC platforms",
        "Working on FastAPI backend with Elasticsearch"
      ],
    },
    {
      id: 2,
      title: "Apprenticeship - SOAR Engineering",
      company: "Academic Project",
      duration: "Jan 2025 - Mar 2025",
      description: "Developed automated incident response workflows integrating SIEM alerts with SOAR.",
      achievements: [
        "Built Shuffle SOAR workflows",
        "Integrated Cortex for alert enrichment",
        "Automated response orchestration",
        "Alert triage automation"
      ],
    },
    {
      id: 3,
      title: "SOC Architecture Project",
      company: "ESPRIT - Cybersecurity Lab",
      duration: "Nov 2024 - Present",
      description: "Designing and deploying a complete SOC environment with open-source tools.",
      achievements: [
        "Wazuh SIEM deployment and configuration",
        "TheHive & Cortex integration for case management",
        "Network segmentation with pfSense",
        "Docker containerization for scalability"
      ],
    },
  ],

  // Skills Matrix
  skillsMatrix: [
    { skill: "Wazuh / SIEM", level: 85 },
    { skill: "Incident Response", level: 80 },
    { skill: "SOAR / Shuffle", level: 80 },
    { skill: "CTI & Threat Analysis", level: 75 },
    { skill: "DevSecOps / Docker", level: 80 },
    { skill: "Python / Automation", level: 85 },
    { skill: "Network Security", level: 75 },
    { skill: "Linux / Bash", level: 80 },
  ],

  // SOC Pipeline Flow
  socPipeline: [
    { stage: "Logs", icon: "📊", color: "from-blue-500 to-blue-600" },
    { stage: "SIEM", icon: "🔍", color: "from-purple-500 to-purple-600" },
    { stage: "Alert", icon: "⚠️", color: "from-orange-500 to-red-600" },
    { stage: "Triage", icon: "🔎", color: "from-yellow-500 to-orange-600" },
    { stage: "Response", icon: "⚡", color: "from-green-500 to-green-600" },
  ],

  // Key Stats
  stats: [
    { label: "Projects", value: "4+" },
    { label: "Tools Mastered", value: "15+" },
    { label: "Years Experience", value: "1+" },
    { label: "Internship Focus", value: "CTI/DevSecOps" },
  ],

  // SOC Stats
  socStats: [
    { label: "Active Projects", value: "4+" },
    { label: "Detection Systems", value: "5+" },
    { label: "Tools Integrated", value: "8+" },
    { label: "Focus Area", value: "SIEM" },
  ],

  // CTI Stats
  ctiStats: [
    { label: "Threat Feeds", value: "10+" },
    { label: "CVE Analysis", value: "Active" },
    { label: "IOC Database", value: "Ready" },
    { label: "Platforms", value: "FastAPI" },
  ],

  // Certifications - Credly Badges
  certifications: [
    {
      id: 1,
      name: "AWS Academy Graduate - Cloud Security Foundations",
      issuer: "Amazon Web Services",
      date: "Nov 14, 2024",
      credentialId: "31b7b855-ae8e-4071-bf3f-bbe704b959a3",
      credentialUrl: "https://www.credly.com/earner/earned/badge/91d17ca8-7f32-4e7f-bbf9-3f81df53a44e",
    },
    {
      id: 2,
      name: "Ethical Hacker",
      issuer: "Cisco",
      date: "Apr 27, 2026",
      credentialId: "22146f79-24df-4827-b9f8-5c6e3dd841ab",
      credentialUrl: "https://www.credly.com/earner/earned/badge/51286d4c-0af7-4b7a-ae6e-d33e91cc4dc6",
    },
    {
      id: 3,
      name: "Fortinet Certified Fundamentals Cybersecurity",
      issuer: "Fortinet",
      date: "Expires Apr 10, 2028",
      credentialId: "054e8091-11a6-4690-ae5b-ef9344546a75",
      credentialUrl: "https://www.credly.com/earner/earned/badge/e556847d-1624-4391-95ae-f759149852c4",
    },
    {
      id: 4,
      name: "Getting Started in Cybersecurity 3.0",
      issuer: "Fortinet",
      date: "Apr 10, 2026",
      credentialId: "e556847d-1624-4391-95ae-f759149852c4",
      credentialUrl: "https://www.credly.com/earner/earned/badge/054e8091-11a6-4690-ae5b-ef9344546a75",
    },
    {
      id: 5,
      name: "Introduction to the Threat Landscape 3.0",
      issuer: "Fortinet",
      date: "Apr 10, 2026",
      credentialId: "51286d4c-0af7-4b7a-ae6e-d33e91cc4dc6",
      credentialUrl: "https://www.credly.com/earner/earned/badge/22146f79-24df-4827-b9f8-5c6e3dd841ab",
    },
    {
      id: 6,
      name: "Network Security",
      issuer: "Cisco",
      date: "Jun 19, 2025",
      credentialId: "22146f79-24df-4827-b9f8-5c6e3dd841ab",
      credentialUrl: "https://www.credly.com/earner/earned/badge/31b7b855-ae8e-4071-bf3f-bbe704b959a3",
    },
  ],

  // Awards & Recognition
  awards: [
    {
      id: 1,
      title: "Outstanding SOC Project",
      organization: "ESPRIT Engineering School",
      year: 2024,
      description: "Recognition for designing and implementing a comprehensive SOC architecture with advanced detection, monitoring, and automated incident response capabilities.",
    },
    {
      id: 2,
      title: "Capgemini Engineering Internship",
      organization: "Capgemini Engineering",
      year: 2025,
      description: "Selected as intern to contribute to Cyber Threat Intelligence platform development with focus on threat data pipelines and SOC integration.",
    },
  ],
};
