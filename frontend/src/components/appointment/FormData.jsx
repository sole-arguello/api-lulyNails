import React from 'react'

export default function FormData() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Nombre y Apellido</label>
        <input type="text" placeholder='Ingrese su nombre y apellido'/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Ingrese su email'/>
        <label htmlFor="">Phone</label>
        <input type="phone" placeholder='Ingrese su Telefono'/>
      </form>
    </div>
  )
}
