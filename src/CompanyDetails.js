import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import JoblyApi from './api';
import JobCardList from './JobCardList';

function CompanyDetails() {
   const { handle } = useParams()
   const [company, setCompany] = useState([])

   async function getCompAndJobs() {
      let details = await JoblyApi.getCompany(handle)
      console.log(`${handle} Company Details`)
      setCompany(details)
   }

   useEffect(() => {
      getCompAndJobs()
   }, [handle])

   console.log(`${handle}'s Jobs`, company.jobs)
   return (
      <div className="CompanyDetails col-md-8 offset-md-2">
         <h4>{company.name}</h4>
         <p>{company.description}</p>
         {company.jobs && <div><b>Available Jobs</b></div>}
         <JobCardList jobs={company.jobs} />
      </div>
   )
};

export default CompanyDetails;