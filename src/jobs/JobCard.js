import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardSubtitle, CardTitle } from 'reactstrap'
import CurrencyFormat from 'react-currency-format'
import UserContext from '../auth/UserContext'
import './JobCard.css'

function JobCard({ id, title, salary, equity, companyName, companyHandle }) {

   const { hasAppliedToJob, applyToJob } = useContext(UserContext)
   const [applied, setApplied] = useState()

   useEffect(function appliedStatus() {
      setApplied(hasAppliedToJob(id))
   }, [id, hasAppliedToJob])

   async function handleApply(e) {
      if (hasAppliedToJob(id)) return
      applyToJob(id)
      setApplied(true)
   }

   return (
      <div className="JobCard">
         {applied}
         <Card className="card-body">
            <CardTitle className="card-title">{title}</CardTitle>
            <Link to={`/companies/${companyHandle}`}>
               <CardSubtitle>{companyName}</CardSubtitle>
            </Link>
            {salary && <div><b>Salary: </b>{formatSalary(salary)}</div>}
            {equity && <div><b>Equity: </b>{equity}</div>}
            <button className="btn btn-success font-weight-bold mr-3" onClick={handleApply} disabled={applied}>
               {applied ? "Applied" : "Apply"}
            </button>
         </Card>
      </div>
   )
};

function formatSalary(salary) {
   return <CurrencyFormat value={salary} displayType={'text'} thousandSeparator={true} prefix={'$'} />
}

export default JobCard;