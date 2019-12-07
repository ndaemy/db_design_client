import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router'
import { Button, Loading } from 'carbon-components-react'
import { Content } from 'carbon-components-react/lib/components/UIShell'

import Nav from '../../../components/Nav'
import Member from './Member'

// FIXME: not responsive.
const Wrapper = styled.p`
  min-height: 75vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

const StoryContent = () => {
  const { proj_no } = useParams()
  const [data, setData] = useState()
  const [toNew, setToNew] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/team_members/${proj_no}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [proj_no])

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bs--col-lg-13">
          <p style={{ width: '100%', margin: '5vh 0' }}>
            {data ? (
              <Member data={data} />
            ) : (
              <Wrapper>
                <Loading className="loading" />
              </Wrapper>
            )}
          </p>
          <Button onClick={() => setToNew(true)}>New Team Member</Button>
        </div>
      </div>
    </div>
  )

  if (toNew) {
    return <Redirect to={`/projects/detail/${proj_no}/team_members/new`} />
  }

  return (
    <Content
      id="main-content"
      style={{ margin: '0', width: '100%', height: '100%' }}
    >
      {content}
    </Content>
  )
}

const TeamMembers = () => {
  return (
    <>
      <Nav active="Projects" />
      <StoryContent />
    </>
  )
}

export default TeamMembers
