import { useState } from 'react'

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

const useInputForEmpNo = init => {
  const [value, setValue] = useState(init)
  const [invalid, setInvalid] = useState(init)

  const onChange = e => {
    const {
      target: { value },
    } = e
    setValue(value)
  }

  const onBlur = e => {
    setInvalid(!/^[0-9]{8}$/.test(value))
  }

  return { value, invalid, onChange, onBlur }
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
    setInvalid(!/(?=.*\d)(?=.*[a-z]).{6,}/.test(value))
  }

  return { value, invalid, setInvalid, onChange, onBlur }
}

const useInputForPwConfirm = init => {
  const [value, setValue] = useState(init)
  const [invalid, setInvalid] = useState(false)

  const onChange = e => {
    const {
      target: { value },
    } = e
    setValue(value)
  }

  return { value, invalid, setInvalid, onChange }
}

export { useInput }
export { useInputForEmpNo }
export { useInputForPw }
export { useInputForPwConfirm }
