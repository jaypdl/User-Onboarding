import React from 'react'

export default function DisplayUsers(props) {
  const { user } = props

  return(
    <div>
      {`😮👉 Name: ${user.name}, Email: ${user.email}, Password: ${user.password}, User agrees? ${user.tos} `}
      <div>*****</div>
    </div>
  )

}