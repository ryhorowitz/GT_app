import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
export default function Update( props ) {

  const type = useParams().type;
  const stateParams  = useLocation().state;
  console.log("Props Parameter Value - " + type);
  console.log("Props State Value - " + stateParams);

  return (
    <>
    <h2>UPDATE</h2>
    <div>Update</div>
    <div></div>
    </>
  )
}
