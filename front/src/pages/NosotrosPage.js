
import React from "react";
import "../styles/components/pages/NosotrosPage.css";

const NosotrosPage = (props) => {
    return (

        <main className="holder">
            <div className="historia">
                <h2>Quienes somos</h2>
                <p>Somos una empresa joven dentro del mercado asegurador, con especialistas en cada área, para brindar
                    soluciones a productores y brokers </p>
                <p>Ayudamos a nuestros clientes a crecer, protegiendo y promoviendo las posibilidades. Buscamos mejores
                    formas de gestionar el riesgo y definir trayectorias más eficaces para alcanzar los resultados correctos
                </p>
            </div>

            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="Img/Nosotros/nosotros1.jpg" alt="JJ" />
                        <h4> Wiliam Shake </h4>
                        <h4> CEO </h4>
                        <p>La función principal es liderar y tomar decisiones estratégicas para la empresa. También es responsable de la gestión general de la organización y de asegurar que se alcancen los objetivos y metas de la empresa</p>
                    </div>
                    <div className="persona">
                        <img src="Img/Nosotros/nosotros2.jpg" alt="JJ" />
                        <h4> Melina Pitford </h4>
                        <h4> Directora de Finanzas y Administración </h4>
                        <p> La Directora Financiera gestiona las finanzas de una empresa. Esto implica supervisar la contabilidad, la planificación financiera, la gestión de riesgos, la obtención de financiamiento y la toma de decisiones estratégicas relacionadas con las inversiones y el capital</p>
                    </div>
                    <div className="persona">
                        <img src="Img/Nosotros/nosotros3.jpg" alt="JJ" />
                        <h4> Carlos Alberto Manesquin </h4>
                        <h4> Director de Recursos Humanos </h4>
                        <p> Su función es planificar, dirigir y coordinar las actividades del personal y las relaciones laborales, así como las políticas y prácticas de una compañía</p>
                    </div>
                    <div className="persona">
                        <img src="Img/Nosotros/nosotros4.jpg" alt="JJ" />
                        <h4> Victoria Saenz </h4>
                        <h4> Directora Comercial </h4>
                        <p>La Directora Comercial y de Marketing lidera las estrategias de ventas y marketing de la empresa. Su función implica la identificación de oportunidades de mercado, el desarrollo de estrategias de promoción y ventas, y la gestión de equipos para alcanzar objetivos de crecimiento y participación en el mercado</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default NosotrosPage;
