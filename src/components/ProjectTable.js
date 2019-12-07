import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { DataTable } from 'carbon-components-react'
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable

const CustomTable = ({ data }) => {
  const [toDetail, setToDetail] = useState(false)
  const [detailId, setDetailId] = useState()

  // We would have a headers array like the following
  const headers = [
    {
      // `key` is the name of the field on the row object itself for the header
      key: 'proj_no',
      // `header` will be the name you want rendered in the Table Header
      header: 'Project No.',
    },
    {
      key: 'proj_name',
      header: 'Project Name',
    },
    {
      key: 'cli_name_ko',
      header: 'Client Name',
    },
    {
      key: 'start_date',
      header: 'Start',
    },
    {
      key: 'end_date',
      header: 'End',
    },
  ]

  data.map(v => (v['id'] = v.proj_no))

  return toDetail ? (
    <Redirect to={`/projects/detail/${detailId}`} />
  ) : (
    <DataTable
      rows={data}
      headers={headers}
      render={({ rows, headers, getHeaderProps }) => (
        <TableContainer title="Projects">
          <Table>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setDetailId(row.id)
                    setToDetail(true)
                  }}
                >
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  )
}

CustomTable.propTypes = {
  data: PropTypes.array.isRequired,
}

export default CustomTable
