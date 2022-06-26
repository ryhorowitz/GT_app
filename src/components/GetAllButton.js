import { useState } from 'react';

function GetAllButton() {
  const [loading, setLoading] = useState(false);
  const [cases, setCases] = useState([]);

  const getCases = () => {
    fetch('http://localhost:3000/case-files')
      .then(res => res.json())
      .then(res => {
        console.log('res is', res)
        return res
      })
      .then(res => {
        setCases(res);
        setLoading(false);
      })
      .catch(err => console.error('ERROR', err))
    //update state to false
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
          </tr>
        </thead>
        <tbody>
          {cases ?
            cases.map((x, key) => <tr key={key}>
              <td >{x.caseNumber}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.status}</td>
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