import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const cv = `
\x1b[1;34m=================================================\x1b[0m
                     \x1b[1;33mSimon Lalonde\x1b[0m
\x1b[1;34m=================================================\x1b[0m
\x1b[1;36mGitHub:\x1b[0m https://github.com/simlal | \x1b[1;36mLinkedIn:\x1b[0m https://www.linkedin.com/in/simon-lalonde/
\x1b[1;36mEmail:\x1b[0m simlalonde@hotmail.com | \x1b[1;36mLocation:\x1b[0m Sherbrooke, QC

\x1b[1;34m-------------------------------------------------\x1b[0m
                   \x1b[1;33mTechnical Skills\x1b[0m
\x1b[1;34m-------------------------------------------------\x1b[0m
- \x1b[1;32mCloud & DevOps:\x1b[0m Linux, Docker, AWS, GitHub Actions
- \x1b[1;32mData Science & AI:\x1b[0m Scikit-learn, Matplotlib, Plotly
- \x1b[1;32mIoT & Embedded:\x1b[0m ESP32, RPI-Pico, C/C++
- \x1b[1;32mBackend Development:\x1b[0m  SQLAlchemy, Express, MySQL/PostgreSQL

\x1b[1;34m-------------------------------------------------\x1b[0m
                      \x1b[1;33mEducation\x1b[0m
\x1b[1;34m-------------------------------------------------\x1b[0m
- Master’s in Computer Science
  \x1b[1;32mUniversité de Sherbrooke\x1b[0m (2022 - Summer 2025)
- Master’s in Biology
  \x1b[1;34mUniversité du Québec à Montréal\x1b[0m (2014 - 2016)
- Bachelor’s in Biochemistry
  \x1b[1;34mUniversité du Québec à Montréal\x1b[0m (2010 - 2013)

\x1b[1;34m-------------------------------------------------\x1b[0m
             \x1b[1;33mRecent Professional Experience\x1b[0m
\x1b[1;34m-------------------------------------------------\x1b[0m

\x1b[1;34m--------------------------------------------------------------------------\x1b[0m
\x1b[1;34m| Position                | Company                  | Duration          |\x1b[0m
\x1b[1;34m|-------------------------|--------------------------|-------------------|\x1b[0m
| \x1b[1;33mSoftware Developer      | Pharmacie Martin Gilbert | 2024 - Present    |\x1b[0m
|-------------------------|--------------------------|-------------------|
| - Developped and deployed microservices with AWS Lambda                |
| - Contributed to Express API development and testing                   |
|                                                                        |
|-------------------------|--------------------------|-------------------|
| \x1b[1;33mMitacs SSE Intern       | Microbrasserie Siboire   | 2023 - Present\x1b[0m    |
|-------------------------|--------------------------|-------------------|
| - Implemented Industry 4.0 tools to optimize production processes      |
|                                                                        |
|-------------------------|--------------------------|-------------------|
| \x1b[1;33mTeaching Assistant      | Université de Sherbrooke | 2023           \x1b[0m   |
|-------------------------|--------------------------|-------------------|
| - Taught scientific programming with Python (IFT-211)                  |
|                                                                        |
|-------------------------|--------------------------|-------------------|
| \x1b[1;33mQuality Manager         | Microbrasserie Siboire   | 2022 - 2023    \x1b[0m   |
|-------------------------|--------------------------|-------------------|
| - Developed and implemented a GLP-compliant quality program            |
|                                                                        |
--------------------------------------------------------------------------
\x1b[1;34m-------------------------------------------------\x1b[0m
                   \x1b[1;33mCertifications\x1b[0m
\x1b[1;34m-------------------------------------------------\x1b[0m
- CS50X | HarvardX (2023)
- Python for Everybody | University of Michigan (2022)

\x1b[1;34m-------------------------------------------------\x1b[0m
                 \x1b[1;33mLatest Publications\x1b[0m
\x1b[1;34m-------------------------------------------------\x1b[0m
- \x1b[1;33mLalonde, S.\x1b[0m et al. "Py-madaclim: An open-source Python API for geoclimatic data analysis of Madagascar." JOSS (in progress)
- Wünnemann, F., Tadjo, T. F., Beaudoin, M., \x1b[1;33mLalonde, S.\x1b[0m et al. "Multimodal CRISPR perturbations of GWAS loci associated with coronary artery disease." PLoS Genet. (2023)
- \x1b[1;33mLalonde, S.\x1b[0m et al. "Integrative analysis of genomic features identifies AIDA as a CAD candidate gene." Genome Biol. (2019)

\x1b[1;34m-------------------------------------------------\x1b[0m
                    \x1b[1;33mLanguages\x1b[0m
\x1b[1;34m-------------------------------------------------\x1b[0m
- \x1b[1;32mFrench:\x1b[0m Native
- \x1b[1;32mEnglish:\x1b[0m Excellent written and spoken proficiency
\x1b[1;34m=================================================\x1b[0m
\n`;

    res.send(cv);
}
