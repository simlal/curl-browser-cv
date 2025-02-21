import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cv = `
\x1b[1;34m==========================================================================
                              \x1b[1;33mSimon Lalonde\x1b[0m
\x1b[1;34m==========================================================================\x1b[0m
\x1b[1;36mGitHub:\x1b[0m https://github.com/simlal
\x1b[1;36mLinkedIn:\x1b[0m https://www.linkedin.com/in/simon-lalonde/
\x1b[1;36mEmail:\x1b[0m simlalonde@hotmail.com
\x1b[1;36mLocation:\x1b[0m Sherbrooke, QC

\x1b[1;34m--------------------------------------------------------------------------
                             \x1b[1;33mTechnical Skills\x1b[0m
\x1b[1;34m--------------------------------------------------------------------------
\x1b[0m\x1b[1;32mCloud & DevOps:\x1b[0m Linux, Docker, AWS, GitHub Actions
\x1b[1;32mProgramming:\x1b[0m Python, Bash, C++, Rust
\x1b[1;32mApplications:\x1b[0m AI & Data (matplotlib, sk-learn), Backend (NodeJS, SQL)

\x1b[1;34m--------------------------------------------------------------------------
                                \x1b[1;33mEducation\x1b[0m
\x1b[1;34m--------------------------------------------------------------------------
\x10\x1b[1;32mMaster's in Computer Science\x1b[0m
    \x1b[1;34mUniversité de Sherbrooke\x1b[0m (2022 - Summer 2025)
\x1b[1;32mMaster's in Biology\x1b[0m
    \x1b[1;34mUniversité du Québec à Montréal\x1b[0m (2014 - 2016)
\x1b[1;32mBachelor's in Biochemistry\x1b[0m
    \x1b[1;34mUniversité du Québec à Montréal\x1b[0m (2010 - 2013)

\x1b[1;34m--------------------------------------------------------------------------
                      \x1b[1;33mRecent Professional Experience\x1b[0m
\x1b[1;34m--------------------------------------------------------------------------
\x1b[1;35m|         Position        | \x1b[1;35m        Company          | \x1b[1;35m    Duration      |\x1b[0m
|-------------------------|--------------------------|-------------------|
| \x1b[1;34mSoftware Developer\x1b[0m      | \x1b[1;34mPharmacie Martin Gilbert\x1b[0m | \x1b[1;34m2024 - Present\x1b[0m    |
|-------------------------|--------------------------|-------------------| \x1b[0m
| - \x1b[1;32mDeveloped and deployed microservices with AWS Lambda                \x1b[0m |
| - \x1b[1;32mCreated CI/CD pipelines for serverless components                    \x1b[0m|
| - \x1b[1;32mContributed to Express API development and testing                   \x1b[0m| 
|-------------------------|--------------------------|-------------------|
| \x1b[1;34mQuality Control Manager\x1b[0m | \x1b[1;34mMicrobrasserie Siboire\x1b[0m   | \x1b[1;34m2022 - 2024   \x1b[0m    |
|-------------------------|--------------------------|-------------------|
| - \x1b[1;32mImplemented a QC program for all steps of beer production            \x1b[0m|
| - \x1b[1;32mExplored Industry 4.0 tools to optimize production processes      \x1b[0m   |
\x1b[1;34m--------------------------------------------------------------------------

\x1b[1;34m--------------------------------------------------------------------------
                                 \x1b[1;33mCertifications\x1b[0m
\x1b[1;34m--------------------------------------------------------------------------
\x1b[1;35m|         Certification        |         Institution            |  Year  |\x1b[0m
|------------------------------|--------------------------------|--------|
| \x1b[1;32mCS50X\x1b[0m                        | \x1b[1;34mHarvardX\x1b[0m                       | \x1b[1;34m2023\x1b[0m   |
| \x1b[1;32mPython for Everybody\x1b[0m         | \x1b[1;34mUniversity of Michigan\x1b[0m         | \x1b[1;34m2022\x1b[0m   |
\x1b[1;34m--------------------------------------------------------------------------

\x1b[1;34m--------------------------------------------------------------------------
                             \x1b[1;33mLatest Publications\x1b[0m
\x1b[1;34m--------------------------------------------------------------------------
\x1b[1;35m|                    Title                     |     Journal    |  Year  |\x1b[0m
|----------------------------------------------|----------------|--------|
| \x1b[1;32mPy-madaclim: An open-source Python API\x1b[0m       | \x1b[1;34mJOSS (in prog)\x1b[0m | \x1b[1;34m2024\x1b[0m   |
| \x1b[1;32mMultimodal CRISPR perturbations of GWAS loci\x1b[0m | \x1b[1;34mPLoS Genet.\x1b[0m    | \x1b[1;34m2023\x1b[0m   |
| \x1b[1;32mIntegrative analysis of genomic features\x1b[0m     | \x1b[1;34mGenome Biol.\x1b[0m   | \x1b[1;34m2019\x1b[0m   |
\x1b[1;34m--------------------------------------------------------------------------

\x1b[1;34m--------------------------------------------------------------------------
                                  \x1b[1;33mLanguages\x1b[0m
\x1b[1;34m--------------------------------------------------------------------------
\x1b[1;35m|      Language      |                Proficiency                        |\x1b[0m
|--------------------|---------------------------------------------------|
| \x1b[1;32mFrench\x1b[0m             | \x1b[1;34mNative         \x1b[0m                                   |
| \x1b[1;32mEnglish\x1b[0m            | \x1b[1;34mExcellent written and spoken\x1b[0m                      |
\x1b[1;34m==========================================================================
`;

  res.send(cv);
}
