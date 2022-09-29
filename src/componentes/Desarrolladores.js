import { Route } from "react-router-dom"
import Nav from './Nav';
import "./styles/DesarrolladoresStyle.css"

export default function Desarrolladores() {
    const users = [
        {
            id: 1,
            name: 'Abalos, Alan Nicolas',
            ima: 'https://robohash.org/user1',
            description: 'hola tengo 22 años soy estudiante de la unju sueño con hacer videojuegos.'

        },
        {
            id: 2,
            name: 'Cabrera, Fabricio Gaston',
            ima: 'https://robohash.org/user2',
            description: 'Fan del Anime y los juegos Hack and Slash, vicioso de toda la vida.'
        },
        {
            id: 3,
            name: 'Cordoba, Juan Brian Joel',
            ima: 'https://robohash.org/user3',
            description: 'Me gusta el asado, hacer musica y jugar a la pelota con amigos los fines de semana.'
        },
        {
            id: 4,
            name: 'Macedo, Facundo Emanuel',
            ima: 'https://robohash.org/user4',
            description: 'Hola, soy Facundo Macedo, tengo 24 años, vivía en San Miguel de Tucumán y estudié arte en la UNT, ahora estoy interesado en el diseño y desarrollo de videojuegos.'
        },
        {
            id: 5,
            name: 'Palacios, Carlos Javier',
            ima: 'https://robohash.org/user5',
            description: 'Mi nombre es Carlos Javier Palacios, me gusta escribir, crear historias, jugar y eventualmente programar.'
        },
        {
            id: 6,
            name: 'Sosa, Rodrigo Emanuel Lozano',
            ima: 'https://robohash.org/user6',
            description: 'Hola, soy Rodrigo, soy tranquilo, me gusta la programación y los videojuegos.'

        }
    ]
    return (
        <>
            {Nav()}
            <h1 className="title my-auto">Desarrolladores</h1>
            <div className="contenedor bg-dark">
                {users.map((user, i) => {
                    return (<div key={i}>
                        <section className="list border  border-5 rounded-start rounded-5">
                            <ul>
                                <h3 className="name text-uppercase fst-italic text-center ">{user.name}</h3>
                                <img className="mx-auto d-block" src={user.ima} />
                                <p className="description text-center text-capitalize font-monospace">{user.description}</p>
                            </ul>
                        </section>
                    </div>
                    );
                })}
            </div>
        </>
    )

}
