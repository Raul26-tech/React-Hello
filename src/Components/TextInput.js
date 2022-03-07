import React from 'react'

export default function TextInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = 'id_do_input_text',
  autoFocus = false,
}) {
  const handleInputChange = ({ currentTarget }) => {
    if (onInputChange) {
      const newValue = currentTarget.value
      onInputChange(newValue)
    }
  }

  return (
    <div className="content">
      <label htmlFor={id} style={{ margin: '30px 15px' }}>
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        type="text"
        style={{ padding: '2px', width: '300px' }}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  )
}
