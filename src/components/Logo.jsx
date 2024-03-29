import React from 'react'
import { logoUrl } from '../constants/images'

export default function Logo({collapsed}) {
  return (
        <div  style={{ marginLeft: collapsed ? 25 : 2 }}>
            <img src={logoUrl} width={'30px'} style={{borderRadius:20}}/>
        </div>
  )
}
