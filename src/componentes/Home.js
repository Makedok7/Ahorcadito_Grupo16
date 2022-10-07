import Nav from './Nav'
import "../styles/inicio-style.css"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='bg-dark' style={{ height: "800px" }}>
            {Nav()}
            <div id="div1" className="container">
                <div className="Titulo" id="titulo">
                    <header>
                        <h1>Grupo 16</h1>
                    </header>
                </div>
                <dl id="nav">
                    <dt className="nav-item">Ábalos Alan Nicolás</dt>
                    <dt className="nav-item">Cabrera Fabricio Gastón</dt>
                    <dt className="nav-item">Córdoba Juan Brian Joel</dt>
                    <dt className="nav-item">Lozano Rodrigo Emanuel</dt>
                    <dt className="nav-item">Mecedo Facundo</dt>
                    <dt className="nav-item">Palacios Carlos Javier</dt>
                </dl>
                <div id="juego" >
                    <h1>Juego El Ahorcadito</h1>
                    <Link to='/juego' className='text-decoration-none'>
                        <button className="boton">Iniciar Juego</button>
                    </Link>
                </div>
                <div className="row ">
                    <section id="img1" className='col'>
                        <img src="../public/images/LogoJuego" width="350" height="350" alt="LogoJuego" className='img-fluid rounded' />
                    </section>
                    <aside id="reglas" className='col '>
                        <h2>Reglas</h2>
                        <ul className='list-inline'>
                            <li>Se mostrará el inicio y el fin de una palabra, y tienes que adivinar cuál es (LETRA por LETRA).</li>
                            <li>Debes indicar una letra a la vez</li>
                            <li>Si elijes una letra que no existe en la palabra, entonces perderás una oportunidad</li>
                            <li>Cada vez que falles al elegir una letra, se dibujará una parte de una figura</li>
                            <li>Si fallas los suficiente, la figura se completará y PERDERÁS</li>
                            <li>Si logras adivinar todas las letras de la palabra, entonces GANARÁS</li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    )
}