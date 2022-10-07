import { Route } from "react-router-dom"
import Nav from './Nav';
import "../styles/DesarrolladoresStyle.css";
import developers from '../json/desarrolladores.json'

export default function Desarrolladores() {
    return (
        <>
            {Nav()}
            <h1 className="title my-auto">Desarrolladores</h1>
            <div className="contenedor bg-dark">
                {developers.map((developers) => {
                    return (<div key={developers}>
                        <section className="list border  border-5 rounded-start rounded-5">
                            <ul>
                                <h3 className="name text-uppercase fst-italic text-center ">{developers.name}</h3>
                                <h3 className="name text-uppercase fst-italic text-center ">{developers.years}</h3>
                                <img className="mx-auto d-block" src={developers.photo} />
                                <p className="description text-center text-capitalize font-monospace">{developers.interests}</p>
                                <a  href={developers.linktoGit} target="_blank" className='text-decoration-none'>
                                    <button className="btn btn-danger d-grid gap-2 col-6 mx-auto">Github Link</button>
                                </a>
                            </ul>
                        </section>
                    </div>
                    );
                })}
            </div>
        </>
    )

}
