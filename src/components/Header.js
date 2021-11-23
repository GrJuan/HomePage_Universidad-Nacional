import React, { Component } from 'react'
import '../components/styles/Header.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SplitButton from './Lenguaje';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="Icons">
                    <ul className="ulNav">
                        <li className="liNav"><a href="/#" target="_top">Aspirantes</a></li>
                        <li className="liNav"><a href="/#" target="_top">Estudiantes</a></li>
                        <li className="liNav"><a href="/#" target="_top">Egresados</a></li>
                        <li className="liNav"><a href="/#" target="_top">Docentes</a></li>
                        <li className="liNav"><a href="/#" target="_top">Administrativos</a></li>   
                        <li><a href="/"><TwitterIcon/></a></li>
                        <li><a href="/"><FacebookIcon/></a></li>
                        <li><a href="/"><YouTubeIcon/></a></li>
                        <li><a href="/"><InstagramIcon/></a></li>
                        <SplitButton/>
                    </ul>  
                </div>          
            </header>
        )
    }
}
