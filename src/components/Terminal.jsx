import 'animate.css';
import {cabecera,help, whoami,skills, dream, hacktime} from "../utils/comandos";
import React, { useRef } from "react";
function Terminal(){
    const terminalRef = useRef(null);

    let escribir = function(){
        let input = document.getElementById("cursor");
        let typer = document.getElementById("typer");
        input.classList.remove("hidden");
        let texto = document.getElementById("texto");
        texto.focus();
        texto.addEventListener("input",(e)=>{
            typer.textContent = e.target.value;
        });
    }

    let historial = [];
    let indice = -1;
    let ruta = "visitante@raulJuanSite:~$";
    let game = false;
    let numero;


    if(this){
        document.getElementById("result").textContent ="";
    }
    

    let manejarTeclas = (e)=> {
        let typer = document.getElementById("typer");
        let result = document.getElementById("result");
        let texto = document.getElementById("texto");
        let cursor = document.getElementById("cursor");
        let count = texto.value.length;

        if (cursor.style.left === "") {
            cursor.style.left = "0px";  
        }
        
        if(e.key == "Enter"){
            indice = -1;
            historial.unshift(typer.textContent);

            if(typer.textContent.toLowerCase() == "clear"){
                result.innerHTML=""; 
            }else{
                let resultado;
                if(typer.textContent.toLowerCase() == "game"){
                    game = true;
                    numero = Math.floor(Math.random() * 100) + 1;
                    resultado = "¡Adivina un número entre 1 y 100! Si te rindes utiliza 'exit' ";
                    console.log(numero);
                }

                if(game){
                    if(typer.textContent.toLowerCase()=="exit"){
                        game = false;
                        resultado = "Te has rendido ;(";
                    }else{
                        if(typer.textContent==numero.toString()){
                            resultado = "Lo has adivinado";
                            game = false;
                        }else{
                            if(typer.textContent.toLowerCase()!="game"){
                                resultado = typer.textContent+" no es, prueba otra vez";
                            }         
                        }
                    }
                }else{
                    resultado = determinarResultado(typer.textContent);
                }
                result.innerHTML += `<a class="ubicacion">${ruta}</a> ${typer.textContent}<pre>${resultado}<pre>`;   
            }
            typer.textContent = "";
            texto.value = "";
            if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
        }

        if (e.key == "ArrowUp") {
            if (indice + 1 < historial.length) {
                indice++;
                typer.textContent = historial[indice];
                texto.value = historial[indice];
            }
            texto.focus();
            setTimeout(() => {
                texto.setSelectionRange(texto.value.length, texto.value.length);
            }, 0);
        }
    
        if (e.key == "ArrowDown") {
            if (indice > 0) {
                indice--;
                typer.textContent = historial[indice];
                texto.value = historial[indice];
            }
            texto.focus();
            setTimeout(() => {
                texto.setSelectionRange(texto.value.length, texto.value.length);
            }, 0);
        }

        if(e.ctrlKey && e.key == 'l'){
            e.preventDefault();
            result.innerHTML=cabecera;
        }

        if (e.key == "ArrowLeft" && parseFloat(cursor.style.left) >= (0 - ((count - 1) * 10))) {
            cursor.style.left = parseFloat(cursor.style.left) - 10+ "px";
        } else if (e.key == "ArrowRight" && (parseFloat(cursor.style.left) + 10) <= 0) {
            cursor.style.left = parseFloat(cursor.style.left) + 10 + "px";
        }
    }
    
    return(
        <div className="terminal" onClick={escribir} ref={terminalRef}>
            <p id='result'>{cabecera}</p>
            <a className="ubicacion">visitante@raulJuanSite:~$ </a><span id="typer"></span><b className="cursor hidden" id="cursor">█</b>
            <input type="text" className="hidden" id='texto' onKeyDown={manejarTeclas}/>        
        </div>
    );
}

function determinarResultado(input){
    let entrada = input.toLowerCase();
    switch(entrada){
        case "help":
            return help;
        case "whoami":
            return whoami;
        case "skills":
            return skills;
        case "dream":
            return dream;
        case "hacktime":
            return hacktime
        default:
            return input+": Command not found try help";
    }
}
export default Terminal;