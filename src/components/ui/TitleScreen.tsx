  "use client"
  import React, { useEffect, useState } from 'react';
  import './TitleScreen.css'; 

  const TitleScreen: React.FC<{ titles: string[] }> = ({ titles }) => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [finalWordDisplayed, setFinalWordDisplayed] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        
        if (finalWordDisplayed) {
          clearInterval(interval)
          return
        }
        setFadeOut(true);
        setTimeout(() => {
          if (!finalWordDisplayed) {
            setCurrentTitleIndex((prevIndex) => {
              const nextIndex = (prevIndex + 1) % titles.length;
              if (nextIndex === 0) {
                setFinalWordDisplayed(true);
                setFadeOut(false)
                return prevIndex; // Stay on the last word
              }
              return nextIndex;
            });
          }
          setFadeOut(false);
        }, 300); 
      }, 1000);

      return () => clearInterval(interval);
    }, [titles.length, finalWordDisplayed]);

    return (
      <h1 className={`title ${fadeOut ? 'fade-out' : ''}`}>
        <p className='text-6xl'>{finalWordDisplayed ? <div className='text-7xl border-b-2 border-black'>Veloce</div> : titles[currentTitleIndex]}</p>
      </h1>
    );
  };

  export default TitleScreen;
