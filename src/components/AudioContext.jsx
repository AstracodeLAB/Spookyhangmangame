import { createContext, useState } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTrack, setCurrentTrack] = useState(null); 


  const toggleAudio = () => {
    //callback que recibe el valor actual real del estado no del último render.
    setIsPlaying(
      (prevState) => {
        return !prevState
      }
    );
  };

  return (
    <AudioContext.Provider value={{
      isPlaying,
      toggleAudio,
    }}>
      {children}
    </AudioContext.Provider>
  );
};