import React, { useEffect, useState } from 'react'
import JoblyApi from '../api'
import CompanyCard from './CompanyCard';
import SearchForm from '../SearchForm';

function CompanyList() {
   console.debug("CompanyList");

   const [companies, setCompanies] = useState([])

   async function getItems(name) {
      let c = await JoblyApi.getAllCompanies(name)
      setCompanies(c)
   }

   useEffect(() => {
      getItems();
   }, []);



   return (
      <div className="CompanyList col-md-8 offset-md-2">
         <h1 className="list-title">Companies</h1>
         <SearchForm search={getItems} />
         <div className="CompanyList-list">
            {companies.map(c => (
               <CompanyCard
                  key={c.handle}
                  handle={c.handle}
                  name={c.name}
                  num_employees={c.num_employees}
                  description={c.description}
                  logoUrl={c.logoUrl}
               />
            ))}
         </div>
      </div>
   )
};

export default CompanyList;