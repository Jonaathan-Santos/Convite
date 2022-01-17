import music from '../assets/music.mp3'
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

function Player  (){
    return(
      <div className="player">

        <audio className='audio1' src={music} autoPlay></audio>
      
      </div>
)};

export default Player