import React from "react";
import './styles/Slider.css'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ArticleIcon from '@mui/icons-material/Article';
import HouseIcon from '@mui/icons-material/House';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const Slider = ()=>{
    return (
            <div class="wrapper">
            <div class="slider" id="slider">
                <ul class="slider-controler">
                <li className="pp" id="p"><HouseIcon
                    sx={{ fontSize: 50 }}
                /></li>
                <li><a href="/#">Rectoria</a></li>
                <li className="pp"><AccessibilityNewIcon
                    sx={{ fontSize: 40 }}
                /></li>
                <li><a href="/#">Transparencia y acceso a <br/>Información Pública</a></li>
                <li className="pp"><EmojiObjectsIcon
                    sx={{ fontSize: 40 }}
                /></li>
                <li><a href="/#">Misión de Sabios</a></li>
                <li className="pp"><AlternateEmailIcon
                    sx={{ fontSize: 40 }}
                /></li>
                <li><a href="/#">PARTICIPA. Elecciones y <br/>Consultas</a></li>
                <li className="pp"><AssignmentTurnedInIcon
                    sx={{ fontSize: 40 }}
                /></li>
                <li><a href="/#">Tratamiento de Datos <br/>Personales</a></li>
                <li className="pp"><ArticleIcon
                    sx={{ fontSize: 40 }}
                /></li>
                <li><a href="/#">Proceso Permanente de <br/>Rendición de Cuentas</a></li>
                
                </ul>
            </div>
            </div>
    );
}

export default Slider;