import React, { useState } from 'react'
import { Button, Form, TextInput } from 'carbon-components-react'

const useInput = init => {
  const [value, setValue] = useState(init)

  const onChange = e => {
    const {
      target: { value },
    } = e
    setValue(value)
  }

  return { value, onChange }
}

const useInputForPw = init => {
  const [value, setValue] = useState(init)
  const [invalid, setInvalid] = useState(false)

  const onChange = e => {
    const {
      target: { value },
    } = e
    setValue(value)
  }

  const onBlur = e => {
    const {
      target: { value },
    } = e
    setValue(value)
    setInvalid(!/(?=.*\d)(?=.*[a-z]).{6,}/.test(value))
  }

  return { value, invalid, onChange, onBlur }
}

export default () => {
  const id = useInput()
  const password = useInputForPw()

  return (
    <>
      <Form style={{ width: '30vw', minWidth: '200px' }}>
        <TextInput labelText="ID" {...id} />
        <TextInput
          type="password"
          required
          labelText="Password"
          invalidText="Your password must be at least 6 characters as well as contain at least one lowercase, and one number."
          {...password}
        />
        <Button style={{ marginTop: '20px' }}>Submit</Button>
      </Form>
    </>
  )
}
