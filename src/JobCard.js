import React from 'react'

function JobCard(job) {
   const { title, salary, equity } = job
   return (
      <div>
         <h2>{title}</h2>
         <p>Salary: {salary}</p>
         <p>Equity: {equity}</p>
      </div>
   )
};

export default JobCard;