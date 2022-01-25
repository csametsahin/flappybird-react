import './App.css';
import react, { useState,useEffect } from 'react';
function App() {
  const [birdLocation,setBirdLocationState] = useState(250);

  useEffect(() => {
    setTimeout(() => {
      
      }, 1000);
  });


  const keyUpHandler = (event) => {
          console.log("zıplıyorum");
          setBirdLocationState(() => birdLocation - (birdLocation*1,95));
          console.log(birdLocation);
    
  };
  return (
    <div className="App">
          <div className="game-container"
            onClick={() => keyUpHandler()}
          >
              <div className='bird' style={{top:birdLocation}}
                ></div>
               <div className='engelTop'></div>
               <div className='engelBottom'></div> 
          </div>
    </div>
  );
}

export default App;
