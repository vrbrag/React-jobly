import React, { useEffect, useState } from 'react'
import JoblyApi from './api'

function List({ type }) {
   const [list, setList] = useState([])

   async function getList() {
      if (type === "jobs") {
         let jobs = await JoblyApi.getAllJobs()
         setList(jobs)
      } else if (type === "companies") {
         let companies = await JoblyApi.getAllCompanies()
         setList(companies)
      }
   }

   useEffect(() => {
      getList()
   }, [])

   return (
      <div>
         List of {type}
      </div>
   )
};

export default List;