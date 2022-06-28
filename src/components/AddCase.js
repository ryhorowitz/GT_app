import { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddCase() {
  const {register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    fetch('http://localhost:3000/case-files', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(()=>{})
    .catch(err => { 
      console.log('Error message: ', err);
    }
  )}
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <label>Case Number:</label>
      <input
        type="text"
        {...register("caseNumber", { required: true, maxLength: 7 })}
        //validate that casenumber is unique
      />
      <br></br>
      <label>First name</label>
      <input
        type="text"
        {...register("firstName", { required: true, maxLength: 80 })}
      />
      <br></br>
      <label>Last name</label>
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

//   <form>
// 
// </input>
// </label>
// <br></br>
// <label>First Name:
// <input
//   type="text"
//   value={values.firstName}
//   onChange={(e) => setValues.firstName(e.target.value)}>
// </input>
// </label>
// <br></br>
// <label>Last Name:
// <input
//   type="text"
//   value={values.lastName}
//   onChange={(e) => setValues.lastName(e.target.value)}>
// </input>
// </label>
// <br></br>
// <label>Status:
// <select>
//   <option value="active">Active</option>
//   <option value="inactive">Inactive</option>
//   <option value="closed">Closed</option>
// </select>
// </label>
// <label>
// <input type="submit" value="Add Case" />
// </label>
// </form>
