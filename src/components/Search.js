import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Search() {
  const [cases, setCases] = useState([]);
  const [toUpdateStatus, setToUpdateStatus] = useState('');
  const [updateCase, setToUpdateCase] = useState('');

  const { register, handleSubmit } = useForm();

  const findCase = ({ caseNumber }) => {
    console.log('caseNumber:', caseNumber)
    setCases([]);
    fetch(`http://localhost:3000/case-file/${caseNumber}`)
      // then
      .then(res => res.json())
      .then(data => {
        console.log('case info:', data[0])
        if (data[0] === undefined) {
          console.error('File not found.')
        }
        setCases(data);
      })
      .catch(err => console.error('ERROR:', err))
  }
  const deleteCase = (data) => {
    fetch('http://localhost:3000/case-files', {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ data })
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log('File was deleted', data)
        setCases();
      })
      .catch(err => console.error('ERROR', err))
  }

  const updateStatus = (status) => {
    console.log('update is', status)
    console.log('update case is', updateCase)
    fetch(`http://localhost:3000/case-files/update/${updateCase}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ status })
    })
      .then( res => res.json())
      .then( update => {
        console.log('File Updated:', update)
      })
      .catch( err => console.error('ERROR', err))
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
      {cases.length > 0 ?
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
            {cases.map((x, key) => <tr key={key}>
              <td>{x.caseNumber}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.status}</td>
              <td>
                <button
                  onClick={() => {
                    console.log('case#', x.caseNumber)
                    deleteCase(x.caseNumber);
                  }}>Delete</button>
              </td>
              <td>
                <select onChange={(e) => {
                  const newStatus = e.target.value;
                  setToUpdateStatus(newStatus);
                }}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  <option value="closed">closed</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => {
                    updateStatus(toUpdateStatus);
                    setToUpdateCase(x.caseNumber);
                  }}
                >Update</button>
              </td>
            </tr>)}
          </tbody>
        </table>
        : null}

    </>
  );
}


export default Search;
