import React from 'react'

export default function Person({personUrl}) {
  return (
    <div>
        <img className='personImage' src={personUrl} />
    </div>
  )
}
