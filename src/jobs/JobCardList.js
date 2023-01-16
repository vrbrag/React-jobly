import React from 'react'
import JobCard from './JobCard';

function JobCardList({ jobs }) {
   console.log("JobCardList", jobs)
   return (
      <div className="JobCardList">
         {jobs && jobs.map(job => (
            <JobCard
               key={job.id}
               id={job.id}
               title={job.title}
               salary={job.salary}
               equity={job.equity}
               companyName={job.companyName}
            />
         ))}
      </div>
   )
}

export default JobCardList;