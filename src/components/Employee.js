import React from 'react'

export default ({name, emp_no, ssn, final_edu, enter_date}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Employee Number: {emp_no}</p>
      <p>Social Security Number: {ssn}</p>
      <p>Final Education: {final_edu}</p>
      <p>Entering Date: {enter_date}</p>
    </div>
  )
}
