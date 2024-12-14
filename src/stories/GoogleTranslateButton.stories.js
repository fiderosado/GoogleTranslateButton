import React from 'react';
import GoogleTranslateButton from "../components/GoogleTranslateButton";

export default {
    title: 'GoogleTranslateButton',
    component: GoogleTranslateButton,
    argTypes: {
        pageLanguage: {
            control: 'text',
            description: 'Define el idioma de la página',
            defaultValue: 'en',
        },
    },
};

// Ejemplo básico del componente
export const Default = (args) => (
    <div>
        {/* Componente del botón de Google Translate */}
        <GoogleTranslateButton {...args} />
        
        {/* Párrafo para traducir */}
        <p id="translate-paragraph">
            Este es un ejemplo de texto en español que puede traducirse usando el botón de Google Translate.
        </p>
    </div>
);
Default.args = {
    pageLanguage: 'es',
};
