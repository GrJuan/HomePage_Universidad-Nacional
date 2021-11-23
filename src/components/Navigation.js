import React, { Component } from 'react'
import './styles/Navigation.css'
import Logo from './Logo'
import Header from './Header'
import seal from '../assets/sealColombia.png'

export default class Navigation extends Component {
    render() {
        return (
            <><Header />  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="top_unal">
                <div className="site_url">
                    unal.edu.co
                </div>  
            </div>
            <div className="container">
                <div>
                    <ul className="navBottons">
                        <li className="bottons"><a className="hover" href="/">LA UNIVERSIDAD</a></li>
                        <li className="bottons"><a className="hover" href="/">SEDES</a></li>
                        <li className="bottons"><a className="hover" href="/">INVESTIGACIÓN</a></li>
                        <li className="bottons"><a className="hover" href="/">INTERNACIONALIZACIÓN</a></li>
                        <li className="bottons"><a className="hover" href="/">FORMACIÓN</a></li>
                        <li className="bottons"><a className="hover" href="/">EXTENSIÓN</a></li>
                    </ul>
                </div>
            </div>
            <div className="seal">
                <img src={seal} alt="escudo de colombia"></img>
            </div>
            <Logo/>
            
            </nav></>
        )
    }
}
