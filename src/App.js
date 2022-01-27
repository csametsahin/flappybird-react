import './App.css';
import  { useState,useEffect } from 'react';
function App() {
  const [birdLocation,setBirdLocationState] = useState(250);
  const [engelLeft,setEngelLeft] = useState(410);
  const [engelLeftIki,setEngelLeftIki] = useState(520);
  const [skor,setSkor] = useState(0);
  

  const dus = () =>{
    const interval = setInterval(() => {
      setBirdLocationState((birdLocation) => (birdLocation+1));
    }, 10);
    return () => clearInterval(interval);
  }
  const solagel = () =>{
    const interval = setInterval(()=>{
      setEngelLeft((engelLeft) => (engelLeft-1));
      setEngelLeftIki((engelLeftIki) => (engelLeftIki-1));
    },10);
    return () => clearInterval(interval);
  }
  const checkLocation = () =>{
    if(birdLocation<0){
      alert("Yandın");
      setSkor(0);
    }
    else if (birdLocation>480){
      alert("Yandın");
      setSkor(0);
    }
    if(birdLocation<150 && (engelLeft<70 || engelLeftIki<70)){
      alert("yandın");
      setSkor(0);
    }
    if(engelLeft<-50){
      setEngelLeft(410);
      setSkor((skor) => skor+1);
    }
    if(engelLeftIki<-50){
      setEngelLeftIki(520);
      setSkor((skor) => skor+1);
    }
    if(birdLocation>350 && (engelLeft<70 || engelLeftIki<70)){
      alert("yandın");
      setSkor(0);
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
        <div className='skor'> Skor : {skor}</div>
          <div className="game-container"
            onClick={() => keyUpHandler()}
          >
              <div className='bird' style={{top:birdLocation ,}}
                ></div>
               <div className='engelTop' style={{left:engelLeft}}></div>
               <div className='engelBottom' style={{left:engelLeft}}></div> 
               <div className='engelTop2' style={{left:engelLeftIki}}></div>
               <div className='engelBottom2' style={{left:engelLeftIki}}></div>
          </div>
    </div>
  );
}

export default App;
