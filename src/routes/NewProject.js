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
import { useInput } from '../hooks/useInput'

const StoryContent = () => {
  const [clientList, setClientList] = useState()
  const projName = useInput('')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [cliId, setCliId] = useState()
  const [toProject, setToProject] = useState(false)

  useEffect(() => {
    axios
      .get('/api/clients')
      .then(res => {
        setClientList(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const setDateFormat = originalDate => {
    const year = originalDate.getFullYear()
    const month = originalDate.getMonth()
    const date = originalDate.getDate()

    return `${year}-${month}-${date}`
  }

  const sendData = () => {
    const url = '/api/projects'
    const formData = {
      proj_name: projName.value,
      start_date: setDateFormat(startDate),
      end_date: setDateFormat(endDate),
      cli_id: cliId,
    }

    return axios({ method: 'POST', url, data: formData }).catch(err =>
      console.log(err)
    )
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    sendData()
    setToProject(true)
  }

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ margin: '5vh 0' }}>
            <Form onSubmit={handleFormSubmit} formNoValidate>
              <TextInput labelText="Project Name" {...projName} />
              <DatePicker
                id="date-picker"
                datePickerType="range"
                dateFormat={'Y/m/d'}
                invalid={false}
                onClose={e => {
                  setStartDate(e[0])
                  setEndDate(e[1])
                }}
              >
                <DatePickerInput
                  id="date-picker-input-id-start"
                  labelText="Start date"
                  pattern="[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}"
                  placeholder="yyyy/mm/dd"
                />
                <DatePickerInput
                  id="date-picker-input-id-end"
                  labelText="End date"
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
                  setCliId(value)
                }}
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Select client"
                />
                {/* Import list from clients table */}
                {clientList ? (
                  clientList.map(v => (
                    <SelectItem value={v.cli_id} text={v.cli_name_ko} />
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
      {toProject ? (
        <Redirect to="/projects" />
      ) : (
        <Content
          id="main-content"
          style={{
            margin: '0',
            height: '100%',
            width: '100%',
          }}
        >
          {content}
        </Content>
      )}
    </>
  )
}

const NewProject = () => {
  return (
    <>
      <Nav active="Projects" />
      <StoryContent />
    </>
  )
}

export default NewProject
