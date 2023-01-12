import React, { useEffect, useState } from 'react'
import JoblyApi from './api'
import CompanyCard from './CompanyCard'
import Job from './Job'
import { ListGroup, ListGroupItem } from 'reactstrap'

function List({ type }) {
   const [list, setList] = useState([])
   async function getItems() {
      // if (type === "jobs") {
      //    const j = await JoblyApi.getAllJobs()
      //    setList(j)
      // } else {
      const c = await JoblyApi.getAllCompanies()
      setList(c)
      // }
   }
   useEffect(() => {
      getItems();
   }, []);

   return (
      <div className="col-md-8 offset-md-2">
         List of {type}
         <div className="CompanyList-list">
            {list.map(c => (
               <CompanyCard
                  key={c.handle}
                  handle={c.handle}
                  name={c.name}
                  description={c.description}
                  logoUrl={c.logoUrl}
               />
            ))}
         </div>
      </div>
   )
};

export default List;