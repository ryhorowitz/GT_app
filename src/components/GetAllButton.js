import { useState } from 'react';
// import { useForm } from 'react-hook-form';

function GetAllButton() {
  const [loading, setLoading] = useState(false);
  const [cases, setCases] = useState([]);
  const [toUpdateStatus, setToUpdateStatus] = useState('');
  // const [toDelete, setToDelete] = useState('');
  // const {register, handleSubmit } = useForm();

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
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ data })
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

  const updateStatus = (data) => {
    console.log('update is', data)
    fetch('http://localhost:3000/case-files', {
      method: '',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ data })
    })
      .then(() => { })
      .catch(() => { })
  }

  return (
    <>
      <span>
        <button
          onClick={() => {
            setLoading(true);
            getCases();
          }}
        >{loading ? 'Loading...' : 'Get All Cases'}</button>
        <button
          onClick={() => {
            setCases([]);
          }}>Clear</button>
      </span>
      {(cases.length > 0) ?
        <table>
          <thead>
            <tr>
              <th>Case Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Status</th>
              <th>Year</th>
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
              <td>{x.year}</td>
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
                    // grab selected value and send to server Patch?
                    updateStatus(toUpdateStatus);
                  }}
                >Update</button>
              </td>
            </tr>)}
          </tbody>
        </table>
        :
        null}
    </>
  )
};

export default GetAllButton;