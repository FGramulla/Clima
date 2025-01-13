import React from "react";
import "../styles/AboutUs.css"; // Si deseas agregar estilos personalizados

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        ¡Hola! Soy un programador junior apasionado por el desarrollo web, la
        tecnología y la creación de soluciones útiles para la vida diaria.
      </p>
      <p>
        Esta página web nació como un proyecto personal para poner en práctica
        mis habilidades en <strong>React</strong> y trabajar con una{" "}
        <strong>API del clima</strong>. Mi objetivo principal era crear una
        herramienta simple y eficiente que permitiera a las personas consultar
        el clima de su zona de manera rápida y precisa.
      </p>
      <p>Al desarrollar esta página, aprendí mucho sobre:</p>
      <ul>
        <li>La integración de datos en tiempo real utilizando APIs.</li>
        <li>La creación de interfaces interactivas y responsivas con React.</li>
        <li>La importancia de diseñar una experiencia de usuario clara y atractiva.</li>
      </ul>
      <p>
        Este proyecto no solo me permitió mejorar mis habilidades técnicas, sino
        que también me inspiró a seguir explorando nuevas ideas y proyectos en el
        mundo del desarrollo web.
      </p>
      <p>
        Cabe recalcar que no esta para versión movil de momento.
      </p>
      <p>Gracias por visitar mi página. ¡Espero que te sea útil y fácil de usar!</p>
    </div>
  );
};

export default AboutUs;
