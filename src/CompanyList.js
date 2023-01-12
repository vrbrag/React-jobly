import React, { useEffect, useState } from 'react'
import JoblyApi from './api'
import CompanyCard from './CompanyCard';

function CompanyList() {
   console.debug("CompanyList");

   const [companies, setCompanies] = useState([])
   async function getItems() {

      const c = await JoblyApi.getAllCompanies()
      setCompanies(c)

   }
   useEffect(() => {
      getItems();
   }, []);

   return (
      <div className="col-md-8 offset-md-2">
         List of companies
         <div className="CompanyList-list">
            {companies.map(c => (
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

export default CompanyList;