import React, { useEffect, useState } from 'react'
import JoblyApi from './api'
import JobCard from './JobCard';

function JobList() {
   console.debug("JobList");

   const [jobs, setJobs] = useState([])
   async function getItems() {

      const c = await JoblyApi.getAllJobs()
      setJobs(c)

   }
   useEffect(() => {
      getItems();
   }, []);

   return (
      <div className="col-md-8 offset-md-2">
         List of jobs
         <div className="CompanyList-list">
            {jobs.map(j => (
               <JobCard
                  key={j.id}
                  title={j.title}
                  salary={j.equity}
               />
            ))}
         </div>
      </div>
   )
};

export default JobList;