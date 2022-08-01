import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Search() {
  const [cases, setCases] = useState([]);
  const { register, handleSubmit } = useForm();

  const findCaseByName = ({ firstName, lastName }) => {
    lastName = lastName.toUpperCase();
    console.log('firstName is', firstName)
    console.log('lastName:', lastName)
    setCases([]);
    fetch(`http://localhost:3001/name-search/?firstname=${firstName}&lastname=${lastName}`)
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
    fetch('http://localhost:3001/case-files', {
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

  return (
    <>
      <form onSubmit={handleSubmit(findCaseByName)}>
        <label>First Name</label>
        <input
          type="text"
          {...register("firstName", { maxLength: 30 })}
        />
        <label>Last Name</label>
        <input
          type="text"
          {...register("lastName", { maxLength: 30 })}
        />
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          setCases([]);
        }}>Clear</button>
      {cases.length > 0 ?
        <div className='results-table'>
          <table>
            <thead>
              <tr>
                <th>Case Number</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Status</th>
                {/* <th>Year</th> */}
                {/* <th>Delete</th>
                <th>Change Status</th> */}
              </tr>
            </thead>
            <tbody>
              {cases.map((x, key) => <tr key={key}>
                <td>{x.caseNumber}</td>
                <td>{x.lastName}</td>
                <td>{x.firstName}</td>
                <td>{x.status}</td>
                {/* <td>{x.year}</td> */}
                {/* <td>
                  <button
                    onClick={() => {
                      console.log('case#', x.caseNumber)
                      deleteCase(x.caseNumber);
                    }}>Delete</button>
                </td>
                <td>
                  <select onChange={(e) => {
                    const newStatus = e.target.value;

                  }}>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                    <option value="closed">closed</option>
                  </select>
                </td> */}
                <td className='update'>
                  <Link to={{
                    pathname: `/update/${x.caseNumber}`,
                    state: {stateParam: true}
                  }}
                  >UPDATE</Link>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
        : null}

    </>
  );
}


export default Search;
