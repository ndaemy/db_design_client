import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button, Loading } from 'carbon-components-react'
import { Content } from 'carbon-components-react/lib/components/UIShell'

import Nav from '../components/Nav'
import EmployeeTable from '../components/EmployeeTable'

// FIXME: not responsive.
const Wrapper = styled.p`
  min-height: 75vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

const StoryContent = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get('/api/employees/tech_grade')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ margin: '5vh 0' }}>
            {data ? (
              <EmployeeTable data={data} type="Dev" />
            ) : (
              <Wrapper>
                <Loading className="loading" />
              </Wrapper>
            )}
          </p>
          <Button href="/employees/new">New Employee</Button>
        </div>
      </div>
    </div>
  )

  return (
    <Content
      id="main-content"
      style={{ margin: '0', width: '100%', height: '100%' }}
    >
      {content}
    </Content>
  )
}

const Employee = () => {
  return (
    <>
      <Nav active="Employees" subActive="Dev" />
      <StoryContent />
    </>
  )
}

export default Employee
