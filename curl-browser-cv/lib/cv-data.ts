
export interface CVData {
  personal: {
    name: string;
    github: string;
    linkedin: string;
    email: string;
    location: string;
  };
  sections: CVSection[];
}

export interface CVSection {
  title: string;
  type: 'list' | 'table' | 'education';
  items: CVItem[];
}

export interface CVItem {
  [key: string]: string | string[];
}

export const cvData: CVData = {
  personal: {
    name: "Simon Lalonde",
    github: "https://github.com/simlal",
    linkedin: "https://www.linkedin.com/in/simon-lalonde/",
    email: "simlalonde@hotmail.com",
    location: "Sherbrooke, QC"
  },
  sections: [
    {
      title: "Technical Skills",
      type: "list",
      items: [
        { label: "Programming", value: "Python, Bash, Rust, (C/C++ basics)" },
        { label: "Cloud & Backend", value: "AWS, Docker, GH Actions, NodeJS, SQL, scikit-learn, Linux" },
        { label: "IoT", value: "RPI Pico, ESP32, Embassy (Rust)" }
      ]
    },
    {
      title: "Education",
      type: "education",
      items: [
        { degree: "Master's in Computer Science", institution: "Université de Sherbrooke", period: "2022 - Summer 2025" },
        { degree: "Master's in Biology", institution: "Université du Québec à Montréal", period: "2014 - 2016" },
        { degree: "Bachelor's in Biochemistry", institution: "Université du Québec à Montréal", period: "2010 - 2013" }
      ]
    },
    {
      title: "Recent Professional Experience",
      type: "table",
      items: [
        {
          Position: "DevOps internship",
          Company: "Axient Sante / PMG",
          Duration: "Summer 2025",
          details: [
            "Created CI/CD pipelines for serverless infrastructure",
            "Developed an internal Python toolkit for Lambda/Beanstalk apps",
            "Contributed to nginx rev proxy solution to embed external app"
          ]
        },
        {
          Position: "Software Developer",
          Company: "Pharmacie Martin Gilbert",
          Duration: "2024 - Present",
          details: [
            "Prototyping of delivery microservice with SQLAlchemy/Lambda",
            "Contributed to NodeJS API development and testing"
          ]
        },
        {
          Position: "Quality Control Manager",
          Company: "Microbrasserie Siboire",
          Duration: "2022 - 2024",
          details: [
            "Implemented a QC program for all steps of beer production",
            "Explored Industry 4.0 tools to optimize production processes"
          ]
        }
      ]
    },

    {
      title: "Certifications",
      type: "list",
      items: [
        { label: "CS50X", value: "HarvardX (2023)" },
        { label: "Python for Everybody", value: "University of Michigan (2022)" }
      ]
    },
    {
      title: "Latest Publications",
      type: "list",
      items: [
        { label: "Py-madaclim: An open-source Python API", value: "In preparation (2025)" },
        { label: "CRISPR perturbations of CAD GWAS loci", value: "PLoS Genet. (2023)" },
        { label: "Identification of AIDA as CAD candidate gene", value: "Genome Biol. (2019)" }
      ]
    },
    {
      title: "Languages",
      type: "list",
      items: [
        { label: "French", value: "Native" },
        { label: "English", value: "Excellent written and spoken" }
      ]
    }

  ]
};
