import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { Link, Outlet } from 'react-router-dom';


function Search() {

  return (
    <>
     <h2>Search By:</h2>
      <ul className='search-options'>
        <Link to='case-number'>Case Number</Link>
        or
        <Link to='name'>Name</Link>
      </ul>
      <Outlet />
    </>
  )
}

export default Search