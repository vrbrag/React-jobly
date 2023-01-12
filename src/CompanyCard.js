import React from 'react'

function CompanyCard(company) {
   const { handle, name, description, logoUrl } = company

   return (
      <div>
         <h2>{name}</h2>
         <h4>{handle}</h4>
         <p>{description}</p>
         {logoUrl}
      </div>
   )
};

export default CompanyCard;