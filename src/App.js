import React from 'react';
import {useSpring, animated} from 'react-spring';
import { Toggle } from './Toggle';
import {Button} from 'react-bootstrap';

const App = () => {

  const fade = useSpring({from: {opacity: 0}, opacity: 1})


  return (
    
    <animated.div className="App" style={fade}>
        <header>
       <center>
          <h1 class="mt-4"><font color="white" size="140">ゲーミング</font></h1>
       </center>
        </header>
       <main>
         <Toggle/>
        </main>
      
    </animated.div>
    
  )
}

export default App;
