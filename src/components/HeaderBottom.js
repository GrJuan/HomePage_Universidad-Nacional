import React from "react";
import styled from "styled-components";


const Contenedor = styled.div`
    border: 9px solid;
    border-color: transparent;
    background-color: transparent;
`;

const Header = styled.div`
    background: transparent;
`;

const Span = styled.span`
    width: 100%;
    height: auto;
    min-height: 54px;
    color: transparent;
    font-size: 1.2rem;
    padding: 12px 12px 5px 12px;
`;
const HeaderBottom = () => {
    return (
        <Contenedor>
            <Header>
                <Span>Campus La Nubia, Sede Manizales</Span>
            </Header>
        </Contenedor>
    );
}
export default HeaderBottom;
