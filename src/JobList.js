import React, { useEffect, useState } from 'react'
import JoblyApi from './api'
import JobCard from './JobCard';

function JobList() {
   console.debug("JobList");

   const [jobs, setJobs] = useState([])
   async function getItems() {

      const j = await JoblyApi.getAllJobs()
      console.log(j)
      setJobs(j)
   }
   useEffect(() => {
      getItems();
   }, []);

   return (
      <div className="col-md-8 offset-md-2">
         <h1 className="list-title">Jobs</h1>
         <div className="CompanyList-list">
            {jobs && jobs.map(j => (
               <JobCard
                  key={j.id}
                  id={j.id}
                  title={j.title}
                  salary={j.salary}
                  companyName={j.companyName}
                  companyHandle={j.companyHandle}
               />
            ))}
         </div>
      </div>
   )
};

export default JobList;