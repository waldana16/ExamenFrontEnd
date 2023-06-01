import './App.css'
import { useState } from 'react'
import Card from './components/Card'


 

function App() {
  const [pelicula, setPelicula] = useState("");
  const [genero, setGenero] = useState("");
  const [show, setShow] = useState(true);

  const handlerEnviar = (event) => {
    event.preventDefault();
    if (pelicula.length < 3 || pelicula.trim() === "" || genero.length < 6) {
      alert("Información incorrecta, por favor verifique");
    } else {
      setShow(true);
    }
  } 

  return (

    <>
    

      <div className='App'>
      <h1>Ingrese la información de su pelicula favorita</h1>
      <form className='form1' onSubmit={handlerEnviar}>
        <label>Pelicula</label>
        <input value={pelicula} onChange={e => setPelicula(e.target.value)}/>
        <label>Genero</label>
        <input value={genero} onChange={e => setGenero(e.target.value)}/>
        <button type='submit'>Enviar</button>
        </form>
        
        {show && (

<Card pelicula={pelicula} genero={genero} />

)}

      </div>

    </>

  )

}


 

export default App