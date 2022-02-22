import React from 'react';
import { Link } from 'react-router-dom';

import { Titulo } from '../../components/Titulo/Titulo';

export const Login = () => {
    return (
        <>
            <Titulo valor="Faça o seu login" />

            {/* <a href="/cards">Ir para cards</a> */}

            <Link to={"/cards"}>Ir para cards</Link>
        </>
    )
}