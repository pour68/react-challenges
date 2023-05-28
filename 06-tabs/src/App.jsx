import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { sendGetRequest } from './utils/fetchData';
import CompanyList from './components/CompanyList';
import JobContent from './components/JobContent';

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [currentCompany, setCurrentCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await sendGetRequest("https://course-api.com/react-tabs-project");

      setJobs(data);
      setJob(data[0]);
      setCurrentCompany(data[0].company);
      setCompanies(data.map(job => job.company));
      setLoading(false);
    }

    fetchSkills();
  }, []);

  if (loading)
    return <h1>Loading...</h1>

  const handleCompanyChange = (company) => {
    const filterJobsByCompany = jobs.filter(job => job.company === company);

    setCurrentCompany(company);
    setJob(filterJobsByCompany[0]);
  }

  return (
    <div className='job'>
      <div className="job__container container">
        <div className="job__content">
          <CompanyList companies={companies}
            onCompanyChange={handleCompanyChange}
            currentCompany={currentCompany} />

          <JobContent job={job} />
        </div>
      </div>
    </div>
  )
}

export default App
