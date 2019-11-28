import React from 'react'
import { Button, Form, TextInput } from 'carbon-components-react'

import {
  useInput,
  useInputForEmpNo,
  useInputForPw,
  useInputForPwConfirm,
} from '../../components/useInput'

export default () => {
  const empNo = useInputForEmpNo('')
  const id = useInput('')
  const password = useInputForPw('')
  const passwordConfirm = useInputForPwConfirm('')

  return (
    <>
      <Form style={{ width: '30vw', minWidth: '200px' }}>
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
        <Button style={{ marginTop: '2vh' }}>Register</Button>
      </Form>
    </>
  )
}
