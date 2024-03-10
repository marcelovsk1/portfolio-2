import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('first'); // Estado para controlar a aba ativa

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey); // Atualiza o estado quando a aba é alterada
  };

  const renderTabs = () => {
    // Array de objetos representando as abas
    const tabs = [
      { key: 'first', label: 'Active' },
      { key: 'second', label: 'second' },
      { key: 'third', label: 'third', disabled: false },
    ];

    // Mapeia os objetos de aba para componentes de botão
    return tabs.map((tab) => (
      <button class="button i-button"
        key={tab.key}
        className={activeTab === tab.key ? 'active' : ''} // Aplica uma classe ativa se a aba estiver ativa
        onClick={() => handleTabChange(tab.key)} // Função de clique para alterar a aba ativa
        disabled={tab.disabled} // Define a aba como desabilitada se necessário
      >
        {tab.label}
      </button>
    ));
  };

  return (
    <section className='project' id='project'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Projects</h2>
            <p className="centered-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione modi reiciendis veritatis,
              dolorem debitis repellendus tenetur dicta nam,
              eaque recusandae similique explicabo pariatur! Reprehenderit, pariatur iure laudantium vero rem mollitia.</p>
              <div className="nav-tabs">
                {renderTabs()} {/* Renderiza as abas */}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
