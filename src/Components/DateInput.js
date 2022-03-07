import React from 'react'

export default function DateInput({
  labelDescription = 'Descrição do label',
  inputValue = '2022-04-24',
  onInputChange = null,
  id = 'id_do_input_date',
  autoFocus,
}) {
  const handleInputChange = ({ currentTarget }) => {
    if (onInputChange) {
      const newValue = currentTarget.value
      onInputChange(newValue)
    }
  }

  return (
    <div className="content">
      <label htmlFor={id} style={{ margin: '15px' }}>
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        type="date"
        style={{ padding: '2px', marginBottom: '50px' }}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  )
}
