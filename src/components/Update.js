import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Update() {
  const [cases, setCases] = useState([]);
  const caseNumber = useParams().caseNumber;
  console.log("Props Parameter Value - " + caseNumber);
  
  //useEffect GET for caseNumber
  useEffect(() => {
    console.log('caseNumber to update is ', caseNumber)
    fetch(`http://localhost:3001/case-file/${caseNumber}`)
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
  }, [])
  return (
    <>
    <h2>UPDATE</h2>
    <div>Update case</div>
    <div>{cases[0] ? cases[0].lastName : null}</div>
    </>
  )
}
