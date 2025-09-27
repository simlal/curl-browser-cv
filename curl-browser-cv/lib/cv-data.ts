
export interface CVData {
  personal: {
    name: string;
    title: string;
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
    title: "Software Developer | Embedded & DevOps Enthusiast",
    github: "https://github.com/simlal",
    linkedin: "https://www.linkedin.com/in/simon-lalonde/",
    email: "simlalonde@hotmail.com",
    location: "Sherbrooke, QC"
  },
  sections: [
    {
      title: "Skills",
      type: "list",
      items: [
        { label: "Programming", value: "Python, Bash, Rust" },
        { label: "DevOps & Backend", value: "AWS, Docker, GitHub Actions, IaC (CloudFormation), NodeJS, SQL" },
        { label: "Embedded & IoT", value: "Rust (Embassy), RPI Pico/ESP32, MQTT" }
      ]
    },
    {
      title: "Recent Professional Experience",
      type: "table",
      items: [
        {
          Position: "DevOps Intern/Backend Dev",
          Company: "AEDDIX/Pharmacie Martin Gilbert",
          Duration: "2024-2025",
          details: [
            "Built CI/CD pipelines for AWS serverless apps",
            "Developed an internal Python toolkit for Lambda/Beanstalk applications",
            "Integrated analytics dashboards via nginx reverse proxy"
          ]
        },
        {
          Position: "Quality Control Manager",
          Company: "Microbrasserie Siboire",
          Duration: "2022 – 2024",
          details: [
            "Implemented a quality control program for all steps of beer production",
          ]
        },
        {
          Position: "Research Assistant",
          Company: "Montreal Heart Institute",
          Duration: "2016-2019",
          details: [
            "Developed Linux‑based data pipelines for genomic analysis"
          ]
        }
      ]
    },
    {
      title: "Education",
      type: "education",
      items: [
        {
          degree: "Master's in Computer Science",
          institution: "Université de Sherbrooke",
          period: "2022 - Summer 2025",
        },
        {
          degree: "Master's in Biology",
          institution: "Université du Québec à Montréal",
          period: "2014 - 2016"
        },
        {
          degree: "Bachelor's in Biochemistry",
          institution: "Université du Québec à Montréal",
          period: "2010 - 2013"
        }
      ]
    },
    {
      title: "Personal Projects",
      type: "list",
      items: [
        { label: "AWS Lambda Python Template", value: "Template for serverless applications with CI/CD, IaC, and external API integration" },
        { label: "Pico Button Wars", value: "Multiplayer reaction game on RPI Pico in Rust" },
        { label: "IoT Data Stack", value: "ESP32→MQTT→SQLite via Flask backend using Docker compose" }
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
