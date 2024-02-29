import Tabla from './Tabla'
import { useEffect, useState } from 'react'
import API from './api'

// Funcion que renderizar la tabla
function App() {
  // Llamada API
  // Para evitar que se renderice varias veces, se hace un useEfectt

  // Inserta una llamada API
  // Usestate para repintar la tabla/ el navegador
  const [platos, setPlatos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [restaurantes, setRestaurantes] = useState([])
  const [platosCompletos, setPlatosCompletos] = useState([])

  // UseEffect (funcion, [dependencia]). Si no hay dependencia, se ejecuta una sola llamada a la API.
  // Queremos hacer una sola llamada a la API cuando se inicie el componente.

  // Dependencia es una lista de variables que se usan para determinar si se debe ejecutar la función.
  // Si no hay dependencia, se ejecuta una sola llamada a la API.
  // Dentro de useeffect, una funcion y una dependencia, que se ejecuata cada vez que cambia las dependecias.

  useEffect(() => {
    fetch(API.CATEGORIES_URL)
      .then((res) => res.json())
      .then((categorias) => setCategorias(categorias))
      .catch((error) => console.log(error))
    fetch(API.DISHES_URL)
      .then((res) => res.json())
      .then((platos) => setPlatos(platos))

    fetch(API.RESTAURANTS_URL)
      .then((res) => res.json())
      .then((restaurantes) => setRestaurantes(restaurantes))
  }, [])

  // El corchete vacio es para una unica llamada a la API

  // La variable datosCargados se utiliza para saber si se debe renderizar la tabla o no.
  // Devuelve true si tiene datos, false si no tiene datos.
  const datosCargados = Boolean(platosCompletos.length)

  // Cuando restaurantes, categorias y platos cambien, se ejecutara la funcion.

  useEffect(() => {
    // merge restaurantes and platos by fields restaurante.restauranteID === plato.restauranteID
    const platosExtendido = platos.map((plato) => ({
      ...plato,
      ...restaurantes.find(
        (restaurante) => restaurante.restauranteID === plato.restauranteID
      ),
      ...categorias.find(
        (categoria) => categoria.categoriaID === plato.categoriaID
      ),
    }))
    setPlatosCompletos(platosExtendido)
  }, [platos, categorias, restaurantes])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Lista de Restaurantes</h1>
      {datosCargados && <Tabla platos={platosCompletos} />}
      {/* Si los datos no estan cargados, muestra un mensaje de carga. */}
      {!datosCargados && <p>Cargando datos...</p>}
    </div>
  )
}

export default App
