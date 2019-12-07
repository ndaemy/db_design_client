import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {
  Button,
  DatePicker,
  DatePickerInput,
  Form,
  Select,
  SelectItem,
} from 'carbon-components-react'
import { Content } from 'carbon-components-react/lib/components/UIShell'

import Nav from '../../../components/Nav'
import DateFormat from '../../../utils/DateFormat'

const StoryContent = () => {
  const { proj_no } = useParams()
  const [devList, setDevList] = useState()
  const [empNo, setEmpNo] = useState()
  const [role, setRole] = useState()
  const [joinDate, setJoinDate] = useState()
  const [outDate, setOutDate] = useState()
  const [toMember, setToMember] = useState(false)

  useEffect(() => {
    axios
      .get('/api/employees?dept=4004')
      .then(res => {
        setDevList(res.data)
      })
      .catch(err => console.log(err))
  }, [proj_no])

  const sendData = () => {
    const url = `/api/team_members/${proj_no}`
    const formData = {
      emp_no: empNo,
      role: role,
      join_date: DateFormat(joinDate, '-'),
      out_date: outDate ? DateFormat(outDate, '-') : null,
    }

    return axios({ method: 'POST', url, data: formData }).catch(err =>
      console.log(err)
    )
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    sendData()
    setToMember(true)
  }

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ margin: '5vh 0 ' }}>
            <Form onSubmit={handleFormSubmit}>
              <Select
                defaultValue="placeholder-item"
                labelText="Select Employee"
                onChange={e => {
                  const {
                    target: { value },
                  } = e
                  setEmpNo(value)
                }}
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Select employee"
                />
                {devList ? (
                  devList.map(v => (
                    <SelectItem
                      value={v.emp_no}
                      text={`${v.emp_no} / ${v.emp_name}`}
                    />
                  ))
                ) : (
                  <SelectItem disabled value="fake" text="Loading..." />
                )}
              </Select>
              <Select
                defaultValue="placeholder-item"
                labelText="Select Role"
                onChange={e => {
                  const {
                    target: { value },
                  } = e
                  setRole(value)
                }}
              >
                <SelectItem
                  diabled
                  hidden
                  value="placeholder-item"
                  text="Select role"
                />
                <SelectItem value="PM" text="PM" />
                <SelectItem value="PL" text="PL" />
                <SelectItem value="Analyst" text="Analyst" />
                <SelectItem value="Designer" text="Designer" />
                <SelectItem value="Programmer" text="Programmer" />
                <SelectItem value="Tester" text="Tester" />
              </Select>
              <DatePicker
                datePickerType="single"
                dateFormat={'Y/m/d'}
                onClose={e => {
                  setJoinDate(e[0])
                }}
              >
                <DatePickerInput
                  labelText="Join Date"
                  pattern="[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}"
                  placeholder="yyyy/mm/dd"
                />
              </DatePicker>
              <DatePicker
                datePickerType="single"
                dateFormat={'Y/m/d'}
                onClose={e => {
                  setOutDate(e[0])
                }}
              >
                <DatePickerInput
                  labelText="Out Date"
                  pattern="[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}"
                  placeholder="yyyy/mm/dd"
                />
              </DatePicker>
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
      {toMember ? (
        <Redirect to={`/projects/detail/${proj_no}/team_members`} />
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

const NewTeamMember = () => {
  return (
    <>
      <Nav active="Projects" />
      <StoryContent />
    </>
  )
}

export default NewTeamMember
