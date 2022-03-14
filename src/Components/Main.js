import React, { useEffect, useState } from 'react'
import DateInput from './DateInput'
import TextInput from './TextInput'
import getAgeFrom from '../helpers/dateHelpers'
import Timer from './Timer'
import CheckboxInput from './CheckboxInput'
import OnlineOffline from './OnlineOffline'

export default function Main() {
  const [name, setName] = useState('Raul')
  const [birthDate, setBirthDate] = useState('2001-06-26')
  const [showTimer, setshowTimer] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  

  useEffect(() => {

    const toggleOnline = () => {
      setIsOnline(true)
    }

    const toggleOffline = () => {
      setIsOnline(false)
    }

    window.addEventListener('online', toggleOnline)
    window.addEventListener('offline', toggleOffline)

    return () => {
      window.removeEventListener('online', toggleOnline)
      window.removeEventListener('offline', toggleOffline)
    }

  }, [])


  const handleNameChange = (newName) => {
    setName(newName)
  }

  const handleBirthDateChange = (newBirthDate) => {
    setBirthDate(newBirthDate)
  }

  const toggleShowTimer = () => {
    setshowTimer(currentShowTimer => !currentShowTimer)
  }

  return (
    <main>
      <OnlineOffline isOnline={isOnline}/>
      {
        showTimer && (
          <div className="" style={{
            textAlign: 'right', 
            margin: '20px',
            padding: '1%'
          }}>
            <Timer />
          </div>
      )}
      
      <CheckboxInput labelDescription='Mostrar cronômetro' 
      onCheckboxChange={toggleShowTimer}/>

      <TextInput
        id="textInput"
        labelDescription="Digite o seu nome:"
        inputValue={name}
        onInputChange={handleNameChange}
        autoFocus
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
          id="dateInput"
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
          O seu nome é {name}, com {name.length} caracteres, você possuí {'\n'}
          {getAgeFrom(birthDate)} anos.
        </span>
      </p>
    </main>
  )
}
