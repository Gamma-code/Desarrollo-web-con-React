import { useRef, useState, useEffect } from "react";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioElement.current;
    if (!audio) return;
    // Actualiza el tiempo
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);
  // Reproduce o pausa el audio
  const togglePlayPause = () => {
    if (!audioElement.current) return;

    if (isPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioElement.current) {
      audioElement.current.volume = newVolume;
    }
  };
  // Pa darle formato al timepo en mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Lista de canciones de ejemplo
  const songs = [
    "Canción de prueba",
    "Pharrell Williams - Happy", 
    "Canción de prueba",
    "Canción de prueba",
    "Canción de prueba",
    "Canción de prueba",
    "Canción de prueba",
    "Canción de prueba",
    "Canción de prueba",
    "Canción de prueba",
    "Canción de prueba"
  ];

  return (
    <div className="audio-player-fullscreen">
      <div className="header">
        <h1>DABC UABCS - MP3 Player</h1>
      </div>

      <div className="playlist">
        <ul>
          {songs.map((song, index) => (
            <li key={index} className={index === 1 ? "active" : ""}>
              {song}
            </li>
          ))}
        </ul>
      </div>

      {/* Controles inferiores */}
      <div className="controls">
        <div className="current-song">
          <strong>Pharrell Williams - Happy</strong>
        </div>

        {/*barra que no sirve visualmente por el momento */}
        <div className="progress-container">
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <div className="progress-bar">
            
            <div className="progress" style={{ width: "0%" }}></div>
          </div>
        </div>

        <div className="controls-row">
          <button className="play-btn" onClick={togglePlayPause}>
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <div className="volume-control">
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>

      {/*Oculto el reproductor default del navegador */}    
      <audio
        ref={audioElement}
        className="hidden"
        src="/Pharrell Williams - Happy.mp3"
      />
    </div>
  );
};

export default AudioPlayer;
