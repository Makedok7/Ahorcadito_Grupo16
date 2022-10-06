import React, { useState } from 'react'
import Nav from './Nav'
import "../styles/Juego.css"
import letras from '../json/letras.json'
import palabras from '../json/palabras.json'

export default function Juego() {

    const [palabraOriginal, setPalabraOriginal] = useState([])
    const [palabraEscondida, setPalabraEscondida] = useState(["Genere una Palabra"])
    const [intentos, setIntentos] = useState(1)

    function generarPalabra() {
        let palabraRandom = Array.from(palabras[Math.floor(Math.random() * palabras.length)].palabra)
        setPalabraOriginal([...palabraRandom])
        esconderPalabra(palabraRandom)
        console.log(palabraOriginal)
        restablecerBotones()
    }

    function esconderPalabra(palabra) {
        setPalabraEscondida(new Array(palabra.length).fill("_"))
        console.log(palabraEscondida)
    }

    function compararLetra(letra) {
        console.log(letra)
        while (palabraOriginal.includes(letra)) {
            palabraEscondida[palabraOriginal.indexOf(letra)] = letra
            palabraOriginal[palabraOriginal.indexOf(letra)] = "_"
        }
        console.log(palabraOriginal)
        console.log(palabraEscondida)
        setPalabraEscondida([...palabraEscondida])
        comprobarResultado()
        cambiarBoton(letra)
    }

    function comprobarResultado() {
        if (!palabraEscondida.includes("_")) {
            console.log("gano")
        }
        if (intentos == 5) {
            console.log("falta")
        }
    }

    function cambiarBoton(letra) {
        let boton = document.getElementById(letra)
        boton.disabled = true
        if (palabraEscondida.includes(letra)) {
            boton.className = 'btn btn-success mx-1'
        }
        else {
            boton.className = 'btn btn-danger mx-1'
            setIntentos(intentos + 1)
            console.log(intentos)
        }
    }

    function restablecerBotones() {
        setIntentos(1)
        {
            letras.map((boton) => {
                document.getElementById(boton.letra).disabled = false
                document.getElementById(boton.letra).className = 'btn btn-info mx-1'
            }
            )
        }
    }

    return (
        <div className="bg-dark">
            {Nav()}
            <div>
                <h1 className='bg-dark text-center text-info'>
                    {palabraEscondida.join(" ")}
                </h1>
                <button type='button' className='btn btn-info ' onClick={() => generarPalabra()}>
                    Generar Palabra
                </button>
            </div>
            <div id='botones'>
                {letras.map((boton, i) =>
                    <button key={i} type="button" className="btn btn-info mx-1" id={boton.letra} disabled={false} onClick={() => { compararLetra(boton.letra) }}>
                        {boton.letra}
                    </button>
                )}
            </div>
        </div>
    )
}