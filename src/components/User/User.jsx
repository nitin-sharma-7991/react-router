import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {name} = useParams()
  return (
    <div className='text-3xl bg-orange-400 text-center'>User {name}</div>
  )
}

export default User