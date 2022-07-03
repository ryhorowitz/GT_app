import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Search() {
  const [loading, setLoading] = useState(false);
  const [cases, setCases] = useState([]);
  const { register, handleSubmit } = useForm();

  const findCase = ({ caseNumber }) => {
    console.log('caseNumber:', caseNumber)
    // 
    fetch(`http://localhost:3000/case-file/${caseNumber}`)
      // then
      .then(res => res.json())
      .then(data => {
        console.log('case info:', data[0])
        if (data[0] === undefined) {
          console.error('File not found.')
        }
        // add file data to state
        setCases(data);
        setLoading(false);
      })
      .catch(err => console.error('ERROR:', err))
  }
  return (
    <>
      <form onSubmit={handleSubmit(findCase)}>
        <h2>Search Form</h2>
        <label>Case Number:</label>
        <input
          type="text"
          {...register("caseNumber", { required: true, maxLength: 7 })}
        />
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          setCases([]);
        }}>Clear</button>
      <table>
        <thead>
          <tr>
            <th>Case Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {(cases.length > 0) ?
            cases.map((x, key) => <tr key={key}>
              <td>{x.caseNumber}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.status}</td>
              <td>
                <button
                  onClick={() => {
                    console.log('case#', x.caseNumber)
                    // deleteCase(x.caseNumber);
                  }}>Delete</button>
              </td>
              <td>
                <select onChange={(e) => {
                  const newStatus = e.target.value;
                  // setToUpdateStatus(newStatus);
                }}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  <option value="closed">closed</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => {
                    // grab selected value and send to server Patch?
                    // updateStatus(toUpdateStatus);
                  }}
                >Update</button>
              </td>
            </tr>)
            :
            <tr>
              <td className="text-center" colSpan="4">
                <b></b>
              </td>
            </tr>}

        </tbody>
      </table>
    </>
  );
}


export default Search;
