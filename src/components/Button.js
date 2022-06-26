import { useState } from 'react';

function Button () {
  const [clicked, setClicked] = useState(false);
  return (
  <>
    <button
      onClick={() => {
        // fetch from mongo
        fetch('http://localhost:3000/case-files')
        .then(res => res.json())
        .then(res => console.log('res is', res))
        .then(res => {
          //paste data to dom
        })
        .catch( err => console.error('ERROR', err))
        //update state to false
      }}  
    >GET ALL Cases</button>
  </>
  )
};

export default Button;