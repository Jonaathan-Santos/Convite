import './App.scss';
import Noivos from './components/noivos';
import RoomIcon from '@material-ui/icons/Room';
import Imagem from './components/imagem';
import { useState } from 'react';
import Player from './components/musica';
import Confirm from './components/confirm';
import Listas from './components/listas';



function App() {
  const [stat, setState] = useState(false)
  const [visible, setVisible] = useState(false)

  function iniciar(){

    let audio = document.querySelector('.audio1')

    audio.play()
    setState(true)
    setTimeout(() => {
      setVisible(true)
      
    }, 3000);

  }


  return (
    <div className="App">
      <div className='tela-init' style={!visible ? {display: 'flex'}: {display: 'none', visibility: 'hidden'}} >

        <div className={!stat ? 'cima': 'cima up'}>

          <Noivos/>
          <div className="btn" onClick={iniciar}>Abrir</div>
        </div>
        <div className={!stat ? 'baixo': 'baixo down'}>

          <span className="dedic">Para:</span>
          <span className="you">Você<span className="s">(S)</span></span>
        </div>
        

      </div>
      <div className="verso">
        "Para que todos vejam e saibam, considerem e jutamente entendam que a mão do Senhor fez isso." Isaias 41:20
      </div>
      <Imagem/>

      <Noivos/>

      <div className="convite">
        convidamos você(s) para cerimonia do nosso casamento
      </div>

      <div className="date">
        <span>7</span> de <span>Outubro</span> de <span>2021</span> - às <span>18:00 Hrs</span>
      </div>

      <div className="footer">
        <Confirm/>
        <a href="https://maps.app.goo.gl/V1D4jRqV9KDBxqRZ6">
          <div className="local">
            <RoomIcon className='icon'/>
            <span className="nome">Spazio Grand Jardin</span>
            <span> (Abrir no mapa)</span>
          </div>
        </a>
        <Listas/>
      </div>
      <Player className=".audio1"/>
      
    </div>
  );
  

}

export default App;