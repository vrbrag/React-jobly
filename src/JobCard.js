import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardSubtitle, CardTitle, Button } from 'reactstrap'

function JobCard(job) {
   const { title, salary, companyName, companyHandle } = job
   return (
      <div className="JobCard">
         <Card className="card-body">
            <CardTitle className="card-title">{title}</CardTitle>
            <Link to={`/companies/${companyHandle}`}>
               <CardSubtitle>{companyName}</CardSubtitle>
            </Link>

            <p><b>Salary:</b> {salary}</p>

            <Button className="btn btn-lg btn-primary">
               Apply
            </Button>
         </Card>
      </div>
   )
};

export default JobCard;