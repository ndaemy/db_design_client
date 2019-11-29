import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Loading } from 'carbon-components-react'
import { Content } from 'carbon-components-react/lib/components/UIShell'

import Nav from '../components/Nav'
import Table from '../components/Table'

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
      .get('/api/projects')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ margin: '5vh 0' }}>
            {data ? (
              <Table data={data} />
            ) : (
              <Wrapper>
                <Loading className="loading" />
              </Wrapper>
            )}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <Content
      id="main-content"
      style={{
        margin: '0',
        height: '100%',
        width: '100%',
      }}
    >
      {content}
    </Content>
  )
}

const Project = () => {
  return (
    <>
      <Nav active="Projects" />
      <StoryContent />
    </>
  )
}

export default Project
