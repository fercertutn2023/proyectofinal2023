import React from "react";
import "../styles/components/pages/NovedadesPage.css";

import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from "../compoonents/novedades/NovedadItem";

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        imagen={item.imagen} 
                        compania={item.compania}
                        titulo={item.titulo}
                        desarrollo={item.desarrollo}
                        />)
                )
            }
        </section>
    )
};

export default NovedadesPage;
