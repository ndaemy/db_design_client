import React from 'react'
import { Tile } from 'carbon-components-react'

const Member = ({ data }) => {
  return (
    <>
      {data.map(v => (
        <Tile
          key={v.member_id}
          style={{ marginBottom: '2vh', minWidth: '180px', width: '70vw' }}
        >
          <h2>{v.role}</h2>
          <h4>{v.emp_name}</h4>
          <p>{v.emp_no}</p>
          <p>{`Join Date: ${v.join_date}`}</p>
          <p>
            {v.out_date ? `Out Date: ${v.out_date}` : 'Out Date: Working...'}
          </p>
        </Tile>
      ))}
    </>
  )
}

export default Member
