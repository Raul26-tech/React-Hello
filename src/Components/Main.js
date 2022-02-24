import React, { useState } from 'react'
import DateInput from './DateInput'
import TextInput from './TextInput'

export default function Main() {
  const [name, setName] = useState('Raul')
  const [birthDate, setBirthDate] = useState('2022-04-24')

  const handleNameChange = (newName) => {
    setName(newName)
  }

  const handleBirthDateChange = (newBirthDate) => {
    setBirthDate(newBirthDate)
  }

  return (
    <main>
      <TextInput
        labelDescription="Digite o seu nome:"
        inputValue={name}
        onInputChange={handleNameChange}
      />
      <p
        style={{
          marginTop: '15px',
          fontFamily: 'sans-serif',
          textAlign: 'left',
          fontSize: '16px',
        }}
      >
        <DateInput
          labelDescription="Digite sua data de nascimento"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <span
          style={{
            color: '#8a94d1',
            fontSize: '18px',
            margin: '15px',
          }}
        >
          O seu nome é {name}, com {name.length} caracteres
        </span>
      </p>
    </main>
  )
}
