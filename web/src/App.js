import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>


          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>


          <div className="input-group">            
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
        <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/35607235?s=460&u=1949165f0f57f9c2f4489dc2ab3eab4ff3008d34&v=4" alt="Daniel Silva" />
              <div className="user-info">
                <strong>Daniel Silva</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software tester intern at Projeto CIn/Motorola. Information systems undergraduate at CIn/UFPE.</p>
            <a href="https://github.com/shirubadan">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/35607235?s=460&u=1949165f0f57f9c2f4489dc2ab3eab4ff3008d34&v=4" alt="Daniel Silva" />
              <div className="user-info">
                <strong>Daniel Silva</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software tester intern at Projeto CIn/Motorola. Information systems undergraduate at CIn/UFPE.</p>
            <a href="https://github.com/shirubadan">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/35607235?s=460&u=1949165f0f57f9c2f4489dc2ab3eab4ff3008d34&v=4" alt="Daniel Silva" />
              <div className="user-info">
                <strong>Daniel Silva</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software tester intern at Projeto CIn/Motorola. Information systems undergraduate at CIn/UFPE.</p>
            <a href="https://github.com/shirubadan">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/35607235?s=460&u=1949165f0f57f9c2f4489dc2ab3eab4ff3008d34&v=4" alt="Daniel Silva" />
              <div className="user-info">
                <strong>Daniel Silva</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software tester intern at Projeto CIn/Motorola. Information systems undergraduate at CIn/UFPE.</p>
            <a href="https://github.com/shirubadan">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/35607235?s=460&u=1949165f0f57f9c2f4489dc2ab3eab4ff3008d34&v=4" alt="Daniel Silva" />
              <div className="user-info">
                <strong>Daniel Silva</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Software tester intern at Projeto CIn/Motorola. Information systems undergraduate at CIn/UFPE.</p>
            <a href="https://github.com/shirubadan">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
