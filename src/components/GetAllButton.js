import { useState } from 'react';

function GetAllButton() {
  const [loading, setLoading] = useState(false);
  const [cases, setCases] = useState([]);
  const [toDelete, setToDelete] = useState('');

  const getCases = () => {
    fetch('http://localhost:3000/case-files')
      .then(res => res.json())
      .then(res => {
        console.log('res is', res)
        return res
      })
      .then(res => {
        setCases(res); //instead of overwriting maybe push in the array
        setLoading(false);
      })
      .catch(err => console.error('ERROR', err))
    //update state to false
  }

  const deleteCase = (data) => {
    fetch('http://localhost:3000/case-files', {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({data}) 
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
      console.log('File was deleted', data)
      //remove case from list of cases
      getCases();
    })
    .catch(err => console.error('ERROR', err))
  }

  return (
    <>
      <button
        onClick={() => {
          setLoading(true);
          getCases();
        }}
      >{loading ? 'Loading...' : 'Get All Cases'}</button>
      <table>
        <thead>
          <tr>
            <th>Case Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Delete</th>
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
                  deleteCase(x.caseNumber);
                }}>Delete</button>
              </td>
            </tr>)
              :
            <tr>
              <td className="text-center" colSpan="4">
                <b>No data found to display.</b>
              </td>
            </tr>}

        </tbody>
      </table>
    </>
  )
};

export default GetAllButton;