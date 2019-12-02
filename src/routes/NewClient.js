import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, TextInput } from 'carbon-components-react'
import { Content } from 'carbon-components-react/lib/components/UIShell'

import { useInput } from '../hooks/useInput'
import Nav from '../components/Nav'

const StoryContent = () => {
  const cliNameKo = useInput('')
  const cliNameEn = useInput('')
  const rep = useInput('')
  const handsel = useInput('')
  const [toClient, setToClient] = useState(false)

  const sendData = () => {
    const url = '/api/clients'
    const formData = {
      cli_name_ko: cliNameKo.value,
      cli_name_en: cliNameEn.value,
      representative: rep.value,
      handsel: handsel.value ? handsel.value : null,
    }

    return axios({ method: 'POST', url, data: formData }).catch(err =>
      console.log(err)
    )
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    sendData()
    setToClient(true)
  }

  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ margin: '5vh 0' }}>
            <Form onSubmit={handleFormSubmit} formNoValidate>
              <TextInput labelText="Client Name (Korean)" {...cliNameKo} />
              <TextInput labelText="Client Name (English)" {...cliNameEn} />
              <TextInput labelText="Representative" {...rep} />
              <TextInput labelText="Handsel (optional)" {...handsel} />
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
      {toClient ? (
        <Redirect to="/clients" />
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

const NewClient = () => {
  return (
    <>
      <Nav active="Clients" />
      <StoryContent />
    </>
  )
}

export default NewClient
