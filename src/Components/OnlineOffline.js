import React from 'react'

export default function OnlineOffline({isOnline = true}) {

  return (
    <span  style={{ margin: '20px', fontFamily: 'Oswald'}}>{isOnline ? 'Online' : 'Offline'} </span>
  )
   
}
