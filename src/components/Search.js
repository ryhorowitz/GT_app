import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Search() {

  const { register, handleSubmit } = useForm();

  const findCase = (caseNumber) => {
    console.log('caseNumber:', caseNumber)
    // 
    fetch(`http://localhost:3000/search${caseNumber}`)
      // then
      .then(res => res.json)
      .then(data => console.log('case info:', data))
      .catch(err => console.error('ERROR:', err))
  }
  return (
    <form onSubmit={handleSubmit(findCase)}>
      <h2>Search Form</h2>
      <label>Case Number:</label>
      <input
        type="text"
        {...register("caseNumber", { required: true, maxLength: 7 })}
      />
      <input type="submit" />
    </form>
  );
}


export default Search;
