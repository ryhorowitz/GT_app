import React, { useState } from 'react'

export default function Update( props ) {
  console.log('props', props.location)
  const [status, setStatus] = useState()
  return (
    <>
    <h2>UPDATE</h2>
    <div>Update</div>
    </>
  )
}
