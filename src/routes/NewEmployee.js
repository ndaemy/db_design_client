import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {
  Button,
  DatePicker,
  DatePickerInput,
  Form,
  Select,
  SelectItem,
  TextInput,
} from 'carbon-components-react'
import { Content } from 'carbon-components-react/lib/components/UIShell'

import Nav from '../components/Nav'
import { useInput, useInputForEmpNo, useInputForSSN } from '../hooks/useInput'
import DateFormat from '../utils/DateFormat'

const StoryContent = () => {
  const [deptList, setDeptList] = useState()
  const empNo = useInputForEmpNo('')
  const empName = useInput('')
  const ssn = useInputForSSN('')
  const finalEdu = useInput('')
  const [enterDate, setEnterDate] = useState()
  const [deptNo, setDeptNo] = useState()
  const [toEmployee, setToEmployee] = useState(false)

  useEffect(() => {
    axios
      .get('/api/departments')
      .then(res => {
        setDeptList(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const sendData = () => {
    const url = '/api/employees'
    const formData = {
      emp_no: empNo.value,
      emp_name: empName.value,
      ssn: ssn.value,
      final_edu: finalEdu.value,
      enter_date: DateFormat(enterDate, '-'),
      dept_no: deptNo,
    }

    return axios({ method: 'POST', url, data: formData }).catch(err =>
      console.log(err)
    )
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    sendData()
    setToEmployee(true)
  }

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ margin: '5vh 0' }}>
            <Form onSubmit={handleFormSubmit}>
              <TextInput
                labelText="Employee No."
                invalidText="Employee Number must be 8 digit-number."
                {...empNo}
              />
              <TextInput labelText="Employee Name" {...empName} />
              <TextInput
                labelText="Social Security Number"
                invalidText="Social Security Number format is not correct."
                {...ssn}
              />
              <TextInput labelText="Final Education" {...finalEdu} />
              <DatePicker
                datePickerType="single"
                dateFormat={'Y/m/d'}
                onClose={e => setEnterDate(e[0])}
              >
                <DatePickerInput
                  labelText="Enter Date"
                  pattern="[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}"
                  placeholder="yyyy/mm/dd"
                />
              </DatePicker>
              <Select
                defaultValue="placeholder-item"
                onChange={e => {
                  const {
                    target: { value },
                  } = e
                  setDeptNo(value)
                }}
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Select Department"
                />
                {/* Import list from departments table */}
                {deptList ? (
                  deptList.map(v => (
                    <SelectItem value={v.dept_no} text={v.dept_name} />
                  ))
                ) : (
                  <SelectItem disabled value="fake" text="Loading..." />
                )}
              </Select>
              <Button type="submit" style={{ marginTop: '2vh' }}>
                Submit
              </Button>
            </Form>
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {toEmployee ? (
        <Redirect to="/employees" />
      ) : (
        <Content
          id="main-content"
          style={{ margin: '0', width: '100%', height: '100%' }}
        >
          {content}
        </Content>
      )}
    </>
  )
}

const NewEmployee = () => {
  return (
    <>
      <Nav active="Employees" />
      <StoryContent />
    </>
  )
}

export default NewEmployee
