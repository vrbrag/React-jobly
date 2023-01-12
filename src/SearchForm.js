import React, { useState } from 'react'

function SearchForm({ search }) {
   console.log("SearchForm", typeof search)
   const [searchTerm, setSearchTerm] = useState("")

   function handleChange(e) {
      setSearchTerm(e.target.value)
   }
   // name w/o whitespace
   function handleSubmit(e) {
      e.preventDefault()
      search(searchTerm.trim() || undefined)
      setSearchTerm(searchTerm.trim())
   }

   return (
      <div className="SearchForm mb-4">
         <form className="form-inline" onSubmit={handleSubmit}>
            <input
               className="form-control form-control-lg flex-grow-1"
               name="searchTerm"
               placeholder="Search company name..."
               value={searchTerm}
               onChange={handleChange}

            />
            {/* <div className="searchIcon"><SearchIcon /></div> */}
            <button type="submit" className="btn btn-lg btn-primary">
               Go
            </button>
         </form>
      </div>
   )
}

export default SearchForm;