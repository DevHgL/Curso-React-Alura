import React from 'react';
import './Menu.css'; // Make sure to import the correct CSS file if it exists.

const Menu = () => {
  return (
    
    <div className="menu-container">
      
      <div className="menu-lateral">
        <div className="logo">
          <img src="GES.png" alt="Logo da Empresa" />
        </div>
        <ul>
          <li><a href="./Dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
          <li><a href="TODO"><i className="fas fa-file-alt"></i> Relatórios</a></li>
          <li><a href="/"><i className="fas fa-sign-out-alt"></i> SAIR</a></li>
        </ul>
      </div>
  
      <div className="conteudo">
        <div className="informacoes-conteudo">
          <div className="titulo-barra-de-pesquisa">
            <h3>Eventos</h3>
          </div>
          <div className="total-de-resultados">
            <h3>Total de 2</h3>
            <div className="botao-de-adicionar">
              <button>Adicionar</button>
            </div>
          </div>
          <div className="search-bar-container">
            <div className="search-bar">
              <input type="text" className="search-input" placeholder="Digite sua busca aqui..." />
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>
          <div className="user-list">
            <div className="user-item">
              <div className="user-avatar">
                <img src="onix.png" alt="Carro 1" />
              </div>
              <div className="user-details">
                <h3>Nome do Associado 1</h3>
                <p>Placa: ABC-123</p>
                <p>Email: Associado@example.com</p>
                <p>Telefone: (11) 1234-5678</p>
                <p>Tipo do Evento: Colisão</p>
              </div>
            </div>
            <div className="user-item">
              <div className="user-avatar">
                <img src="camaro.png" alt="Usuário 2" />
              </div>
              <div className="user-details">
                <h3>Nome do Associado 2</h3>
                <p>Placa: XYZ-987</p>
                <p>Email: Associado@example.com</p>
                <p>Telefone: (22) 9876-5432</p>
                <p>Tipo do Evento: Furto</p>
              </div>
            </div>
            {/* Add more user items here... */}
          </div>
        </div>
      </div>
      <footer>
        Todos os direitos reservados &copy; {new Date().getFullYear()}
      </footer>s
    </div>
  );
};

export default Menu;
