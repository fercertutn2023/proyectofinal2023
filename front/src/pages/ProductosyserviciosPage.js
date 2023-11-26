
import React from "react";
import "../styles/components/pages/ProductosyserviciosPage.css";

const ProductosyserviciosPage = (props) => {
    return (
        <main className="productos">
            <h2>Productos y Servicios</h2>
            <div className="servicios">
                <div className="servicio">
                    <img src="Img/Servicios/autos.jpg" alt="autos" />
                    <div>
                        <h4> Seguro de autos </h4>
                        <p>Protege tu inversión con nuestro seguro de autos. Con cobertura completa,
                            tranquilidad en el camino y asistencia las 24 horas. Conduce con confianza,
                            elige nuestra garantía</p>
                    </div>
                </div>

                <div className="servicio">
                    <img src="Img/Servicios/hogar.jpg" alt="hogar" />
                    <div>
                        <h4> Seguro de Hogar </h4>
                        <p>Asegura tu hogar con nosotros: la protección que mereces.
                            Respaldo ante accidentes, robo y más. Tu tranquilidad es nuestra prioridad.
                            Descubre la seguridad de un hogar protegido</p>
                    </div>
                </div>

                <div className="servicio">
                    <img src="Img/Servicios/moto.jpg" alt="moto" />
                    <div>
                        <h4> Seguro de Motos </h4>
                        <p>Recorre el camino con confianza. Nuestro seguro de motos te brinda protección en cada viaje.
                            La seguridad que necesitas sobre dos ruedas</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="Img/Servicios/comercio.jpg" alt="comercio" />
                    <div>
                        <h4> Seguro para Comercios </h4>
                        <p>Protege tu negocio con nuestro seguro de comercio. Desde incendios hasta robos,
                            estamos aquí para mantener tu negocio seguro. Enfoca tu energía en crecer,
                            nosotros nos encargamos de la seguridad</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="Img/Servicios/industrias.jpg" alt="industrias" />
                    <div>
                        <h4> Seguro para Industrias </h4>
                        <p>Protege tu negocio con nuestro seguro de industria.
                            Tranquilidad y seguridad para tu empresa en un solo plan</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="Img/Servicios/ap.jpg" alt="accidentespersonales" />
                    <div>
                        <h4> Seguro de Accidentes Personales </h4>
                        <p>Prepárate para lo inesperado con nuestro seguro de accidentes personales.
                            Tu seguridad es lo primero, y estamos aquí para brindarte tranquilidad
                            en cualquier momento y en cualquier lugar. Protege tu futuro con nosotros</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="Img/Servicios/art.jpg" alt="art" />
                    <div>
                        <h4> Seguro de ART </h4>
                        <p>Protege a tus empleados y tu negocio con nuestro seguro de accidentes de trabajo.
                            Nuestra cobertura integral asegura que, en caso de lesiones laborales,
                            tu equipo estará respaldado. La seguridad en el trabajo es primordial,
                            y nosotros lo hacemos posible</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="Img/Servicios/rc.jpg" alt="rc" />
                    <div>
                        <h4> Seguro de Responsabilidad Civil </h4>
                        <p> Prevenir es cuidar tu futuro. Nuestro seguro de responsabilidad civil te
                            protege de demandas legales. Tranquilidad para ti y tu negocio.
                            No dejes al azar lo que podemos asegurar</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="Img/Servicios/embarcaciones de placer.jpg" alt="embarcaciones" />
                    <div>
                        <h4> Seguro para Embarcaciones de placer </h4>
                        <p>Navega con tranquilidad y disfruta del mar con nuestro seguro de embarcaciones de placer.
                            Protege tu inversión y a tus seres queridos en cada travesía. Descubre la seguridad en cada ola,
                            elige nuestra cobertura hoy</p>
                    </div>
                </div>

            </div>


            <h2>Nuestas principales Compañías</h2>

            <div className="compañias">
                <div className="compañia">
                    <img src="Img/Galeria/Allianz.jpg" alt="allianz" />
                </div>
                <div className="compañia">
                    <img src="Img/Galeria/La Caja.jpg" alt="lacaja" />
                </div>

                <div className="compañia">
                    <img src="Img/Galeria/Mercantil Andina.jpg" alt="mercantil" />
                </div>

                <div className="compañia">
                    <img src="Img/Galeria/Meridional.jpg" alt="meridional" />
                </div>

                <div className="compañia">
                    <img src="Img/Galeria/Prevencion ART.jpg" alt="prevencion" />
                </div>

                <div className="compañia">
                    <img src="Img/Galeria/Sancor Seguros.jpg" alt="sancor" />
                </div>

                <div className="compañia">
                    <img src="Img/Galeria/Sura.jpg" alt="sura" />
                </div>

                <div className="compañia">
                    <img src="Img/Galeria/Zurich.jpg" alt="zurich" />
                </div>
            </div>
        </main>
    );
}
export default ProductosyserviciosPage;
