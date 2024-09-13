import React, { useState } from 'react'; // Importa React e o hook useState
import logo from './image.png'; // Importa a imagem local

function App() {
  // Estado para controlar o modo escuro (false = modo claro)
  const [darkMode, setDarkMode] = useState(false); 

  // Função para alternar o modo escuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Inverte o estado do modo escuro
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`} id='isa-crypted'>
      {/* Cabeçalho da aplicação */}
      <header className="header">
        <h1>ISA Cryptocurrency</h1> {/* Título da aplicação */}
        <img src={logo} alt="ISA Logo" className="logo" /> {/* Logo da aplicação */}
        <button className="toggle-button" onClick={toggleDarkMode}>
          {/* Texto do botão que muda conforme o estado do modo escuro */}
          {darkMode ? 'Desativar Modo Escuro' : 'Ativar Modo Escuro'}
        </button>
      </header>
      {/* Conteúdo principal */}
      <main className="main-content">
        <section className="overview">
          <h2>What is ISA?</h2>
          <p>
            ISA is a cryptocurrency designed to create a support network for industrial instrumentation and autism.
            It offers a platform where users can purchase software and educational materials related to automation and industrial instrumentation.
          </p>
        </section>
        <section className="mission">
          <h2>Vision and Mission</h2>
          <p>
            Our mission is to foster innovation and the exchange of knowledge in the industry, offering value both to professionals
            looking for tools and education, as well as investors who benefit from the platform's growth.
          </p>
        </section>
      </main>
      {/* Rodapé da aplicação */}
      <footer className="footer">
        <p>Owner Crypto: Matheus Santos</p>
        <p>Developer: Bruno Henrique (Mised Company)</p>
      </footer>
    </div>
  );
}

export default App; // Exporta o componente App para uso em outros arquivos