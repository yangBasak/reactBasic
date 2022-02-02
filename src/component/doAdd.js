import React, { useState } from 'react'
import InputField from './inputField'

function DoAdd({ addToList }) {
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")
  const [errorText, setErrorText] = useState("")
  // const [dateError, setDateError] = useState("")

  const reset = () => {
    setContent("");
    setDate("");
  }

  const validateForm = () => {
    let validated = true;
    if (!content) {
      setErrorText("내용이 없습니다")
      validated = false
    } else if (!date) {
      setErrorText("날짜를 선택해주세요")
      validated = false
    }
    return validated
  }
  const resetErrorText = () => {
    setErrorText("")
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      addToList({
        id: Date.now(),
        content: content,
        date: date
      })
      reset()
      resetErrorText()
    }
  }


  return (
    <form onSubmit={onSubmit}>
      <InputField
        placeholder='내용을 입력하세요'
        value={content}
        onChange={(e) => { setContent(e.target.value) }}
        type="text"
      />
      <InputField
        value={date}
        onChange={(e) => { setDate(e.target.value) }}
        type="date"
      />
      <button type='submit'>추가</button>
      <div style={{ color: "crimson", fontSize: "12px" }}>{errorText}</div>
    </form>
  )
}
export default DoAdd