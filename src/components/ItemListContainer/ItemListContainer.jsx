import React from "react";
import Item from "../Item/Item";
import Table from "react-bootstrap/Table";

const ItemListContainer = (prop) => {
  const productosEnCarrito = [
    {
      id: 1,
      rubro: "Celulares",
      nombre: "Iphone 11 Rojo",
      valorUnidad: 520000,
      cant: 1,
      valorTotal: 520000
    },
    {
      id: 2,
      rubro: "Fitness",
      nombre: "mancuerna 5 kg Negro",
      valorUnidad: 15000,
      cant: 4,
      valorTotal: 60000
    },
    {
      id: 3,
      rubro: "Celulares",
      nombre: "Mancuerna 10 kg Transparente",
      valorUnidad: 87000,
      cant: 1,
      valorTotal: 87000
    },
  ];

  return (
    <div>
      <h2>{prop.greeting}</h2>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Rubro</th>
            <th>Nombre</th>
            <th>$ Unidad</th>
            <th>Cant.</th>
            <th>$ Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Item producto={productosEnCarrito[0]} />
          </tr>
          <tr>
            <Item producto={productosEnCarrito[1]} />
          </tr>
          <tr>
            <Item producto={productosEnCarrito[2]} />
          </tr>
        </tbody>
      </Table>
      <div></div>
    </div>
  );
};

export default ItemListContainer;
