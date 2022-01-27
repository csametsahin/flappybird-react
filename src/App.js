import './App.css';
import  { useState,useEffect } from 'react';
function App() {
  const [birdLocation,setBirdLocationState] = useState(250);
  const [engelLeft,setEngelLeft] = useState(410);
  

  const dus = () =>{
    const interval = setInterval(() => {
      setBirdLocationState((birdLocation) => (birdLocation+1));
    }, 40);
    return () => clearInterval(interval);
  }
  const solagel = () =>{
    const interval = setInterval(()=>{
      setEngelLeft((engelLeft) => (engelLeft-1));
    },10);
    return () => clearInterval(interval);
  }
  const checkLocation = () =>{
    if(birdLocation<0){
      alert("Yandın");
    }
    else if (birdLocation>480){
      alert("Yandın");
    }
    if(birdLocation<150 && engelLeft<70){
      alert("yandın");
    }
  }

  useEffect(() => {
     checkLocation();
  }, [birdLocation]);
  

  useEffect(() => {

        dus();
        solagel();

  
  },[]);


  const keyUpHandler = (event) => {
          console.log("zıplıyorum");
          setBirdLocationState((prevState) => prevState - (prevState*1,95));
    
  };
  return (
    <div className="App">
          <div className="game-container"
            onClick={() => keyUpHandler()}
          >
              <div className='bird' style={{top:birdLocation ,}}
                ></div>
               <div className='engelTop' style={{left:engelLeft}}></div>
               <div className='engelBottom' style={{left:engelLeft}}></div> 
          </div>
    </div>
  );
}

export default App;
