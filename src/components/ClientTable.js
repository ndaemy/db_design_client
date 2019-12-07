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

const CustomTable = ({ data }) => {
  // We would have a headers array like the following
  const headers = [
    {
      // `key` is the name of the field on the row object itself for the header
      key: 'cli_name_ko',
      // `header` will be the name you want rendered in the Table Header
      header: 'Client Name (Korean)',
    },
    {
      key: 'cli_name_en',
      header: 'Client Name (English)',
    },
    {
      key: 'representative',
      header: 'Representative',
    },
    {
      key: 'handsel',
      header: 'Handsel',
    },
  ]

  data.map(v => (v['id'] = v.cli_id))

  return (
    <DataTable
      rows={data}
      headers={headers}
      render={({ rows, headers, getHeaderProps }) => (
        <TableContainer title="Clients">
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
                    <TableCell key={cell.id}>
                      {cell.value ? cell.value : '-'}
                    </TableCell>
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
