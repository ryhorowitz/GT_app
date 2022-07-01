import { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddCase() {
  const {register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    fetch('http://localhost:3000/case-files', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then( res => console.log('res is', res))
    .catch( err => { 
      console.log('Error message: ', err);
    }
  )}
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Case</h2>
       <label>Case Number:</label>
      <input
        type="text"
        {...register("caseNumber", { required: true, maxLength: 7 })}
        //validate that casenumber is unique
      />
      <br></br>
      <label>First name:</label>
      <input
        type="text"
        {...register("firstName", { required: true, maxLength: 80 })}
      />
      <br></br>
      <label>Last name:</label>
      <input
        type="text"
        {...register("lastName", { required: true, maxLength: 100 })}
      />
      <br></br>
      <label>Status:</label>
      <select {...register("status")}>
        <option value="active">active</option>
        <option value="inactive">inactive</option>
        <option value="closed">closed</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default AddCase;

