import React from 'react'
import Employee from './components/Employee'

const employee = {
  name: '가나다',
  emp_no: '12345678',
  ssn: '971212-1******',
  final_edu: '명지대학교 컴퓨터공학과 학사',
  enter_date: '2019. 10. 23',
}

export default () => {
  return (
    <Employee
      name={employee.name}
      emp_no={employee.emp_no}
      ssn={employee.ssn}
      final_edu={employee.final_edu}
      enter_date={employee.enter_date}
    />
  )
}
