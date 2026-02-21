import itThumbnail from "@/assets/IndustriesHeros/It-technology.jpg"
import defThumbnail from "@/assets/IndustriesHeros/defence-aerospace.webp"
import renThumbnail from "@/assets/IndustriesHeros/renewable-energy.jpg"
import oilThumbnail from "@/assets/IndustriesHeros/oil-gas.jpg"
import cementThumbnail from "@/assets/IndustriesHeros/cement-industry.jpg"
import ironThumbnail from "@/assets/IndustriesHeros/iron-steel.jpg"
import railwayThumbnail from "@/assets/IndustriesHeros/railway-metro.jpg"
import transmissionThumbnail from "@/assets/IndustriesHeros/transmission-distribution.jpg"
import ibmsThumbnail from "@/assets/IndustriesHeros/ibms-industries.jpg"
import consThumbnail from "@/assets/IndustriesHeros/construction-industry.jpeg"
import automotiveThumbnail from "@/assets/IndustriesHeros/automotive-industry.avif"
import infraThumbnail from "@/assets/IndustriesHeros/infrastructure-industry.jpeg"


export interface Industry {
  slug: string;
  name: string;
  icon: string;
  image: string;
  overview: string;
  challenges: string[];
  howWeSupport: string[];
  relevantServices: string[];
  skilledRoles: string[];
  experience: string[];
}

export const industries: Industry[] = [
  {
    slug: "it-technology",
    name: "IT & Technology",
    icon: "Monitor",
    image: itThumbnail,
    overview: "The IT & Technology sector drives digital transformation across industries. We provide skilled professionals and multilingual support for technology implementations, software localization, and cross-border tech partnerships with Chinese and Japanese technology companies.",
    challenges: [
      "Rapid technology evolution requiring specialized talent",
      "Cross-border partnerships with Asian technology providers",
      "Software localization and technical documentation",
      "Communication barriers in tech transfer projects",
    ],
    howWeSupport: [
      "Skilled IT professionals and technical manpower",
      "Chinese/Japanese interpretation for technology partnerships",
      "Technical documentation translation and localization",
      "Cross-border project coordination for tech implementations",
    ],
    relevantServices: ["Multilingual Interpretation", "Industrial Manpower Supply", "Equipment Trading"],
    skilledRoles: ["Software Engineers", "IT Project Managers", "Systems Administrators", "Network Engineers", "Data Analysts", "Technical Translators"],
    experience: ["Software Localization Projects", "IT Infrastructure Setup", "Data Center Deployments", "Tech Transfer Programs", "Digital Transformation Initiatives"],
  },
  {
    slug: "defence-aerospace",
    name: "Defence & Aerospace",
    icon: "Shield",
    image: defThumbnail,
    overview: "In the highly specialized defence and aerospace industry, precision, innovation, and compliance with stringent regulations are paramount. We provide tailored solutions that meet the unique demands of this critical sector, supporting strategic initiatives with operational excellence and resource optimization.",
    challenges: [
      "Skilled workforce shortages in specialized domains",
      "Complex project execution under tight timelines",
      "Adherence to rigorous safety and quality standards",
      "Multi-language coordination with international partners",
    ],
    howWeSupport: [
      "Supply skilled workforce specifically suited for project, operational, and maintenance needs",
      "Chinese-English-Hindi interpretation for defence technology transfers",
      "Technical documentation translation for equipment procurement",
      "Cross-border coordination for imported defence equipment",
    ],
    relevantServices: ["Multilingual Interpretation", "Industrial Manpower Supply", "Equipment Trading"],
    skilledRoles: ["Aerospace Engineers", "Systems Engineers", "Quality Assurance Engineers", "Safety Officers", "Design Engineers", "Test Engineers", "Manufacturing Engineers"],
    experience: ["Military Aircraft Manufacturing", "Defense Systems Integration", "Aerospace Component Fabrication", "Missile Development Programs", "Simulation and Training Centers"],
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    icon: "Sun",
    image: renThumbnail,
    overview: "As the global shift towards sustainable energy accelerates, the renewable energy sector demands skilled teams and cross-border coordination. We specialize in providing skilled experts and language support tailored to solar, wind, biomass, storage, and battery projects.",
    challenges: [
      "Rapid advancements requiring specialized technical expertise",
      "International equipment sourcing and commissioning",
      "Language barriers with Chinese equipment manufacturers",
      "Safety compliance across diverse project sites",
    ],
    howWeSupport: [
      "Skilled manpower for project execution and O&M",
      "Chinese interpretation during equipment commissioning",
      "Equipment sourcing from Chinese manufacturers",
      "Technical document translation for imported machinery",
    ],
    relevantServices: ["Industrial Manpower Supply", "Equipment Trading", "Multilingual Interpretation"],
    skilledRoles: ["Renewable Energy Engineers", "Electrical Engineers", "Mechanical Engineers", "Civil Engineers", "QA/QC Engineers", "Safety Officers"],
    experience: ["Solar Power Plants", "Wind Farms", "Biomass Facilities", "Hydroelectric Power Stations", "Energy Storage Systems"],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    icon: "Flame",
    image: oilThumbnail,
    overview: "In the ever-evolving oil and gas industry, where innovation meets complexity, we provide expert solutions that drive success. Our focus on enhancing production capabilities while ensuring operational efficiency and cost-effectiveness supports your strategic goals across upstream and downstream operations.",
    challenges: [
      "Skills shortages in specialized engineering",
      "Executing capital projects efficiently under budget",
      "Regulatory compliance across jurisdictions",
      "Communication gaps with international technology providers",
    ],
    howWeSupport: [
      "Skilled personnel for project, operational, and maintenance needs",
      "Chinese interpretation for equipment procurement and commissioning",
      "Industrial equipment sourcing from China",
      "Cross-border project coordination and documentation",
    ],
    relevantServices: ["Industrial Manpower Supply", "Multilingual Interpretation", "Equipment Trading"],
    skilledRoles: ["Petroleum Engineers", "Drilling Engineers", "Production Engineers", "Instrumentation Engineers", "QA/QC Engineers", "Safety Officers"],
    experience: ["Oil Refineries", "Gas Processing Plants", "Offshore Platforms", "Onshore Fields", "LNG Terminals", "Petrochemical Plants"],
  },
  {
    slug: "cement",
    name: "Cement",
    icon: "Building",
    image: cementThumbnail,
    overview: "The cement industry navigates a dynamic landscape of expanding production while maintaining operational efficiency. We provide skilled personnel and language services tailored to cement plant projects, from commissioning to maintenance, with deep experience in Chinese technology integration.",
    challenges: [
      "Skills shortages in plant operations",
      "Capital project execution with imported Chinese machinery",
      "Regulatory and environmental compliance",
      "Communication with Chinese equipment suppliers",
    ],
    howWeSupport: [
      "Skilled manpower across all engineering disciplines",
      "Chinese interpretation for plant commissioning with Chinese engineers",
      "Equipment and spare parts sourcing from China",
      "Technical documentation translation",
    ],
    relevantServices: ["Industrial Manpower Supply", "Multilingual Interpretation", "Equipment Trading"],
    skilledRoles: ["Process Engineers", "Mechanical Engineers", "Electrical Engineers", "Instrumentation Engineers", "QA/QC Engineers", "Safety Specialists"],
    experience: ["Cement Plants", "Coal Gasification Plants", "DRI Plants", "RMHS Plants", "Blast Furnaces"],
  },
  {
    slug: "iron-steel",
    name: "Iron & Steel",
    icon: "Factory",
    image: ironThumbnail,
    overview: "The iron and steel industry drives economic development and infrastructure growth. With 13+ years of hands-on Chinese interpretation experience at major steel plants including Tata Steel and Jindal Steel, we bring unmatched expertise in coke oven technology, plant commissioning, and cross-cultural coordination.",
    challenges: [
      "Complex commissioning of imported coke oven batteries",
      "Language barriers between Chinese and Indian engineering teams",
      "Fluctuating raw material prices requiring agile sourcing",
      "Maintaining safety standards during expansion projects",
    ],
    howWeSupport: [
      "Expert Chinese interpretation for coke oven and steel plant operations",
      "Skilled manpower for expansion and maintenance projects",
      "Industrial equipment and spare parts sourcing from China",
      "Complete project coordination between Indian and Chinese teams",
    ],
    relevantServices: ["Multilingual Interpretation", "Industrial Manpower Supply", "Equipment Trading"],
    skilledRoles: ["Metallurgical Engineers", "Process Engineers", "Mechanical Engineers", "Electrical Engineers", "Field Supervisors", "Maintenance Personnel"],
    experience: ["Tata Steel Kalinganagar CDQ Expansion", "Jindal Steel & Power Angul Coke Oven", "Rolling Mills", "Iron Ore Processing Plants", "Foundries"],
  },
  {
    slug: "railways-metro",
    name: "Railways & Metro",
    icon: "Train",
    image: railwayThumbnail,
    overview: "As urbanization accelerates and demand for efficient public transport rises, railways and metro sectors need skilled professionals and cross-border coordination. We provide qualified experts for modern rail systems, with experience supporting DMRC tunnelling projects with Chinese contractors.",
    challenges: [
      "Safety, efficiency, and innovation demands",
      "Coordination with international contractors and suppliers",
      "Complex signalling and automation systems",
      "Tight construction timelines",
    ],
    howWeSupport: [
      "Skilled manpower for rail infrastructure development",
      "Chinese interpretation for tunnelling and construction projects",
      "Equipment sourcing for rail systems",
      "Cross-border coordination with Chinese contractors",
    ],
    relevantServices: ["Industrial Manpower Supply", "Multilingual Interpretation", "Equipment Trading"],
    skilledRoles: ["Rail Systems Engineers", "Civil Engineers", "Signaling Engineers", "Electrical Engineers", "QA/QC Engineers", "Safety Officers"],
    experience: ["Urban Metro Systems (DMRC)", "High-Speed Rail Projects", "Freight Rail Operations", "Rail Infrastructure Development"],
  },
  {
    slug: "transmission-distribution",
    name: "Transmission & Distribution",
    icon: "Zap",
    image: transmissionThumbnail,
    overview: "The T&D sector is essential for delivering reliable power. We specialize in providing skilled resources and language services to meet the growing demands of power transmission, including coordination with Chinese equipment manufacturers for transformers, switchgear, and grid infrastructure.",
    challenges: [
      "Aging infrastructure requiring modernization",
      "Integration of renewable energy sources",
      "Sourcing reliable equipment at competitive prices",
      "Regulatory compliance across states",
    ],
    howWeSupport: [
      "Skilled professionals for transmission and distribution projects",
      "Equipment sourcing from Chinese manufacturers",
      "Chinese interpretation for technology transfer",
      "Project management and coordination support",
    ],
    relevantServices: ["Industrial Manpower Supply", "Equipment Trading", "Multilingual Interpretation"],
    skilledRoles: ["Transmission Engineers", "Distribution Engineers", "Substation Engineers", "Electrical Engineers", "QA/QC Engineers", "Field Supervisors"],
    experience: ["Power Transmission Lines", "Distribution Networks", "Substations", "Renewable Energy Integration", "Electrification Projects"],
  },
  {
    slug: "ibms",
    name: "IBMS",
    icon: "Monitor",
    image: ibmsThumbnail,
    overview: "Integrated Building Management Systems demand highly skilled experts who can manage and optimize building operations. We provide qualified professionals and Chinese language support for smart building technology imported from China, ensuring seamless system integration.",
    challenges: [
      "Growing complexity of building automation systems",
      "Integration of multiple subsystems",
      "Energy efficiency and sustainability targets",
      "Communication with Chinese technology providers",
    ],
    howWeSupport: [
      "Skilled IBMS engineers and systems integrators",
      "Chinese interpretation for technology commissioning",
      "Equipment sourcing for building management systems",
      "Technical documentation translation",
    ],
    relevantServices: ["Industrial Manpower Supply", "Equipment Trading", "Multilingual Interpretation"],
    skilledRoles: ["IBMS Engineers", "Systems Integrators", "HVAC Engineers", "Electrical Engineers", "IT Specialists"],
    experience: ["Commercial Buildings", "Institutional Buildings", "Healthcare Facilities", "Industrial Facilities", "Hospitality Sector"],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    image: consThumbnail,
    overview: "As construction projects grow in complexity and scale, the need for skilled manpower and seamless international coordination becomes critical. We provide highly qualified personnel along with specialized cross-border language support to ensure smooth collaboration between Indian project teams and Chinese contractors, suppliers, and technology partners.From residential and commercial developments to large-scale infrastructure projects, our expertise ensures efficient execution with a strong focus on safety, quality, compliance, and timely delivery. By combining industrial experience with multilingual support, we help bridge communication gaps and drive project success at every stage.",
    challenges: [
      "Industrial building construction",
      "Foundation & structural works",
      "Safety compliance and quality control",
      "Coordination with Chinese contractors and suppliers",
    ],
    howWeSupport: [
      "Skilled manpower across all construction disciplines",
      "Chinese interpretation for international construction projects",
      "Construction equipment sourcing from China",
      "Renovation & maintenance works",
    ],
    relevantServices: ["Industrial Manpower Supply", "Multilingual Interpretation", "Equipment Trading"],
    skilledRoles: ["Project Managers", "Civil Engineers", "Structural Engineers", "Site Supervisors", "Safety Officers", "MEP Engineers", "Quantity Surveyors"],
    experience: ["Residential Developments", "Commercial Complexes", "Industrial Facilities", "Infrastructure Projects (Roads, Bridges, Airports & Ports)"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: "Car",
    image: automotiveThumbnail,
    overview: "The automotive industry requires precision engineering and efficient supply chains. We support automotive manufacturers with skilled manpower, Chinese language services for technology partnerships, and industrial equipment sourcing from Chinese automotive component manufacturers.",
    challenges: [
      "Rapid technological evolution",
      "Quality control across global supply chains",
      "Integration of Chinese manufacturing technology",
      "Skilled workforce availability",
    ],
    howWeSupport: [
      "Skilled engineering manpower for manufacturing",
      "Chinese interpretation for technology transfers",
      "Automotive component sourcing from China",
      "Quality inspection and supplier verification",
    ],
    relevantServices: ["Industrial Manpower Supply", "Equipment Trading", "Multilingual Interpretation"],
    skilledRoles: ["Manufacturing Engineers", "Quality Engineers", "Process Engineers", "Automation Specialists", "Design Engineers"],
    experience: ["Automotive Manufacturing Plants", "Component Fabrication Units", "Assembly Lines", "EV Manufacturing Facilities"],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    icon: "Landmark",
    image: infraThumbnail,
    overview: "Large-scale infrastructure projects demand coordinated execution across multiple disciplines. We provide skilled professionals, language services, and equipment sourcing to ensure infrastructure projects are delivered on time, within budget, and to the highest standards.",
    challenges: [
      "Multi-disciplinary coordination requirements",
      "Tight timelines and budget constraints",
      "International contractor management",
      "Equipment procurement from global markets",
    ],
    howWeSupport: [
      "Comprehensive manpower supply across disciplines",
      "Chinese interpretation for international project teams",
      "Heavy equipment sourcing from China",
      "Cross-border project coordination",
    ],
    relevantServices: ["Industrial Manpower Supply", "Equipment Trading", "Multilingual Interpretation"],
    skilledRoles: ["Project Managers", "Civil Engineers", "Structural Engineers", "Geotechnical Engineers", "Environmental Engineers", "Safety Officers"],
    experience: ["Highway Construction", "Bridge Projects", "Airport Development", "Port Infrastructure", "Smart City Projects"],
  },
];
