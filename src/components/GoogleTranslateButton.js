import React, { useEffect } from "react";
export default function GoogleTranslateButton ({pageLanguage='en',className=''}) {
    useEffect(() => {
        // Función para limpiar cualquier contenido duplicado en el contenedor
        const cleanUpWidget = () => {
            const container = document.getElementById("google_translate_element");
            if (container) {
                container.innerHTML = ""; // Limpia el contenedor antes de inicializar
            }
        };
        
        // Cargar el script solo si no está presente
        if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        }
        
        // Definir la función global si no existe
        if (!window.googleTranslateElementInit) {
            window.googleTranslateElementInit = () => {
                // Limpia el contenedor para evitar duplicados
                cleanUpWidget();
                
                // Inicializa el widget
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage, // Cambia "en" por el idioma principal de tu aplicación
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    "google_translate_element"
                );
            };
        }
        
        // Limpieza opcional (puedes omitirla si no es necesaria)
        return () => {
            cleanUpWidget();
        };
    }, []);
    return <div id="google_translate_element" className={className}></div>;
};
