import React from 'react'

const Item = (prop) => {
  return (
    <>
      <td>{prop.producto.id}</td>
      <td>{prop.producto.rubro}</td>
      <td>{prop.producto.nombre}</td>
      <td>{prop.producto.valorUnidad}</td>
      <td>{prop.producto.cant}</td>
      <td>{prop.producto.valorTotal}</td>
    </>
    
  )
}

export default Item