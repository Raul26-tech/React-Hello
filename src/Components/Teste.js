import React from 'react'

export default function Teste({ props }) {
  console.log(props)

  return <>Olá</>
}

// Exemplo de utilização de Props
// <Teste
//   number={10}
//   string="Teste"
//   visible
//   data={{ a: 1, b: 2 }}
//   onClick={() => {
//     console.log('Estou aqui')
//   }}
