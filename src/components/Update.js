import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Update() {
  const [cases, setCases] = useState([]);
  const [status, setStatus] = useState('');
  const [oppoStatus, setOppoStatus] = useState('')
  const caseNumber = useParams().caseNumber;
  console.log("Props Parameter Value - " + caseNumber);

  //useEffect GET for caseNumber
  useEffect(() => {
    fetch(`http://localhost:3001/case-file/${caseNumber}`)
      .then(res => res.json())
      .then(data => {
        console.log('case info:', data[0])
        if (data[0] === undefined) {
          console.error('File not found.')
        }
        setCases(data);
        setStatus(data[0].status);
        setOppoStatus(status === 'active' ? 'closed' : 'active');
      })
      .catch(err => console.error('ERROR:', err))
  }, [])

  const c = cases[0];
  return (
    <>
      <h2>UPDATE</h2>
      <div>Update Case Status</div>
      <div>{c ?
        <><p> {`${c.caseNumber} ${c.lastName}, ${c.firstName} is ${c.status}`} </p><p> Do you want to change its status to {oppoStatus}?</p></>
        : null}
      </div>
    </>
  )
}


//case number last name, first name is status
// do you want to close this file? 