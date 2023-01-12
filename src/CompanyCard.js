import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitle } from 'reactstrap'

function CompanyCard(company) {
   const { handle, name, description, logoUrl } = company

   return (
      <Link className="CompanyCard" to={`/companies/${handle}`}>
         <Card className="card-body">
            <CardTitle className="card-title">
               {name}
               {logoUrl && <img src={logoUrl}
                  alt={name}
                  className="float-right ml-5" />}
            </CardTitle>
            <p><small>{description}</small></p>
         </Card>
      </Link>
   )
};

export default CompanyCard;