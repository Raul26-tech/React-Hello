import React from 'react'

export default function DateInput({
  labelDescription = 'Descrição do label',
  inputValue = '2022-04-24',
  onInputChange = null,
}) {
  const handleInputChange = ({ currentTarget }) => {
    if (onInputChange) {
      const newValue = currentTarget.value
      onInputChange(newValue)
    }
  }

  return (
    <div className="content">
      <label htmlFor="inputName" style={{ margin: '15px' }}>
        {labelDescription}
      </label>

      <input
        autoFocus
        id="inputName"
        type="date"
        style={{ padding: '2px', marginBottom: '50px' }}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  )
}
