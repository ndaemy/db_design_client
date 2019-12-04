import React from 'react'
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react'

const Summary = ({ data }) => (
  <StructuredListWrapper style={{ marginBottom: '2vh' }}>
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
        <StructuredListCell>Client Name (Korean)</StructuredListCell>
        <StructuredListCell>{data.cli_name_ko}</StructuredListCell>
      </StructuredListRow>
      <StructuredListRow>
        <StructuredListCell>Client Name (English)</StructuredListCell>
        <StructuredListCell>{data.cli_name_en}</StructuredListCell>
      </StructuredListRow>
    </StructuredListBody>
  </StructuredListWrapper>
)

export default Summary
