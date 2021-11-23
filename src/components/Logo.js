import React, { Component } from 'react'
import companyLogo from '../assets/escudoUnal_white.png'
import SomosUnal from '../assets/somos_unal.png'
import { Link } from 'react-router-dom'
import '../components/styles/Logo.css'
export default class Logo extends Component {
    render() {
        return (
            <div>
                <Link>
                    <img className="companyLogo" src={companyLogo} alt="unal"/>
                    <img className="soyUnal" src={SomosUnal} alt="soyunal"/>
                </Link>
               
            </div>
        )
    }
}
