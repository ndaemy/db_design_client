import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router'
import {
  Loading,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react'
import { Content } from 'carbon-components-react/lib/components/UIShell'

import Nav from '../components/Nav'

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

  useEffect(() => {
    axios
      .get(`/api/projects/${proj_no}`)
      .then(res => {
        setData(res.data[0])
      })
      .catch(err => console.log(err))
  }, [proj_no])

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ margin: '5vh 0' }}>
            {data ? (
              // console.log(data)
              <StructuredListWrapper>
                <StructuredListHead>
                  <StructuredListRow head>
                    <StructuredListCell head>Title</StructuredListCell>
                    <StructuredListCell head>Content</StructuredListCell>
                  </StructuredListRow>
                </StructuredListHead>
                <StructuredListBody>
                  <StructuredListRow>
                    <StructuredListCell>Project No.</StructuredListCell>
                    <StructuredListCell>{data.proj_no}</StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>Project Name</StructuredListCell>
                    <StructuredListCell>{data.proj_name}</StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>Start Date</StructuredListCell>
                    <StructuredListCell>{data.start_date}</StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>End Date</StructuredListCell>
                    <StructuredListCell>{data.end_date}</StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>
                      Client Name (Korean)
                    </StructuredListCell>
                    <StructuredListCell>{data.cli_name_ko}</StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>
                      Client Name (English)
                    </StructuredListCell>
                    <StructuredListCell>{data.cli_name_en}</StructuredListCell>
                  </StructuredListRow>
                </StructuredListBody>
              </StructuredListWrapper>
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
      style={{ margin: '0', width: '100%', height: '100%' }}
    >
      {content}
    </Content>
  )
}

const ProjectDetail = () => {
  return (
    <>
      <Nav active="Projects" />
      <StoryContent />
    </>
  )
}

export default ProjectDetail
