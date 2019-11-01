import React, { Component } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'

class EmployeeList extends Component {
  render() {
    const { employeeList } = this.props
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Emp No.</TableCell>
            <TableCell>SSN</TableCell>
            <TableCell>Final Education</TableCell>
            <TableCell>Enter Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList
            ? employeeList.map(employee => (
                <Employee
                  name={employee.name}
                  emp_no={employee.emp_no}
                  ssn={employee.ssn}
                  final_edu={employee.final_edu}
                  enter_date={employee.enter_date}
                />
              ))
            : ''}
        </TableBody>
      </Table>
    )
  }
}

class Employee extends Component {
  render() {
    const { name, emp_no, ssn, final_edu, enter_date } = this.props
    return (
      <TableRow key={emp_no}>
        <TableCell>{name}</TableCell>
        <TableCell>{emp_no}</TableCell>
        <TableCell>{ssn}</TableCell>
        <TableCell>{final_edu}</TableCell>
        <TableCell>{enter_date}</TableCell>
      </TableRow>
    )
  }
}

export default EmployeeList
