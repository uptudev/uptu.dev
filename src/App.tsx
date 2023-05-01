import React, {useEffect} from 'react';
import './stylesheets/index.scss';

function App() {
  useEffect(() => {
    // Store the current state of the animation
    let animationState = 'running';

    // Pause the animation when the page is unloaded
    window.addEventListener('beforeunload', () => {
      const elements = document.querySelectorAll('.pink_7, .pink_8, .outer_9, .outer_10');
      elements.forEach(element => {
        (element as HTMLElement).style.animationPlayState = 'paused';
      });
      animationState = 'paused';
    });

    // Resume the animation when the new page is loaded
    window.addEventListener('load', () => {
      if (animationState === 'running') {
        const elements = document.querySelectorAll('.pink_7, .pink_8, .outer_9, .outer_10');
        elements.forEach(element => {
          (element as HTMLElement).style.animationPlayState = 'running';
        });
      }
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', () => {});
      window.removeEventListener('load', () => {});
    };
  }, []);
  return (
    <>
      <div className="App">
      </div>
    </>
  );
}

export default App;