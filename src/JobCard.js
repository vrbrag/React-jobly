import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardSubtitle, CardTitle, Button } from 'reactstrap'
import CurrencyFormat from 'react-currency-format'

function JobCard(job) {
   const { title, salary, equity, companyName, companyHandle } = job
   return (
      <div className="JobCard">
         <Card className="card-body">
            <CardTitle className="card-title">{title}</CardTitle>
            <Link to={`/companies/${companyHandle}`}>
               <CardSubtitle>{companyName}</CardSubtitle>
            </Link>
            {salary && <div><b>Salary: </b>{formatSalary(salary)}</div>}
            {equity && <div><b>Equity: </b>{equity}</div>}
            <Button className="btn btn-lg btn-primary">
               Apply
            </Button>
         </Card>
      </div>
   )
};

function formatSalary(salary) {
   return <CurrencyFormat value={salary} displayType={'text'} thousandSeparator={true} prefix={'$'} />
}

export default JobCard;