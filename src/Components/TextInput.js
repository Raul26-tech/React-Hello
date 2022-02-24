import React from 'react'

export default function TextInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor padrão do input',
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
      <label htmlFor="inputName" style={{ margin: '30px 15px' }}>
        {labelDescription}
      </label>

      <input
        autoFocus
        id="inputName"
        type="text"
        style={{ padding: '2px', width: '300px' }}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  )
}
