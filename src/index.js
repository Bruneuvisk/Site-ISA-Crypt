import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom'; // Importa o ReactDOM para renderização
import App from './App'; // Importa o componente principal App
import './styles.css'; // Importa o arquivo de estilos CSS

// Seleciona o elemento DOM onde a aplicação será montada
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do elemento root
root.render(
    <App /> 
);