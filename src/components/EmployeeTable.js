import React from 'react'
import PropTypes from 'prop-types'
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

const CustomTable = ({ data, type }) => {
  const titleProps = {
    title: type === 'All' ? 'All Employees' : 'Dev Employees',
  }

  // We would have a headers array like the following
  // `key` is the name of the field on the row object itself for the header
  // `header` will be the name you want rendered in the Table Header
  const headers = [
    {
      key: 'emp_no',
      header: 'Employee No.',
    },
    {
      key: 'emp_name',
      header: 'Employee Name',
    },
    {
      key: 'ssn',
      header: 'SSN',
    },
    {
      key: 'final_edu',
      header: 'Final Education',
    },
    {
      key: 'enter_date',
      header: 'Entered Date',
    },
    {
      key: 'dept_name',
      header: 'Department Name',
    },
  ]

  if (type === 'Dev') {
    headers.push({ key: 'tech_grade', header: 'Tech Grade' })
  }

  data.map(v => (v['id'] = v.emp_no))

  return (
    <DataTable
      rows={data}
      headers={headers}
      render={({ rows, headers, getHeaderProps }) => (
        <TableContainer {...titleProps}>
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
                <TableRow key={row.id}>
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
  type: PropTypes.string,
}

export default CustomTable
