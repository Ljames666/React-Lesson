import React from 'react';
import { Link } from 'react-router-dom';

import { Titulo } from '../../components/Titulo/Titulo';
import { CardWrapper } from '../../components/CardWrapper/CardWrapper';

export const Cards = () => {
    return (
        <>
            <Titulo valor="Aula 01 - React" />
            <CardWrapper />

            {/* <a href="/login">Ir para login</a> */}

            <Link to={"/login"}>Ir para o login</Link>
        </>
    )
}
