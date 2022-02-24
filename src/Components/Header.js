import React from 'react'

export default function Header({ children }) {
  return (
    <header>
      <div className="welcome" style={{ marginBottom: '15px' }}>
        <h1 className="title">{children}</h1>
      </div>
    </header>
  )
}
