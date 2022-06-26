import React from 'react';
import caseFiles from '../data.js';

function GetAll() {
// a button that returns all case file data.
  return (
    <div className="all-cases">
      {caseFiles.map( (file, key) => {
        return (
          <div key={key}>
            {
              file.caseNumber + 
              ', ' +
              file.lastName + 
              ', ' +
              file.firstName 
              + ', ' + 
              file.status
            }
          </div>
        )
      })}
    </div>
  )
};

export default GetAll;