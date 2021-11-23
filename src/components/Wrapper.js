import React from "react" 
import './styles/Wrapper.css'
import seall from '../assets/banner-Convergencia01.jpg'
import periodico from '../assets/periodico-unal.png'
import agencia from '../assets/agencia-unal.png'
import aldia from '../assets/aldia-unal.png'
import foto from '../assets/foto.jpg'

import television from '../assets/television-unal.png'
import radio from '../assets/radio-unal.png'
import orgullo from '../assets/orgullo-unal.png'
import circular from '../assets/circular-unal.png'
import donaciones from '../assets/donaciones-unal.png'
import clases from '../assets/clases-remotas.png'


const Wrapper = () =>{
    return (
        <div class="grid">
            <div class="right-wrapper">
               <div className="containerWrapper">
                    <img src={seall} alt="convivencia"></img>
               </div>
                <div className="headerWrapper">
                    <a href="/#" className="uPeriodico"><img className="Uwrapper" alt="periodico" src={periodico}></img></a>
                    <a href="/#" className="uAgencia"><img className="Uwrapper" alt="agencia" src={agencia}></img></a>
                    <a href="/#" className="uAldia"><img className="Uwrapper" alt="aldia" src={aldia}></img></a>
                </div>
            <div className="contentWrapper">
                <img src={foto} alt="foto"></img>
                <h3>UNAL Sede Orinoquia impulsa áreas STEAM en la región</h3>
               
            </div>
            <div className="pWrapper">
                <p>Al formalizar un convenio con la fundación Save The Children, la Universidad Nacional de Colombia (UNAL) Sede Orinoquia viene impulsando estrategias para vincular a la población infantil y juvenil de Arauca en áreas...</p>
            </div>
            <div className="topWrapper">
                    <a href="/#" className="WrapperTop"><img className="Uwrapper" src={television} alt="television"></img></a>
                    <a href="/#" className="WrapperTop"><img className="Uwrapper" src={radio} alt="radio"></img></a>
                    <a href="/#" className="WrapperTop"><img className="Uwrapper" src={orgullo} alt="orgullo"></img></a>
                    <a href="/#" className="WrapperTop"><img className="Uwrapper" src={circular} alt="circular"></img></a>
            </div>
            <div className="buttonWrapper">
                    <a href="/#" className="WrapperTop"><img className="Uwrapper" src={donaciones} alt="donaciones"></img></a>
                    <a href="/#" className="WrapperTop"><img className="Uwrapper" src={clases} alt="clases"></img></a>
            </div>
            </div>
            

        </div>
    );
}

export default Wrapper;
    