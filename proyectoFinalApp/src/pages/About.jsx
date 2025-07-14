// import React from "react";
// import "../styles/About.css"; // Asegurate de tener este archivo
// import eliasFoto from "../assets/elias_perfil.jpg"; // Ruta relativa a tu imagen

// function About() {
//   return (
//     <div className="about-container">
//       <div className="about-image">
//         <img src={eliasFoto} alt="Elías Orihuela" />
//       </div>
//       <div className="about-text">
//         <h2>Sobre mí</h2>
//         <p>
//           ¡Hola! Soy <strong>Elías Orihuela</strong>, estudiante del programa Talento Tech en el curso de React - Comisión 25021. 
//           Vengo del mundo de la electrónica, donde tengo más de 13 años de experiencia trabajando con equipos, 
//           organizando tareas y capacitando personas.
//         </p>
//         <p>
//           En este nuevo camino en el desarrollo de software, estoy aplicando mi lógica técnica y experiencia previa 
//           para desarrollar soluciones digitales. Actualmente me encuentro construyendo un proyecto con carrito de compras, 
//           utilizando tecnologías como <strong>React</strong>, <strong>JSX</strong>, <strong>JavaScript</strong>, <strong>Hooks</strong> y <strong>React Router</strong>.
//         </p>
//         <p>
//           Este sitio es parte de mi proceso de aprendizaje y crecimiento como desarrollador frontend. 
//           Mi objetivo es seguir ampliando mis conocimientos y aportar soluciones funcionales, bien diseñadas y centradas en el usuario.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;


import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import eliasFoto from "../assets/elias_perfil.jpg";

function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
          <Image src={eliasFoto} alt="Elías Orihuela" rounded fluid />
        </Col>
        <Col xs={12} md={8}>
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy <strong>Elías Orihuela</strong>, estudiante del programa Talento Tech en el curso de React - Comisión 25021. 
            Vengo del mundo de la electrónica, donde tengo más de 13 años de experiencia trabajando con equipos, 
            organizando tareas y capacitando personas.
          </p>
          <p>
            En este nuevo camino en el desarrollo de software, estoy aplicando mi lógica técnica y experiencia previa 
            para desarrollar soluciones digitales. Actualmente me encuentro construyendo un proyecto con carrito de compras, 
            utilizando tecnologías como <strong>React</strong>, <strong>JSX</strong>, <strong>JavaScript</strong>, <strong>Hooks</strong> y <strong>React Router</strong>.
          </p>
          <p>
            Este sitio es parte de mi proceso de aprendizaje y crecimiento como desarrollador frontend. 
            Mi objetivo es seguir ampliando mis conocimientos y aportar soluciones funcionales, bien diseñadas y centradas en el usuario.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
