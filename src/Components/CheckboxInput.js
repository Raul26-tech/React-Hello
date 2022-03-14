import React from 'react'

export default function CheckboxInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor padrão do input',
  onCheckboxChange = null,
  id = 'id_do_input_checkbox',
  autoFocus = false,
}) {
  const handleInputChange = () => {
    if ( onCheckboxChange) {
      onCheckboxChange()
    }
  }

  return (
    <div className="content">
      <input
        autoFocus={autoFocus}
        id={id}
        type="checkbox"
        style={{ padding: '2px', width: '20px', margin: '15px' }}
        value={inputValue}
        onChange={handleInputChange}
      />
       <label htmlFor={id} style={{ margin: '20px 5px' }}>
        {labelDescription}
      </label>
    </div>
  )
}
