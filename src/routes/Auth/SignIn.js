import React from 'react'
import { Button, Form, TextInput } from 'carbon-components-react'

import { useInput, useInputForPw } from '../../components/useInput'

export default () => {
  const id = useInput('')
  const password = useInputForPw('')

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
        <Button style={{ marginTop: '2vh' }}>Submit</Button>
      </Form>
    </>
  )
}
