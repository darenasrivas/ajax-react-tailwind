import FilaTabla from './FilaTabla'
function Tabla({ platos }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Plato</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoría</th>
            <th scope="col">Restaurante</th>
          </tr>
        </thead>
        <tbody>
          {/* body */}
          {/*Creamos un componente llamado FilaTabla que rellenará cada fila de la tabla */}
          {platos.map((plato, index) => (
            <FilaTabla key={plato.platoID} index={index} plato={plato} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Tabla

// import FilaTabla from './FilaTabla'

// // A la tabla le pasamos unas propiedades

// function Tabla({ categorias, platos, restaurantes }) {
//   return (
//     <div>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Plato</th>
//               <th scope="col">Descripción</th>
//               <th scope="col">Precio</th>
//               <th scope="col">Categoría</th>
//               <th scope="col">Restaurante</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* body */}

//             {/* Componente de REACT que genera una funcion FilaTabla para cada plato */}

//             {/* Cargo Filatabla y le mandoplato a la funcion FilaTabla. */}
//             {platos.map((plato, index) => (
//               <FilaTabla
//                 key={plato.platoID}
//                 index={index}
//                 plato={plato}
//                 restaurantes={restaurantes}
//                 categoria={categorias}
//               />
//             ))}

//             {/* Recorre los platos y retorna
//             {platos.map((plato, index) => {
//               // Find al array de categorias, busca el id de la categoria y retorna el nombre de la categoria.
//               console.log(plato.category)
//               const categoria = categorias.find(
//                 (categoria) => categoria.categoriaID === plato.categoriaID
//               )
//               const restaurante = restaurantes.find(
//                 (restaurante) =>
//                   restaurante.restauranteID === plato.restauranteID
//               )
//               return (
//                 <tr key={plato.ID}>
//                   <td>{index + 1}</td>
//                   <td>{plato.plato}</td>
//                   <td>{plato.descripcion}</td>
//                   <td>{plato.precio.toFixed(2)} €</td>
//                   <td>{categoria.categoria}</td>
//                   <td>{restaurante.restaurante}</td>
//                 </tr>
//               )
//             })} */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Tabla
