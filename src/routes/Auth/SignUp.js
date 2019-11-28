import React from 'react'
import { Button, Form, TextInput } from 'carbon-components-react'
import axios from 'axios'

import {
  useInput,
  useInputForEmpNo,
  useInputForPw,
  useInputForPwConfirm,
} from '../../hooks/useInput'

export default () => {
  const empNo = useInputForEmpNo('')
  const id = useInput('')
  const password = useInputForPw('')
  const passwordConfirm = useInputForPwConfirm('')

  const sendData = () => {
    const url = `/api/employees/signup/${empNo.value}`
    const formData = {
      id: id.value,
      password: password.value,
    }

    return axios({ method: 'PUT', url, data: formData })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    sendData().then(response => console.log(response.data))
    // TODO: Upper line is not yet complete.
  }

  return (
    <>
      <Form
        style={{ width: '30vw', minWidth: '200px' }}
        onSubmit={handleFormSubmit}
      >
        <TextInput
          labelText="Emp No."
          invalidText="Your employee Number must be 8 digit-number."
          {...empNo}
        />
        <TextInput labelText="ID" {...id} />
        <TextInput
          type="password"
          required
          labelText="Password"
          invalidText="Your password must be at least 6 characters as well as contain at least one lowercase, and one number."
          {...password}
          onBlur={e => {
            const {
              target: { value },
            } = e
            password.setInvalid(!/(?=.*\d)(?=.*[a-z]).{6,}/.test(value))
            password.value === passwordConfirm.value
              ? passwordConfirm.setInvalid(false)
              : passwordConfirm.setInvalid(true)
          }}
        />
        <TextInput
          type="password"
          required
          labelText="Password"
          invalidText="Password not match!"
          {...passwordConfirm}
          onBlur={() => {
            password.value === passwordConfirm.value
              ? passwordConfirm.setInvalid(false)
              : passwordConfirm.setInvalid(true)
          }}
        />
        <Button style={{ marginTop: '2vh' }} type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  )
}
