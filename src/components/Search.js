import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


function Search() {

  return (
    <>
     <h2>Search By</h2>
      <ul className='search-options'>
        <Link to='name'>Name</Link>
        or
        <Link to='case-number'>Case Number</Link>
      </ul>
    </>
  )
}

export default Search