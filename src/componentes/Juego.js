import React, { useState } from 'react'
import Nav from './Nav'
import "./styles/Juego.css"

export default function Juego() {
    const [countJugador1, setCountJugador1] = useState(0);
    const [countJugador2, setCountJugador2] = useState(0);
    const [eleccionJugador1, setEleccionJugador1] = useState(0);
    const [eleccionJugador2, setEleccionJugador2] = useState(0);
    const [resultado, setResultado] = useState("_");
    let ganador = "";

    //Funcion del boton Jugar
    function jugar() {
        setEleccionJugador2(Math.floor(Math.random() * 3))//Eleccion al azar del jugador2 o "maquina"
        ganador = (verificarGanador(eleccionJugador1, eleccionJugador2))
        setResultado(ganador)
        contadorJugadores()
        cambiarjugador2(eleccionJugador2)
    };
    //Funcion para ir aumentando el puntaje de los jugadores
    function contadorJugadores() {
        if (ganador == "Jugador1") {
            setCountJugador1(countJugador1 + 1)
        }
        else if (ganador == "Jugador2") {
            setCountJugador2(countJugador2 + 1)
        }
    }
    //Control del ganador
    function verificarGanador(jugador1, jugador2) {
        // 0 = Piedra, 1 = Tijeras, 2 = Papel
        if (jugador1 == 0 && jugador2 == 1) {
            return ("Jugador1")
        }
        else if (jugador1 == 1 && jugador2 == 2) {
            return ("Jugador1")
        }
        else if (jugador1 == 2 && jugador2 == 0) {
            return ("Jugador1")
        }
        else if (jugador1 == jugador2) {
            return ("Empate")
        }
        else {
            return ("Jugador2")
        }
    }
    //Funcion para cambiar la imagen segun sobre la que se clickeo y pasarle valores para la eleccion del jugador 1
    function cambiarJugador1(eleccion, key, alt) {
        document.getElementById("jugador1").src = eleccion;
        document.getElementById("jugador1").key = key;
        document.getElementById("jugador1").alt = alt;
        setEleccionJugador1(document.getElementById("jugador1").key)
    }

    /*Cambio de las imagenes y la eleccion del jugador 2 o "maquina"
    document.getElementByID() busca el elemento con la id que se le pase*/

    function cambiarjugador2(eleccionJugador2) {
        if (eleccionJugador2 == 0) {
            document.getElementById("jugador2").src = "../images/piedra.png";
            document.getElementById("jugador2").alt = "piedra";
        }
        else if (eleccionJugador2 == 1) {
            document.getElementById("jugador2").src = "../images/tijera.png";
            document.getElementById("jugador2").alt = "tijeras";
        }
        else {
            document.getElementById("jugador2").src = "../images/papel.png";
            document.getElementById("jugador2").alt = "papel";
        }
    }

    return (

        <div className="bg-dark">
            {Nav()}
        </div>
    )
}