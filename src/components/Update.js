import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Update() {
  const caseNumber = useParams().caseNumber;
  console.log("Props Parameter Value - " + caseNumber);
  
  //useEffect GET for caseNumber
  return (
    <>
    <h2>UPDATE</h2>
    <div>Update</div>
    <div></div>
    </>
  )
}
