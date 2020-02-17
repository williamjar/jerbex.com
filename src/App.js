import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import { Toggle } from './Toggle';


const App = () => {

  
  const jumpIn = useSpring({
    from: {transform:'translate3d(0,-100px,0)'}, transform:'translate3d(0,0,0)'
  })
  const [isToggled, setToggle] = useState(true);

  return (
    
    <animated.div className="App" style={jumpIn}>
         <button 
            type="button"
            class="btn btn-primary shadow justify-content-center" 
            onClick ={() => setToggle(!isToggled)}
            align="middle"
            >
            Hello
            </button>

        <header>
       <center>
          <h1 class="mt-3"><font color="white" size="140">ゲーミング</font></h1>
       </center>
        </header>
       <main>
         <Toggle/>
        </main>
      
    </animated.div>
    
  )
}

export default App;
