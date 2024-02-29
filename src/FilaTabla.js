import ReadMoreReact from 'read-more-react'

function FilaTabla({ plato, index }) {
  const {
    plato: nombrePlato,
    descripcion,
    precio,
    categoria,
    restaurante,
  } = plato

  const minimumLength = 5
  const idealLength = 10
  const maxLength = 15
  const readMoreText = 'Leer más'

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{nombrePlato}</td>
      <td>
        <ReadMoreReact
          text={descripcion || ' '}
          min={minimumLength}
          ideal={idealLength}
          max={maxLength}
          readMoreText={readMoreText}
        />
      </td>
      <td>{precio.toFixed(2)}€</td>
      <td>{categoria}</td>
      <td>{restaurante}</td>
    </tr>
  )
}
export default FilaTabla
