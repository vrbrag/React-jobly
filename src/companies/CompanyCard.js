import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitle } from 'reactstrap'
import './CompanyCard.css'

function CompanyCard(company) {
   const { handle, name, description } = company

   return (
      <Link className="CompanyCard" to={`/companies/${handle}`}>
         <Card className="card-body">
            <CardTitle className="card-title">
               {name}
            </CardTitle>
            <p><small>{description}</small></p>
         </Card>
      </Link>
   )
};

export default CompanyCard;