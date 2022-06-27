import { useState } from 'react';

function AddCase() {
  const [values, setValues] = useState({
    caseNumber: "",
    firstName: "",
    lastName: "",
    status: ""
  });

  return (
    <>
      <form>
        <label>Case Number:
          <input
            type="text"
            value={values.caseNumber}
            onChange={(e) => setValues(e.target.value)}>
          </input>
        </label>
        <br></br>
        <label>First Name:
          <input
            type="text"
            value={values.firstName}
            onChange={(e) => setValues.firstName(e.target.value)}>
          </input>
        </label>
        <br></br>
        <label>Last Name:
          <input
            type="text"
            value={values.lastName}
            onChange={(e) => setValues.lastName(e.target.value)}>
          </input>
        </label>
        <br></br>
        <label>Status:
          <select>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="closed">Closed</option>
          </select>
        </label>
        <label>
          <input type="submit" value="Add Case" />
        </label>
      </form>
    </>
  )
}

export default AddCase;